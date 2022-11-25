import type { AppProps } from "next/app";
import "@root/styles/globals.css";

import authService from "@root/services/auth";
import SessionProvider from "contexts/sessionProvier";
import { UserModel } from "@root/types/users";
import NavBar from "@root/components/NavBar";

interface CustomAppProps extends AppProps {
  currentUser: Nullable<UserModel>;
}

export default function App({
  Component,
  pageProps,
  currentUser,
}: CustomAppProps) {
  return (
    <SessionProvider currentUser={currentUser}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

App.getInitialProps = async (appContext: any) => {
  const currentUser = await authService.currentUser(appContext.ctx);

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      currentUser
    );
  }

  return {
    pageProps,
    currentUser,
  };
};

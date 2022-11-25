import { NextComponentType } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { useSessionProviderContext } from "@root/contexts/sessionContext";
import { pages } from "@root/enums/index";

/**
 * Wraps private routes and redirects to /signin when user is not signed in
 * @param Component - NextPage component
 * @returns
 */
const withAuth = (Component: NextComponentType) => {
  const Auth = (props: any) => {
    /**
     * User data added to props via context-api
     */
    const { currentUser } = useSessionProviderContext();
    const router = useRouter();

    /**
     * If user is not logged in, redirec signin page
     */
    useEffect(() => {
      const isAuth = () => {
        if (!currentUser) {
          return router.push(`/${pages.SIGN_IN}`);
        }
      };
      isAuth();
    }, []);

    /**
     * If user is signed in, return original component
     */
    return <Component {...props} />;
  };

  /**
   * Copy getInitial props so it will run as well
   */
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;

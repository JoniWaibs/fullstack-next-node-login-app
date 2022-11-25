import { useRouter } from "next/router";
import styles from "./index.module.css";

import { AuthServiceMethods, pages } from "@root/enums/index";
import useRequest from "@root/hooks/useClientSideRequest";
import { useSessionProviderContext } from "@root/contexts/sessionContext";

const LogoutButton = (): JSX.Element | null => {
  const router = useRouter();
  const { currentUser } = useSessionProviderContext();

  if (!currentUser) return null;

  const { doClientSideRequest } = useRequest({
    method: AuthServiceMethods.SIGN_OUT,
    onSuccess: () => router.push(`/${pages.SIGN_IN}`),
  });

  return (
    <button className={styles.button} onClick={() => doClientSideRequest()}>
      Log out
    </button>
  );
};

export default LogoutButton;

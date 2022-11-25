import { SessionProviderContextProps } from "@root/types/contexts";
import { SessionProviderContext } from "./sessionContext";

const { Provider } = SessionProviderContext;

/**
 * User session data provider
 * @param param0 - object
 * @returns - JSX.Element
 */
const SessionProvider = ({
  children,
  currentUser,
}: SessionProviderContextProps) => {
  const user = currentUser ?? null;
  return <Provider value={{ currentUser: user }}>{children}</Provider>;
};

export default SessionProvider;

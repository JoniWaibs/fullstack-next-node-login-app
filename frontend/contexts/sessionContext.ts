import { createContext, useContext } from "react";

import { SessionProviderContextModel } from "@root/types/contexts";

export const SessionProviderContext =
  createContext<SessionProviderContextModel>({} as SessionProviderContextModel);

/**
 * Expose useContext custom hook
 * @returns
 */
export const useSessionProviderContext = () =>
  useContext(SessionProviderContext);

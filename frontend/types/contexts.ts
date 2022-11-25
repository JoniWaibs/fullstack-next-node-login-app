import { UserModel } from ".";

export interface SessionProviderContextModel {
  currentUser: Nullable<UserModel>;
}

export interface SessionProviderContextProps {
  children: React.ReactNode;
  currentUser: Nullable<UserModel>;
}

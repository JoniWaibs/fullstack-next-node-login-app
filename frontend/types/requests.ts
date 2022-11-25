import { AuthServiceMethods } from "@root/enums/index";

export type RequestBodyType = string | number;

export interface UseRequestProps {
  onSuccess: (data: any) => void;
  method: AuthServiceMethods;
}

export interface Err {
  message?: string;
  field?: string;
}

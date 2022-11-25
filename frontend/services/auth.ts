import { NextPageContext } from "next";
import { AxiosPromise } from "axios";

import restClient from "@root/config/restClient";
import { BASE_URL } from "@root/enums/index";

class AuthService {
  private baseUrl = BASE_URL;

  /**
   * Signin/Login previous exists user
   * @param requestData - payload to add to request
   * @returns Axios promise
   */
  async signIn(requestData: object): Promise<AxiosPromise> {
    const url = `${this.baseUrl}/signin`;

    return await restClient()
      .post(url, requestData)
      .then((res) => res.data)
      .catch((error) => {
        throw error.response;
      });
  }

  /**
   * Close user session
   * @returns Axios promise
   */
  async signOut(): Promise<AxiosPromise> {
    const url = `${this.baseUrl}/signout`;

    return await restClient()
      .post(url)
      .then((res) => res.data)
      .catch((error) => {
        throw error.response;
      });
  }

  /**
   * retrieve a currentUser
   * @param context - Context to make request
   * @returns - Axios promise
   */
  async currentUser(context: NextPageContext): Promise<AxiosPromise> {
    const url = `${this.baseUrl}/currentuser`;

    return await restClient(context)
      .get(url)
      .then((res) => res.data.currentUser)
      .catch(() => ({ currentUser: null }));
  }
}

const authService = new AuthService();
export default authService;

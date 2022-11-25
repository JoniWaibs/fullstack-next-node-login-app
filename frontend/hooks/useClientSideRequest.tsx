import { useState } from "react";
import styles from "@root/styles/View.module.css";

import { Err, UseRequestProps } from "@root/types/requests";
import authService from "@root/services/auth";

/**
 * Handle client side request hook
 * @param {Object} - client side config object
 * @returns
 */
const useRequest = ({ onSuccess, method }: UseRequestProps) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const doClientSideRequest = async (requestData: object = {}) => {
    try {
      setErrors(null);
      const response = await authService[method](requestData);

      if (onSuccess) onSuccess(response.data);

      return response.data;
    } catch (err: any) {
      const { data: errorData = null } = err || {};
      const { errors = null } = errorData;

      setErrors(
        <div className={styles.alert}>
          <span>Ooops....</span>
          <ul>
            {errors.map((err: Err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doClientSideRequest, errors };
};

export default useRequest;

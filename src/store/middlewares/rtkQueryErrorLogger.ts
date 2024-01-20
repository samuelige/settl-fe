import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const errors = action.payload.data?.errors;

      if (errors) {
        Object.values(errors).map((error: any) => {
          return error.map((err: string) => {
            toast.error(err);
          });
        });
      } else if (action.payload.data.message) {
        toast.error(`${action.payload.data.message}`);
      } else {
        toast.error(`Something went wrong`);
      }
    }

    return next(action);
  };

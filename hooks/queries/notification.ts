import {
  registerNotification,
  RegisterNotificationError,
  RegisterNotificationResponse,
} from "./../../apis/registerNotification";
import { useMutation, UseMutationResult } from "react-query";

export const useRegisterNotification = (): UseMutationResult<
  RegisterNotificationResponse,
  RegisterNotificationError,
  string
> =>
  useMutation(["register", "notification"], registerNotification, {
    onError: ({
      response: {
        status,
        data: { message },
      },
    }) => {
      status === 400 && alert(message);
    },
  });

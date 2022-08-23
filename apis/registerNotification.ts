import { client } from "./../utils/axios/client";

export interface RegisterNotificationResponse {
  status: number;
  success: boolean;
  message: string;
  data: {
    id: string; // 사용자 id
    num: string; // 사용자 등록 번호 (ex. ~번째)
  };
}

export interface RegisterNotificationError {
  status: number;
  response: {
    status: number;
    data: {
      message: string;
    };
  };
}

export const registerNotification = async (
  phone: string
): Promise<RegisterNotificationResponse> => {
  const { data } = await client.post("/landing", { phone });
  return data;
};

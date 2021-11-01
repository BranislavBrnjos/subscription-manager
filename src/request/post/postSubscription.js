import { postRequest } from "../request";

  export const postSubscription = async (data) => {
    const result = await postRequest('/createSubscription', data);

    return result;
}
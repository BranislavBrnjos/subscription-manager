import { patchRequest } from "../request";

export const editSubscription = async (data) => {
  const {values, id} = data;

  const result = await patchRequest(`/subscriptions/${id}`, values, );

  return result;
}
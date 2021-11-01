import { deleteRequest } from "../request";

  export const deleteSubscription = async (id) => {
    const result = await deleteRequest(`/subscriptions/${id}`);

    return result;
}
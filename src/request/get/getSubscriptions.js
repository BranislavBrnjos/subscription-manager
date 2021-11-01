import { getRequest } from "../request";

export const getSubscriptions = async () => {
    const result = await getRequest('/subscriptions');
    return result;
}

export const getSubscriptionDetails = async (id) => {
    const result = await getRequest(`/subscriptions/${id}`);
    return result;
}
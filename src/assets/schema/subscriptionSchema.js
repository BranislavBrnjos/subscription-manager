import * as Yup from 'yup';

export const subscriptionSchema = Yup.object().shape({
    name: Yup.string().required(
        "Name is required."
    ),
    price: Yup.number().required(
        "Price is required."
    ),
    frequency: Yup.string().required(
        "Frequency is required."
    )
})
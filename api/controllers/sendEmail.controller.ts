import SendEmailRequestModel from "~/api/models/SendEmailRequestModel";
import SendEmailResponseModel from "~/api/models/SendEmailResponseModel";
export const sendEmailController = async (sendEmailRequest: SendEmailRequestModel): Promise<SendEmailResponseModel> => {
    try {
        const config = useRuntimeConfig()

        const response = await fetch(
            config.public.apiBackUrl + '/send-lamp-report',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sendEmailRequest)
            }
        )

        if (!response.ok) {
            throw new Error('Error fetching user')
        }

        return await response.json()
    } catch (error) {
        console.error('Error fetching user:', error)
        throw error
    }
}
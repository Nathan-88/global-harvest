import Mailchimp from 'mailchimp-api-v3'

export default defineEventHandler(async (event) => {
    const formData =await readBody(event);
    const userEmail = formData.email;
    const mailchimpApiKey = useRuntimeConfig().public.mailchimpApiKey;
    const mailchimpListId = useRuntimeConfig().public.mailchimpListId;

    if (typeof mailchimpApiKey !== 'string') {
        console.error('Invalid Mailchimp API key:', mailchimpApiKey);
        return { success: false, error: 'Invalid Mailchimp API key' };
    }
    
    try {
        const mailchimp = new Mailchimp(mailchimpApiKey); // Pass the API key directly
        await mailchimp.request({
            method : 'post',
            path : `/lists/${mailchimpListId}/members`,
            body : {
                email_address : userEmail,
                status : 'subscribed',
            }
        });
        console.log("email subscribed");
        return { success: true };
    } catch (error: any) {
        if (error.title === 'Member Exists') {
        console.log('User is already subscribed');
        return { success: false, error: 'User is already subscribed' };
    } else {
        console.error('Error adding user to Mailchimp:', error);
        return { success: false, error: (error as Error).message }; // Cast error to Error type to access message property
    }
    }
});


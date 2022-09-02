import emailjs from 'emailjs-com';

const serviceId = '';
const templateId = '';
const userId = '';

const EmailService = {
    sendEmail: async (dto: Record<string, unknown>) => {
        const params = {
            ...dto,
        };

        const response = await emailjs.send(
            serviceId,
            templateId,
            params,
            userId
        );

        return response.status == 200;
    },
};

export default EmailService;

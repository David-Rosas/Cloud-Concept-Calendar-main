import { Runtime } from 'webextension-polyfill';

export const onRequest = async (
    msg: EXTMessage,
    sender: Runtime.SendMessageOptionsType,
): Promise<EXTResponse | undefined> => {
    console.log('~~~~~~~', msg, sender);
    try {
        switch (msg.type) {
            default:
                return { type: 'SUCCESS' };
        }
    } catch (error) {
        throw error;
    }
};

export default onRequest;

declare type EXTMessageType = 'SAVE_LINK' | 'GET_LINK';

declare type EXTMessage<T = any> = {
    type: EXTMessageType;
    data?: T;
};

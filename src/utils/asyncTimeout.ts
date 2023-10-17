export const asyncTimeOut = (milliseconds: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
};

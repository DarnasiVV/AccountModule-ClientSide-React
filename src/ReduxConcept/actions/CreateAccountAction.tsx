
//Action Generator
export const createAccount = (accountdetails: {}) => {
    return {
        type: 'createAccount',
        payload: accountdetails
    }
}
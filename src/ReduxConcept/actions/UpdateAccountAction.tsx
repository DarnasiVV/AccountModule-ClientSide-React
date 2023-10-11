

export const updateAccount = (updateaccountdetail: {}) => {
    return {
        type: 'UpdateAccount',
        Payload: updateaccountdetail
    }
}
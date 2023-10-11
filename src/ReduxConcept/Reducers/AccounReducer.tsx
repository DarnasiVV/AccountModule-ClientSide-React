

//reducers declares the state and action



const initial: any = {
    initialdata: [{}],

}

export const accountlistdata = (state = initial, action: any) => {
    switch (action.type) {
        case 'AccountList':
            return { ...state, initialdata: action.payload }
        case 'CreateAccount':
            return { ...state, initialdata: action.payload }

        case 'UpdateAccount':
            return { ...state, initialdata: action.payload }
        default:
            return state;
    }
};







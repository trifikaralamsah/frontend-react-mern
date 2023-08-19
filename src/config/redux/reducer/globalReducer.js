const initialGlobalState = {
    name: 'Fikar',
}

const globalReducer = (state = initialGlobalState, action) => {
    if(action.type === 'UPDATE_NAME'){
        console.log(action.payload);
        return {
            ...state,
            name: 'Rakif'
        }
    }
    return state;
}

export default globalReducer;
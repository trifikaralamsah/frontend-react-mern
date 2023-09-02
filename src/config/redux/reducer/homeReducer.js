const initialHomeState = {
    dataBlog: [],
    page : {
        currentPage: 1,
        totalPage: 1,
    },
    requestTook : 0,
}

const homeReducer = (state = initialHomeState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        // console.log(action.payload);
        return {
            ...state, // spread operator
            dataBlog: action.payload
        }
    }

    if(action.type === 'UPDATE_PAGE') {
        return{
            ...state,
            page: action.payload
        }
    }

    if(action.type === 'UPDATE_TIME_HIT_API') {
        return{
            ...state,
            requestTook: action.payload
        }
    }

    return state;
}

export default homeReducer;
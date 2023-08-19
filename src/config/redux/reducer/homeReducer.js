const initialHomeState = {
    dataBlog: [],
    page : {
        currentPage: 1,
        totalPage: 1,
    },
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

    return state;
}

export default homeReducer;
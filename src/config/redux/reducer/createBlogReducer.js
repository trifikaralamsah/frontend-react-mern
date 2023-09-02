const initialCreateState = {
    form: {
        title: '',
        body: '',
        image: '',
    },
    imgPreview: null
}

const createBlogReducer = (state = initialCreateState, action) => {
    switch (action.type) {
        case 'SET_FORM_DATA':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.formType]: action.formValue
                }
            }
        case 'SET_IMG_PREVIEW':
            return {
                ...state,
                imgPreview: action.payload,
            }
        default: return state;
    }
    // if(action.type === 'SET_FORM_DATA') {
    //     return {
    //         ...state,
    //         form: {
    //             ...state.form,
    //             [action.formType]: action.formValue
    //         }
    //     }
    // }

    // if(action.type === 'SET_IMG_PREVIEW') {
    //     return {
    //         ...state,
    //         imgPreview: action.payload,
    //     }
    // }
    // return state;
}

export default createBlogReducer;
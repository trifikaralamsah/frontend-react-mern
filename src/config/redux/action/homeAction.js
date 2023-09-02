import Axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
    // var start = new Date();
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
    .then(result => {
        const responseAPI = result.data;
        // console.log('Request took:', new Date() - start, 'ms');
        // dispatch({type: 'UPDATE_TIME_HIT_API', payload: new Date() - start});
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
        dispatch({
            type: 'UPDATE_PAGE', 
            payload: {
                currentPage: responseAPI.current_page, 
                totalPage: Math.ceil(responseAPI.totalData / responseAPI.per_page) // pembulatan ke atas
            }
        })
    })
    .catch(err => {
        console.log('error: ', err);
    }) 
}
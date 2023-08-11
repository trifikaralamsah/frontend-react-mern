import { createStore } from "redux";

const initialState = {
    dataBlog: [],
    name: 'Fikar',
}

// reducer
const reducer = (state = initialState, action) => {

    return state;
}

// store
const store = createStore(reducer);

export default store;

// step config redux
// 1. buat variable initialState
// 2. buat function reducer yg menerima 2 param state dan action
// 3. return state pada function reducer
// 4. buat variable store dengan value createStore from redux yg diisi param reducer
// 5. export store di config/index.js
// 6. pada App.js bungkus route dgn <Provider store={store}> yg berasal dari react-redux dgn props dari store ../config
// 7. state global bisa dipakai dgn menggunakan useSelector dari react-redux dan harus di return state nya.
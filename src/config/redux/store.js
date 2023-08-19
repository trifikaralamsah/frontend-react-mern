import { createStore } from "redux";
import reducer from "./reducer/reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// step config redux
// 1. buat variable initialState
// 2. buat function reducer yg menerima 2 param state dan action
// 3. return state pada function reducer
// 4. buat variable store dengan value createStore from redux yg diisi param reducer
// 5. export store di config/index.js
// 6. pada App.js bungkus route dgn <Provider store={store}> yg berasal dari react-redux dgn props dari store ../config
// 7. state global bisa dipakai dgn menggunakan useSelector dari react-redux dan harus di return state nya.

// step merubah value dari state global redux
// 1. buat validasi pada function reducer dan sesuaikan nama type
// 2. kemudian set dengan action payload
// 3. pada halaman yg ingin menggunakan state global kirim dgn menggunakan dispatch
// 4. param dari dispatch yaitu type dan payload, yg type nya nama type yg dibuat direducer, dan payloadnya data dari api
// 5. terakhir jgn lupa taruh di useffet [dispatch] untuk melihat setiap perubahan

// redux thunk untuk async store redux
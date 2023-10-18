//responsal por fazer o bootstrap levantar todo nosso ambiente de configuracao do redux
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';

export default configureStore({
    reducer: rootReducer
},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // verifica a extençao.
);



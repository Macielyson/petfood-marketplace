// responsavel mesclas os reducer para utilizar em um so
import { combineReducers } from 'redux';
import shop from './shop/reducer';

const reduce = combineReducers({
    shop: shop,
});

export default reduce;
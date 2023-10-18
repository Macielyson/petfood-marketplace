import { produce } from 'immer'; // funçao
import types from './types';

const INITIAL_STATE = {
    customer: {},
};

function shop(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_CUSTOMER: {
            // draft cria uma copia da state
            return produce(state, (draft) => {
                draft.customer = action.customer;
            })
        }
        default: return state;
    }
}

export default shop;


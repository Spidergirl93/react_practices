import { configureStore } from '@reduxjs/toolkit';

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'INCREMENT') {
        return(
            {
                counter: state.counter + 1
            }
        );
    } else if(action.type === 'DECREMENT') {
        return(
            {
                counter: state.counter - 1
            }
        );
    }
    return(state);
};

const store = configureStore({reducer: counterReducer});

export default store;
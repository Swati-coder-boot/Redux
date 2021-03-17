// reducer- it is a pure function ..it takes two paramters
// import action types

import {INCR, DECR} from "./counter.action";
let intialState = {
    counter :{
        qty:1,
    },

};
let counterReducer = (state=intialState, action) =>{
    let {type} = action;
    switch(type){
        case INCR:
            return{
                counter:{
                    qty: state.counter.qty + 1,
                },
            };
        case DECR:
            return{
                counter:{
                    qty: state.counter.qty - 1,
                },
            };

        default:
            return state;
    }

};
export default counterReducer;
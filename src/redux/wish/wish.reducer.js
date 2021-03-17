import {Good_Morning, Good_Night} from "./wish.actions";

let initialState = {
    message:"hello,...."
};

let messageReducer = (state=initialState,action) => {
    switch(action.type){
        case Good_Morning:
        return{
            message:"Good_Morning",

        }
        case Good_Night:
        return{
            message:"Good_Night",
        };
        default:
            return state;
    }

};

export { messageReducer };





// JavaScript Developer is responsible for the programming
//  and development of applications and software using the popular programming language
// create action types
// create actions
// export action types and action

const Good_Morning = "Good Morning";
const Good_Night = "Good Night";

let sayGMAction = () =>{
    return{
        type:Good_Morning,
    }
}

let sayGNAction = () =>{
    return{
        type:Good_Night,
    }

}
export {Good_Morning, Good_Night, sayGMAction, sayGNAction}

// exported as named
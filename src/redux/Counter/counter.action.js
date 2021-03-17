// create action types
// create actions
// export action types and action 
// action means it retuns actionable object {}, it contains one property ie type, payload is optional

const INCR = "incrAction";
const DECR = "decrAction";

let incrAction =()=>{
    return{type:DECR};
}

let decrAction =() =>{
    return{type:INCR};
}

export {DECR, INCR, incrAction, decrAction};
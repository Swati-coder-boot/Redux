import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { incrAction, decrAction } from "../../redux/Counter/counter.action";

let Counter=()=>{
    let dispatch = useDispatch();

    let counterReducer =useSelector((state)=>{
         return state.counter;
    })
    let decrHandler=()=>{
        dispatch(decrAction());
    }
    let incrHandler=()=>{
        dispatch(incrAction());
    }
    return(
        <React.Fragment>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <pre>{JSON.stringify(counterReducer )}</pre>
                            <h4>Counter Example</h4>
                        </div>
                        <div className="card-body">
                            <button className="btn btn-primary" onClick={decrHandler}>+</button>
                            {counterReducer.counter.qty}
                            <button className="btn btn-success" onClick={incrHandler}>-</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Counter;
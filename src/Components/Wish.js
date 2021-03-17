import React from "react";
import {sayGMAction, sayGNAction } from "../redux/wish/wish.actions";
import { useSelector,useDispatch} from "react-redux";


let Wish =()=>{
    let messageData=useSelector((state)=>{
        return state.wishMessage
    })
    let dispatch = useDispatch();
    let sayGM = ()=>
        dispatch(sayGMAction());
    

    let sayGN = ()=>
        dispatch(sayGNAction());
    

    return(
        <React.Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <pre>{JSON.stringify(messageData)}</pre>
                                <h4>Message:{messageData.message}</h4>
                            </div>
                                <div className="card-body">
                                <button className="btn btn-primary mr-4" onClick={sayGM}>GM</button>
                                <button className="btn btn-success" onClick={sayGN}>GN</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            
        </React.Fragment>
    )
};
export default Wish;
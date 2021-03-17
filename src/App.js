import React from "react";
import Wish from "./Components/Wish";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store"; 
import { Provider } from "react-redux";
import Counter from "./Components/ProductCounter/Counter";



let App = () =>{
  return(<React.Fragment>
    <nav className="nav navbar-dark bg-dark">
      <a href="/">React - Redux</a>
    </nav>
    <Provider store={store}>
      <Wish/>
      <Counter />
      </Provider>
      
  </React.Fragment>
  );
}

export default App;
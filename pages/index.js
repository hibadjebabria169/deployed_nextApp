import { Provider } from "react-redux";
import store from "../store/index";
import React from "react";
import MainApp from "../components/MainApp";

function App() {

 return (
    
      <Provider store={store}>
        <MainApp/>
      </Provider>
 )
}
export default App;

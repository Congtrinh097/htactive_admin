import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from "./Screens/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar/SideBar";

class RouteContainer extends React.Component<any,any>{
  render(){
    return(
      <Router>
        <div>
          <Header/>
          <SideBar/>
          <Route exact path="/" component={Home} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default RouteContainer;
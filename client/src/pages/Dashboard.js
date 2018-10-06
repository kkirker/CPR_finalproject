// export default Contact
import React from "react";
import MenuBar from "../components/menuBarComponents/MenuBar";
import NavLinks from "../components/menuBarComponents/NavBar/NavLinks";
import DashContent from "../components/dashboard/DashContent"


import AuthUserContext from '../components/AuthUserContext';
import withAuthorization from '../components/withAuthorization';


const Dashboard = () => (

  <AuthUserContext.Consumer>
  {authUser =>
    <div>
       <DashContent/>
    </div>
  }
</AuthUserContext.Consumer>

);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Dashboard);

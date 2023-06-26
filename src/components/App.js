import React from "react";
import Header from "./Header";
import TicketList from "./TicketList";

//This component is the root component of our application. It is the parent of all other components.
function App(){
  return (
    <React.Fragment> 
      <Header />
      <TicketList /> 
    </React.Fragment>
  );
}

export default App;
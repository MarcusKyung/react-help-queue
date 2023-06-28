import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
//class component so we use methods not functions
class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      count: 0,
      mainTicketList: [] //adding mainTicketList to state so we can pass as a prop to TicketList
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: (prevState.count + 1) % 5 //mod of any number smaller than the divisor will yield itself because (ex: 1 % 5 is 1 divided by 5 which is zero which leaves a mod of 1)
    }));
  };
  
  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  count: 0 });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
  
    if (this.state.count === 0) {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} />;
      buttonText = "Add Ticket";
    } else if (this.state.count === 1) {
      currentlyVisibleState = <Question1 />;
      buttonText = "Next Question";
    } else if (this.state.count === 2) {
      currentlyVisibleState = <Question2 />;
      buttonText = "Next Question";
    } else if (this.state.count === 3) {
      currentlyVisibleState = <Question3 />;
      buttonText = "Next Question";
    } else if (this.state.count === 4) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
      buttonText = "Return to Ticket List";
    }
  
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <p>{this.state.count}</p>
      </React.Fragment>
    );
  }
}  

export default TicketControl;
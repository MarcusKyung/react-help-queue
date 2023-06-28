import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: (prevState.count + 1) % 5 //mod of any number smaller than the divisor will yield itself because (ex: 1 % 5 is 1 divided by 5 which is zero which leaves a mod of 1)
    }));
  };
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
  
    if (this.state.count === 0) {
      currentlyVisibleState = <TicketList />;
      buttonText = "Next Question";
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
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Add Ticket";
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
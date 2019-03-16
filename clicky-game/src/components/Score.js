import React from "react";
import Card from "./Card";
// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore:0
  };

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <p className="card-text">Score: {this.state.score}</p>
          <p className="card-text">Top Score: {this.state.topScore}</p>
        </div>
        <div className="card-body">  
         <div className="inner-card">
        <div onClick={this.handleIncrement} className="img-container">
            <img alt={""} src={"https://vignette.wikia.nocookie.net/marriedwithchildren/images/b/b8/Al_Bundy.jpg/revision/latest?cb=20141207170838"} />
        </div>
    </div>
          
        </div>
      </div>
    );
  }
}

export default Score;

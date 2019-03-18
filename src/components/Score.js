import React from "react";
import Card from "./Card";
import images from "../images.json";
// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore:0,
    clickedIds:[],
    images
  };

    // handleIncrement increments this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 });
    };
  
    handleTopScore=()=>{
      if (this.state.score>=this.state.topScore){
        this.setState({topScore:this.state.score})
      }
      this.setState({clickedIds:[]});
    }
    shuffleImages(arr){
     
        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    }

checkGuess = (currentId)=> {
  this.setState(state => {
    state.clickedIds.push(currentId);
  });
  console.log(this.state.clickedIds);
  let matches=false;
  // eslint-disable-next-line 
  this.state.clickedIds.map((usedId) =>{
    if (usedId===currentId){
      matches=true;
    }
  });
  if(matches){
    
    if(this.state.score===this.state.images.length){
      this.setState({score:0});
      this.setState({topScore:0});
    }
    this.setState({score:0});
    this.handleTopScore();
  }else{
    this.handleIncrement();
  }
  this.shuffleImages(this.state.images);
}

endGame(){

  this.setState({score:0})
  this.setState({topScore:0});
  
}
 
  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          <p className="card-text">How well do you know Married With Children?</p>
          <p className="card-text">Click on each picture only once!</p>
          <p className="card-text">Score: {this.state.score}</p>
          <p className="card-text">Top Score: {this.state.topScore}</p>
        </div>
        <div>
        {(this.state.score===this.state.images.length)?
      this.endGame():""}</div>
        <div className="card-body ">  
        {this.state.images.map(image => (
          <Card
            id={image.id}
            key={image.id}
            image={image.image}
            checkGuess={this.checkGuess}
          />
        ))}
      
        </div>
      </div>
    );
  }
}

export default Score;

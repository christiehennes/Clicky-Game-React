import React, { Component } from "react";
import FriendCard from "./components/ItemCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import items from "./items.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    items, 
    score: 0,
    clicked: []
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const items = this.state.items.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ items });
  };

  checkClick = id => {

    //Use this to check the clicked item and see if they have already clicked it in the past
  }

  resetGame = () => {

  }

  addPoint = () => {
    
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Score>Score: {this.state.score}</Score>
        {/* Add score here */}
        {this.state.items.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            // name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

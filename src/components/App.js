import React from 'react';
import Header from './Header';
import Player from './Player';

class App extends React.Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 99
      },
      {
        name: "Treasure",
        id: 2,
        score: 83
      },
      {
        name: "Ashley",
        id: 3,
        score: 34
      },
      {
        name: "James",
        id: 4,
        score: 12
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }
  
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}
      </div>
    );
  }
}

export default App;

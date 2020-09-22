import React from "react";
import GitCardList from "./GitCardList";
import SearchForm from "./SearchForm";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

// List of most active github users: https://gist.github.com/paulmillr/2657075

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileToAdd) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileToAdd],
    }));
  };
  removeProfile = (profileToRemove) => {
    console.log(profileToRemove);
    this.state.profiles.splice(this.state.profiles.indexOf(profileToRemove), 1);
    this.setState((prevState) => ({
      profiles: this.state.profiles,
    }));
  };
  render() {
    return (
      <Container>
        <div className="header">{this.props.title}</div>
        <SearchForm addNewProfile={this.addNewProfile} />
        <GitCardList
          profiles={this.state.profiles}
          removeProfile={this.removeProfile}
        />
      </Container>
    );
  }
}

export default App;

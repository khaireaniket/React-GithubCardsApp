import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchForm extends React.Component {
  state = { userName: "" };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const result = await resp.json();
    console.log(result);
    this.props.addNewProfile(result);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>https://api.github.com/users/</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-url"
            aria-describedby="basic-addon3"
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
            placeholder="GitHub username"
            required
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Add card
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    );
  }
}

export default SearchForm;

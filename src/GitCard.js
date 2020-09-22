import React from "react";
import { Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class GitCard extends React.Component {
  state = { isHovered: false };
  render() {
    const profile = this.props.profile;
    return (
      <Card style={{ flex: 1, maxWidth: "15em" }} bg="dark" text="white">
        <div
          onMouseOver={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <Card.Img variant="top" src={profile.avatar_url} />
          {this.state.isHovered && (
            <Badge
              pill
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                cursor: "pointer",
              }}
              variant="danger"
              onClick={() => this.props.removeProfile(profile)}
            >
              X
            </Badge>
          )}
        </div>
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>
            <Badge variant="success">{profile.login}</Badge>{" "}
            <Badge variant="info">Repos {profile.public_repos}</Badge>{" "}
            <Badge variant="warning">Followers {profile.followers}</Badge>{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div>
            <small>Works for {profile.company}</small>
          </div>
          <div>
            <small>Lives in {profile.location}</small>
          </div>
        </Card.Footer>
      </Card>
    );
  }
}

export default GitCard;

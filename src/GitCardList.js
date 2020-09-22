import React from "react";
import GitCard from "./GitCard";
import { CardColumns } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const GitCardList = (props) => {
  return (
    <CardColumns>
      {props.profiles.map((profile, id) => (
        <GitCard
          key={id}
          profile={profile}
          removeProfile={props.removeProfile}
        />
      ))}
    </CardColumns>
  );
};

export default GitCardList;

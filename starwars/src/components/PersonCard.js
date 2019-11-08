import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PersonCard = (props) => {
    console.log(props.person.name);
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.person.name}</CardTitle>
          <CardSubtitle>Birth year: {props.person.birth_year}</CardSubtitle>
          <CardText>Click the button below for more information:</CardText>
          <Button>More information</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;
import React, {useState} from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PersonCard = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Card body inverse style={{
          backgroundColor: 'indigo',
          display: 'flex',
          alignItems: 'center'
          }}>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody body inverse style={{
            backgroundColor: 'thistle',
            width: '50%',
            color: 'midnightblue'
            }}>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Birth year: {props.year}</CardSubtitle>
          <CardText>Click the button below for more information:</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                More information
                </DropdownToggle>
            <DropdownMenu>
                <DropdownItem disabled>Eye color: {props.eyeColor}</DropdownItem>
                <DropdownItem disabled>Gender: {props.gender}</DropdownItem>
                <DropdownItem disabled>Hair Color: {props.hairColor}</DropdownItem>
                <DropdownItem disabled>Height: {props.height}</DropdownItem>
                <DropdownItem disabled>Mass: {props.mass}</DropdownItem>
                <DropdownItem disabled>Skin Color: {props.skinColor}</DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;
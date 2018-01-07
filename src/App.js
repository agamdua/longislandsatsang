import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Button,
  ButtonGroup,
  Label,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Table,
  Grid
} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Long Island Satsang</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Contact
            </NavItem>
          </Nav>
        </Navbar>

        <Grid>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Connection Person</th>
              <th>RSVP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>January 20th, 2018</td>
              <td>Agam Dua <Label bsStyle="warning">Not RSVP'd yet</Label></td>
              <td>
                <ButtonGroup bsSize="xsmall">
                  <Button>Yes</Button>
                  <Button>No </Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>January 27th, 2018</td>
              <td>Shetal Shah</td>
              <td>
                <ButtonGroup bsSize="xsmall">
                  <Button bsStyle="success">Yes</Button>
                  <Button>No</Button>
                </ButtonGroup>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>February 3, 2018</td>
              <td>Agam Dua <Label bsStyle="danger">Volunteer Declined!</Label></td>
              <td>
                <ButtonGroup bsSize="xsmall">
                  <Button>Yes</Button>
                  <Button bsStyle="danger" bsSize="xsmall">No</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
        </Grid>
      </div>
    );
  }
}

export default App;

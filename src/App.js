import React, { Component } from 'react';
import './App.css';

import {
  Badge,
  Button,
  ButtonGroup,
  Container,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  Table,
  UncontrolledDropdown,
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Long Island Area Satsang</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Login
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
        <br></br>
        <Row><h4>Transmission Details</h4></Row>
        <br></br>

          <Row>
          <Table hover>
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
                <td>Agam Dua <Badge color="warning">Waiting for RSVP</Badge></td>
                <td>
                  <ButtonGroup size="sm">
                    <Button>Yes</Button>
                    <Button>No </Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>January 27th, 2018</td>
                <td>Shetal Shah</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button color="success">Yes</Button>
                    <Button>No</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>February 3, 2018</td>
                <td>Agam Dua <Badge color="danger">Declined - Find Backup</Badge></td>
                <td>
                  <ButtonGroup size="sm">
                    <Button>Yes</Button>
                    <Button color="danger" size="sm">No</Button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChartWrapper from './ChartWrapper';
import GenderDropdown from './GenderDropdown';
function App() {
  const [state, setState] = useState({gender: 'men'});

  const genderSelected = (gender) =>{
    setState({gender});
  }

  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand>Bar chart</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col xs={12}>
            <GenderDropdown genderSelected={genderSelected}/>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <ChartWrapper gender={state.gender}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

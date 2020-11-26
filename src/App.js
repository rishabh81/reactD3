// import React, {useState} from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ChartWrapper from './ChartWrapper';
// // import GenderDropdown from './GenderDropdown';
// const MARGIN = { TOP: 10, BOTTOM: 50, LEFT:50, RIGHT: 10};
// const HEIGHT = 200 - MARGIN.TOP - MARGIN.BOTTOM;
// const WIDTH = 300 - MARGIN.LEFT - MARGIN.RIGHT;
// const data = [
//     {"attempt":"1","points":"0","name":"Trijntje Keever"},
//     {"attempt":"2","points":"-3","name":"Zeng Jinlian"},
//     {"attempt":"3","points":"1","name":"Anna Bates"},
//     {"attempt":"4","points":"2","name":"Jane Bunford"},
//     {"attempt":"5","points":"-1","name":"Yao Defen"},
//     {"attempt":"6","points":"0","name":"Sandy Allen"},
//     {"attempt":"7","points":"0","name":"Trijntje Keever"},
//     {"attempt":"8","points":"3","name":"Zeng Jinlian"},
//     {"attempt":"9","points":"2","name":"Anna Bates"},
//     {"attempt":"10","points":"1","name":"Jane Bunford"},
//     {"attempt":"11","points":"4","name":"Yao Defen"},
//     {"attempt":"12","points":"0","name":"Sandy Allen"}
// ];
// function App() {
//   const [state, setState] = useState({gender: 'men'});

//   const genderSelected = (gender) =>{
//     setState({gender});
//   }

//   return (
//     <div className="App">
//       <Navbar bg="light">
//         <Navbar.Brand>Pie chart</Navbar.Brand>
//       </Navbar>
//       <Container>
//         <Row>
//           <Col xs={12}>
//             <ChartWrapper configs={{height:HEIGHT, width: WIDTH, data}}/>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;
import './App.css';
import CardComponent from './components/card';
import useGetInfo from './hooks/useGetInfo';
import AvatarImage from './images/avatar.jpg';
import React  from 'react';
export default function App() {
  const { data, loader } = useGetInfo();
  return (
    <div className="App">
      <CardComponent
        data={data}
        loader={loader}
      />
    </div>
  );
}



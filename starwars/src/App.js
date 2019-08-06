import React from 'react';
//import axios from "axios";
import './App.css';
import PeopleList from './components/PeopleList';


const App = () => {
  // const [name, setName] = useState();
  // const [mass, setMass] = useState();
  // //const [eye_color, setEye_Color] = useState();



  // useEffect(() => {
  //   axios
  //     .get("https://swapi.co/api/people")
  //     .then((res) => {
  //       setName(res.data.name);
  //       setMass(res.data.mass);
  //       //setEye_Color(res.data.eye_color);
  //         console.log(name);
  //         console.log(mass);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   })
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      < PeopleList />
    </div>
  );
}

export default App;




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
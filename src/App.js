import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>


    </div>
  );
}
// person ekta function abar HTML tag
function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '5px solid lightsalmon',
    margin: '20px',
    borderRadious: '10 px'
  }
  return (
    <div style={person}>
      <h1>Name: Sakib All Hasan</h1>
      <h4>Profession:Cricketer</h4>
    </div>

  );
}




function Friend() {
  return (
    <div className="person">
      <h3>
        Phone:
      </h3>
    </div>
  )
}
export default App;

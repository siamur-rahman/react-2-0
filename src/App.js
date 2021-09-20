

import './App.css';

function App() {
  const nayoks = ['rubel', 'bapparaj', 'shakib khan', 'joshim', 'bappi', 'shuvo'];
  const cinemas = [
    { nayok: 'koober', nayika: 'kopila' },
    { nayok: 'rubel', nayika: 'moushumi' },
    { nayok: 'rajjak', nayika: 'kobori' },
    { nayok: 'kshakib khan', nayika: 'apu biswas' },

  ]

  return (
    <div className="App">
      <ul>
        {/* {//ageeer
          //ekhon loop korate dynamic hocche||||333|||
          nayoks.map(nayok => <li>{nayok}</li>)
        } */}

        {/* {
          cinemas.map(cinema => console.log(cinema))
        } */}
        <Cinema nayok="james bond (loop chara)" nayika="Cat w"></Cinema>
        {
          cinemas.map(cinema => <Cinema nayok="james bond (similer loop diye...)" nayika="Cat w"></Cinema>)
        }
        {
          cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
        }


      </ul>




    </div>
  );
}
// person ekta function abar HTML tag
function Person(props) {
  // console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '5px solid lightsalmon',
    margin: '20px',
    borderRadius: '20 px'
  }
  return (
    <div style={person}>

      <p style={{ backgroundColor: 'yellow' }}>similer in look different in in data</p>
      <h1>Name:{props.name}(different)</h1>
      <h4>nayika:{props.nayika}</h4>
      <h4>{props.name} hero of {props.nayika}</h4>
    </div>

  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>nayok: {props.nayok}</h2>
      <h4>nayika:{props.nayika}</h4>
    </div>
  )
}




function Friend(props) {
  return (
    <div className="person">
      <h3>Phone:</h3>
      <h3>Phone:{props.phone}</h3>
      <h3>Phone:{props.phone} address:{props.address}</h3>
    </div>
  )
}

export default App;















//|||||||||||||||||||||||||||||||||||||5555||||||||||||||||||||||||||||||||
// import './App.css';

// function App() {
//   const nayoks = ['rubel', 'bapparaj', 'shakib khan', 'joshim', 'bappi', 'shuvo'];
//   const cinemas = [
//     { nayok: 'koober', nayika: 'kopila' },
//     { nayok: 'rubel', nayika: 'moushumi' },
//     { nayok: 'rajjak', nayika: 'kobori' },
//     { nayok: 'kshakib khan', nayika: 'apu biswas' },

//   ]

//   return (
//     <div className="App">
//       <ul>

//         {/* {

//           //ageeer

//           //ekhon loop korate dynamic hocche||||111|||
//           nayoks.map(nayok => console.log(nayok))
//         } */}
//         {/* {
//           //ekhon loop korate dynamic hocche||||222|||
//           nayoks.map(nayok => nayok)
//         } */}
//         {
//           //ekhon loop korate dynamic hocche||||333|||
//           nayoks.map(nayok => <li>{nayok}</li>)
//         }

//       </ul>




//     </div>
//   );
// }
// // person ekta function abar HTML tag
// function Person(props) {
//   // console.log(props);
//   const person = {
//     backgroundColor: 'skyblue',
//     border: '5px solid lightsalmon',
//     margin: '20px',
//     borderRadius: '20 px'
//   }
//   return (
//     <div style={person}>

//       <p style={{ backgroundColor: 'yellow' }}>similer in look different in in data</p>
//       <h1>Name:{props.name}(different)</h1>
//       <h4>nayika:{props.nayika}</h4>
//       <h4>{props.name} hero of {props.nayika}</h4>
//     </div>

//   );
// }

// function Cinema(props) {
//   return (
//     <div className="person">
//       <h2>nayok: {props.nayok}</h2>
//       <h4>nayika:{props.nayika}</h4>
//     </div>
//   )
// }




// function Friend(props) {
//   return (
//     <div className="person">
//       <h3>Phone:</h3>
//       <h3>Phone:{props.phone}</h3>
//       <h3>Phone:{props.phone} address:{props.address}</h3>
//     </div>
//   )
// }

// export default App;











//|||||||||||||||||||||||||||||44444||||||||||||||||||||||||||||||||||||||||||||||
// import './App.css';

// function App() {
//   const nayoks = ['rubel', 'bapparaj', 'shakib khan', 'joshim', 'bappi', 'shuvo']
//   return (
//     <div className="App">
//       <ul>
//         {/* {
//           //ekhon loop korate dynamic hocche||||111|||
//           nayoks.map(nayok => console.log(nayok))
//         } */}
//         {/* {
//           //ekhon loop korate dynamic hocche||||222|||
//           nayoks.map(nayok => nayok)
//         } */}
//         {
//           //ekhon loop korate dynamic hocche||||333|||
//           nayoks.map(nayok => <li>{nayok}</li>)
//         }



//         {/* //ager part
//         <li>{nayoks[0]}</li>
//         <li>{nayoks[1]}</li>
//         <li>{nayoks[2]}</li>
//         <li>{nayoks[3]}</li>
//         <li></li> */}

//       </ul>

//       <Person name={nayoks[0]} nayika="moushomi"></Person>
//       <Person name={nayoks[1]} nayika="kosto"></Person>
//       <Person name={nayoks[2]} nayika="loterry"></Person>
//       <Person name={nayoks[3]} nayika="apu"></Person>
//       <Person></Person>
//       <Person></Person>

//       <Friend></Friend>
//       <Friend phone="02333" address="nowakhali"></Friend>
//       <Friend phone="0552333" address="andaman"></Friend>


//     </div>
//   );
// }
// // person ekta function abar HTML tag
// function Person(props) {
//   // console.log(props);
//   const person = {
//     backgroundColor: 'skyblue',
//     border: '5px solid lightsalmon',
//     margin: '20px',
//     borderRadius: '20 px'
//   }
//   return (
//     <div style={person}>

//       <p style={{ backgroundColor: 'yellow' }}>similer in look different in in data</p>
//       <h1>Name:{props.name}(different)</h1>
//       <h4>nayika:{props.nayika}</h4>
//       <h4>{props.name} hero of {props.nayika}</h4>
//     </div>

//   );
// }


// function Friend(props) {
//   return (
//     <div className="person">
//       <h3>Phone:</h3>
//       <h3>Phone:{props.phone}</h3>
//       <h3>Phone:{props.phone} address:{props.address}</h3>
//     </div>
//   )
// }

// export default App;







//|||||||||||||||||||||||||||||||333333||||||||||||||||||||||||||||||
// import './App.css';

// function App() {
//   const nayoks = ['rubel', 'bapparaj', 'shakib khan', 'joshim', 'bappi', 'shuvo']
//   return (
//     <div className="App">
//       <ul>
//          //valovabe dynamic hocche na tai ekhane loop kore dynamic korbo
//         <li>{nayoks[0]}</li>
//         <li>{nayoks[1]}</li>
//         <li>{nayoks[2]}</li>
//         <li>{nayoks[3]}</li>
//         <li></li>

//       </ul>

//       <Person name={nayoks[0]} nayika="moushomi"></Person>
//       <Person name={nayoks[1]} nayika="kosto"></Person>
//       <Person name={nayoks[2]} nayika="loterry"></Person>
//       <Person name={nayoks[3]} nayika="apu"></Person>
//       <Person></Person>
//       <Person></Person>

//       <Friend></Friend>
//       <Friend phone="02333" address="nowakhali"></Friend>
//       <Friend phone="0552333" address="andaman"></Friend>


//     </div>
//   );
// }
// // person ekta function abar HTML tag
// function Person(props) {
//   // console.log(props);
//   const person = {
//     backgroundColor: 'skyblue',
//     border: '5px solid lightsalmon',
//     margin: '20px',
//     borderRadius: '20 px'
//   }
//   return (
//     <div style={person}>

//       <p style={{ backgroundColor: 'yellow' }}>similer in look different in in data</p>
//       <h1>Name:{props.name}(different)</h1>
//       <h4>nayika:{props.nayika}</h4>
//       <h4>{props.name} hero of {props.nayika}</h4>
//     </div>

//   );
// }


// function Friend(props) {
//   return (
//     <div className="person">
//       <h3>Phone:</h3>
//       <h3>Phone:{props.phone}</h3>
//       <h3>Phone:{props.phone} address:{props.address}</h3>
//     </div>
//   )
// }

// export default App;









//|||||||||||||||||||||||||||||||||2222||||||||||||||||||||||||||||||||||||
// import './App.css';

// function App() {
//   const nayoks=['rubel', 'bapparaj','shakib khan','joshim']
//   return (
//     <div className="App">
//       <a href="https://www.google.com/">google.com</a>
//       <p id="title">Title</p>

//       <Person name={nayoks[0]} nayika="moushomi"></Person>
//       <Person name={nayoks[1]} nayika="kosto"></Person>
//       <Person name={nayoks[2]} nayika="loterry"></Person>
//       <Person name={nayoks[3]} nayika="apu"></Person>
//       <Person></Person>
//       <Person></Person>

//       <Friend></Friend>
//       <Friend phone="02333" address="nowakhali"></Friend>
//       <Friend phone="0552333" address="andaman"></Friend>


//     </div>
//   );
// }
// // person ekta function abar HTML tag
// function Person(props) {
//   // console.log(props);
//   const person = {
//     backgroundColor: 'skyblue',
//     border: '5px solid lightsalmon',
//     margin: '20px',
//     borderRadius: '20 px'
//   }
//   return (
//     <div style={person}>
//       <p style={{ backgroundColor: 'red' }}>similer in look similer in in data</p>
//       <h1>Name: Sakib All Hasan (similer)</h1>
//       <h4>Profession:Cricketer</h4>
//       <hr></hr>
//       <p style={{ backgroundColor: 'yellow' }}>similer in look different in in data</p>
//       <h1>Name:{props.name}(different)</h1>
//       <h4>nayika:{props.nayika}</h4>
//       <h4>{props.name} hero of {props.nayika}</h4>
//     </div>

//   );
// }


// function Friend(props) {
//   return (
//     <div className="person">
//       <h3>Phone:</h3>
//       <h3>Phone:{props.phone}</h3>
//       <h3>Phone:{props.phone} address:{props.address}</h3>
//     </div>
//   )
// }

// export default App;












//||||||||||||||||||||||||||||11111111||||||||||||||||||||||||||||||
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <a href="https://www.google.com/">google.com</a>
//       <p id="title">Title</p>
//       <Person name="Rubel" nayika="moushomi"></Person>
//       <Person name="omarsani" nayika="kosto"></Person>
//       <Person name="joshim" nayika="loterry"></Person>
//       <Person name="shakib khan" nayika="apu"></Person>
//       <Person></Person>
//       <Person></Person>

//       <Friend></Friend>
//       <Friend phone="02333" address="nowakhali"></Friend>
//       <Friend phone="0552333" address="andaman"></Friend>


//     </div>
//   );
// }
// // person ekta function abar HTML tag
// function Person(props) {
//   // console.log(props);
//   const person = {
//     backgroundColor: 'skyblue',
//     border: '5px solid lightsalmon',
//     margin: '20px',
//     borderRadius: '20 px'
//   }
//   return (
//     <div style={person}>
//       <p style={{ backgroundColor: 'red' }}>similer in look similer in in data</p>
//       <h1>Name: Sakib All Hasan (similer)</h1>
//       <h4>Profession:Cricketer</h4>
//       <hr></hr>
//       <p style={{ backgroundColor: 'yellow' }}>similer in look different in in data</p>
//       <h1>Name:{props.name}(different)</h1>
//       <h4>nayika:{props.nayika}</h4>
//       <h4>{props.name} hero of {props.nayika}</h4>
//     </div>

//   );
// }


// function Friend(props) {
//   return (
//     <div className="person">
//       <h3>Phone:</h3>
//       <h3>Phone:{props.phone}</h3>
//       <h3>Phone:{props.phone} address:{props.address}</h3>
//     </div>
//   )
// }

// export default App;

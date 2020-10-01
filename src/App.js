import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import MyTextarea from "./MyTextarea";
import MyHello from "./MyHello";
import Article from "./Article";
import logo from "./logo.svg";
import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Hello React</h1>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    const current = { color: "Blue" };
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/textarea" activeStyle={current}>
                テキスト入力
              </NavLink>
            </li>
            <li>
              <NavLink to="/hello" activeStyle={current}>
                Hello
              </NavLink>
            </li>
            <li>
              <NavLink to="/article" activeStyle={current}>
                公開記事
              </NavLink>
            </li>
            <li>
              <NavLink to="/article/13" activeStyle={current}>
                記事No.13
              </NavLink>
            </li>
            <li>
              <NavLink to="/article/108" activeStyle={current}>
                記事No.108
              </NavLink>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/textarea" compornent={MyTextarea} />
            <Route path="hello" component={MyHello} />
            <Route path="article" compoent={Article} />
            <Route path="article/:id" component={Article} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Hello React</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import React, { Fragment, Component } from 'react';
import './App.css';
import ParentListItems from "./components/ParentListItems";


class App extends Component{
  render() {
    return (
      <Fragment>
        <div className="App">
          <ParentListItems />
        </div>
      </Fragment>
    );
 }
}

export default App;

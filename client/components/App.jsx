import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: ''
    }
  }

  render(){
    return(
      <div>
        <h1>Hello from React!</h1>
      </div>
    )
  }
}

export default App;
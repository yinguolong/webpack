import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data:""
    }
  }
   componentDidMount(){
     this.setState({data:"yinguolong"})
   }
  render(){
    return(
      <div>
        用户名 :
        <p>{this.state.data}</p>
      </div>
    )
  }
}
export default App;

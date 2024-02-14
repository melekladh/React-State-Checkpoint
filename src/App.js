import './App.css';
import React from 'react';
class App extends React.Component {
//   componentDidMount() { 
// setInterval(()=>{this.setState({timer:this.state.timer+1});console.log(this.state.timer)}
// ,1000)
  // }
  state = {
    Person:{fullName:"malek",
    bio:"gmc", 
     profession:"student"},
     shows:false,
     timer:0
  }

  render() {
    const handleClick=()=>{
      // this.setState({shows:!this.state.shows})
// if(this.state.shows===true){
//   this.setState({shows:!this.state.shows})
// }
// else{
//   this.setState({shows:!this.state.shows})
// }

if(this.state.shows===true){
  this.setState({shows:false})
}
else{
  this.setState({shows:true})
}
console.log(this.state.shows)
    }

    

    return <>
  {
    this.state.shows && <> <h2>{this.state.Person.fullName}</h2>
    <h2>{this.state.Person.bio}</h2></>
  }
      <button onClick={()=>handleClick()}> ClickMe</button>
<h1>{this.state.timer}</h1>
    </>
    
  }

}
export default App;

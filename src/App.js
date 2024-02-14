import './App.css';
import React from 'react';
class App extends React.Component {
  // Create a field that shows the time interval since the last 
  // component was mounted using the component lifecycle.
//   componentDidMount() { 
// setInterval(()=>{this.setState({timer:this.state.timer+1});console.log(this.state.timer)}
// ,1000)
//   }
  //creating a state containing a Person  and a boolean shows and a timer
  state = {
    Person:{fullName:"malek",
    bio:"gmc", 
     profession:"student"},
     shows:false,
     timer:0
  }
//a function handleclick 

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
{/* I added a button that toggles the show state.
When the show state is true, the person's profile will appear. */}
      <button onClick={()=>handleClick()}> ClickMe</button>
<h1>{this.state.timer}</h1>
    </>
    
  }

}
export default App;

import './App.css';
import { Component } from 'react';

class App extends Component {
  
  render(){
    // console.log(image)
  return (
    <div className="App">
      <div className="container Containers-css">
        <h1>Welcome To</h1>
        <h1 className="gps">GPS Web</h1>
      
      <div className="signForm">
        <h2 className="signin">Sign In</h2>
        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control email" placeholder="hello@Sample.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control password" placeholder="Enter Password" />
          </div>
          <div className="button-submit form-group ">
            <input type="submit" className="submit-button form-control btn "  />
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
}

export default App;

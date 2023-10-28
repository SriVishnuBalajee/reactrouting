import React, { useState, createContext} from "react";
import { BrowserRouter, Routes, Route, Link, useInRouterContext } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Registration from "./Registration";
import UserInfo from "./UserInfoz";
import './App.css';

export const sharedData = createContext();

function App() {
  const [variable, setVariable] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [agree, setAgree] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here using the username and password
    // For simplicity, let's just set isLogin to true if username and password match
    (username === "Srivishnu"  && password === "Mathan")? setIsLogin(true): (username === "Mathan"  && password === "Kumar")? setIsLogin(true):alert("Invalid Credentials");
  };
  const updateAgree = (event) => {
    setAgree(event.target.onClick);
  }
  const updateLabel = () => {
    console.log(variable)
    if(variable%2!=0){
      document.getElementById("a1").innerHTML="Hi "+ username+"!!";
      document.getElementById("a1").style.visibility="visible";
      setVariable(variable+1);
    }
    else{
    document.getElementById("a1").style.visibility="hidden";
     setVariable(variable+1);
  }
  }
  if(!isLogin){
    return (
      <div>
        <h1>Login Page</h1>
         <html lang="en"> 
              <head> 
                <link rel="stylesheet" href="./App.css" />
            
              </head> 
              <body> 
               <section> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span>
               <span></span> 
               <span></span> 
               <span></span>
               <span></span> 
               <span></span>
               <span></span>
               <span></span> 
               <span></span>
               <span></span>
               <span></span>
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span> 
               <span></span>
                <span></span> 
                <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
                <form onSubmit={handleLogin} class="signin">
                <div> 
                 <div class="content"> 
                  <h2>Sign In</h2> 
                  <div class="form"> 
                   <div class="inputBox"> 
                    <input type="text" onChange={handleUsernameChange} required/> <i>Username</i> 
                   </div> 
                   <div class="inputBox"> 
                    <input type="password"   onChange={handlePasswordChange} required/> <i>Password</i> 
                   </div> 
                   <div class="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a> 
                   </div> 
                   <div class="inputBox"> 
                    <input type="submit" value="Login"/> 
                   </div> 
                  </div> 
                 </div> 
                </div> 
                </form>
               </section> 
              </body>
              </html>
            </div>
    );
  }
  else{
  return (
    <BrowserRouter>
      <div>
        <center>
        <div className="agree">
        <input type="image"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&usqp=CAU"  name="agree"  onClick={updateLabel} /><label>Profile</label><br></br>
        <label id="a1"></label>
        <br />
        <br />
       <sharedData.Provider value={{ username, password }}>
       {agree ? <UserInfo /> : ""}
       
       </sharedData.Provider>
       </div>
          <b>Dashboard</b>
          <br />
          <br />
          <nav>
            <Link className="rainbow rainbow-1" to="/Home">
              Home
            </Link>
            &nbsp;
            <Link className="rainbow rainbow-2" to="/ContactUs">
              ContactUs
            </Link>
            &nbsp;
            <Link className="rainbow rainbow-3" to="/AboutUs">
              AboutUs
            </Link>
            &nbsp;
            <Link className="rainbow rainbow-4" to="/Registration">
              Registration
            </Link>
            &nbsp;
          </nav>
        </center>
        <center>
          <fieldset>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Registration" element={<Registration />} />
            </Routes>
          </fieldset>
        </center>
      </div>
    
 

</BrowserRouter>);
}

}
export default App;

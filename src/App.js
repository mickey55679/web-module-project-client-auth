import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <div>
          <label htmlFor="username">Username 😊 </label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="password">Password 🔑</label>
          <input type="password" id="password" />
        </div>
      </form>
    </div>
  );

};

const FriendsList = () => {
 return (
   <div>
     <h2>Login</h2>
   </div>
 );
};

const AddFriend = () => {
   return (
     <div>
       <h2>Login</h2>
     </div>
   );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

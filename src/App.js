import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
const Login = () => {
  return (<h2>Login</h2>)
}
const FriendsList = () => {
  return (<h2>Login</h2>)
};
const AddFriend = () => {
  return (<h2>Login</h2>)
}
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Login />
        </Route>
        <Route path="/friends">
          <FriendList />
        </Route>
        <Route path="/friends/add">
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;

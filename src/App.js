import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const Login = () => {
  return (<h2>Login</h2>)
}
const FriendsList = () => {
  return (<h2>FriendList</h2>)
};
const AddFriend = () => {
  return (<h2>AddFriend</h2>)
}
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

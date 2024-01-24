import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";


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

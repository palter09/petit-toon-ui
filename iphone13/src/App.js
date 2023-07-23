import React from 'react';
import Header from './Header';
import MyComponent from './MyComponent';
import GroupIcons from './GroupIcons';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="item">
        <Header />
      </div>
      <div className="item">
        <MyComponent />
      </div>
      <div className="item">
        <GroupIcons />
      </div>
    </div>
  );
};

export default App;
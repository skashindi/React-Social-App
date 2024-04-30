import React from 'react';
import './Users.css'; 

const Users = () => {
  return (
    <div className="image-icons-container">
      <div className="image-icon"><img src={require('../images/Ronaldo.jpeg')} alt="Icon 1" /></div>
      <div className="image-icon"><img src={require('../images/Messi.jpeg')} alt="Icon 2" /></div>
      <div className="image-icon"><img src={require('../images/Benzema.jpeg')} alt="Icon 3" /></div>
      <div className="image-icon"><img src={require('../images/Toni.jpeg')} alt="Icon 4" /></div>
      <div className="image-icon"><img src={require('../images/Neymar.jpeg')} alt="Icon 5" /></div>
      <div className="image-icon"><img src={require('../images/Kane.jpeg')} alt="Icon 6" /></div>
      <div className="image-icon"><img src={require('../images/Mbappe.jpeg')} alt="Icon 7" /></div>
      <div className="image-icon"><img src={require('../images/Foden.jpeg')} alt="Icon 8" /></div>
      <div className="image-icon"><img src={require('../images/Neuer.jpeg')} alt="Icon 9" /></div>
      <div className="image-icon"><img src={require('../images/Bellingham.jpeg')} alt="Icon 10" /></div>
      <div className="image-icon"><img src={require('../images/Bruyne.jpeg')} alt="Icon 11" /></div>
      <div className="image-icon"><img src={require('../images/Haaland.jpeg')} alt="Icon 12" /></div>
    </div>
  );
};

export default Users;
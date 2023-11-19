// src/components/Profile.js
import React from 'react';
import profileData from '../data/profileData.json';
import './Profile.css'; // Import the stylesheet for styling

const Profile = () => {
  return (
    <div className="header__wrapper">
      <header></header>
      <div className="cols__container">
        <div className="left__col">
          <div className="img__container">
            <img src="img/logo.jpeg" alt="Anna Smith" />
            <span></span>
          </div>
          <h2>Anna Smith</h2>
          <p>UX/UI Designer</p>
          <p>anna@example.com</p>

          <ul className="about">
            <li>
              <span>4,073</span>Followers
            </li>
            <li>
              <span>322</span>Following
            </li>
            <li>
              <span>200,543</span>Attraction
            </li>
          </ul>

          <div className="content">
            <p>
            Software Development Enthusiastic || Backend Developer || 5⭐ at HackerRank(C++) || C++ || JAVA || Python || R || Hadoop || node.js
            </p>

           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;

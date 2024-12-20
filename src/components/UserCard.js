import React from 'react';
import './UserCard.css';

function UserCard({ users }) {
  return (
    <div className="users">
      {users.map((user, index) => (
        <div key={index} className="user-card">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="user-image"
          />
          <div className="user-details">
            <p className="firstLastName">
              <span>{user.name.first}</span>
              <span>{user.name.last}</span>
            </p>
            <p>{user.gender}</p>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserCard;

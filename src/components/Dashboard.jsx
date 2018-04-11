import React from 'react';

export const Dashboard = ({currentUser}) => {
  return (
    <section className="commands">
      <p className="p-title">Welcome, {currentUser.name}</p>
      <ul className="ul-section"></ul>
    </section>
  );
}

export default Dashboard;
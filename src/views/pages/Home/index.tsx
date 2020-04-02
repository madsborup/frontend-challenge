import React, { useState, useEffect } from 'react';
import withViewLayout from '../../viewHelpers/withViewLayout';
import Header from '../../../components/Header';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header title="Home" />
      <div>👋 Welcome to Expense Manager</div>
    </React.Fragment>
  );
};

export default withViewLayout(Home);

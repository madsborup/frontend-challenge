import React from 'react';
import { TwoColumnGrid, FirstColumn, SecondColumn } from '../../components/layout';
import NavigationBar from '../NavigationBar';

const AppViewWrapper: React.FC = ({ children }) => {
  return (
    <TwoColumnGrid>
      <FirstColumn>
        <NavigationBar />
      </FirstColumn>
      <SecondColumn>{children}</SecondColumn>
    </TwoColumnGrid>
  );
};

export default AppViewWrapper;

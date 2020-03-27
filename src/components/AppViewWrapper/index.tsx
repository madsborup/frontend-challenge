import React from 'react';
import { TwoColumnGrid, FirstColumn, SecondColumn } from '../../components/layout';
import Sidebar from '../../components/Sidebar';

const AppViewWrapper: React.FC = ({ children }) => {
  return (
    <TwoColumnGrid>
      <FirstColumn>
        <Sidebar />
      </FirstColumn>
      <SecondColumn>{children}</SecondColumn>
    </TwoColumnGrid>
  );
};

export default AppViewWrapper;

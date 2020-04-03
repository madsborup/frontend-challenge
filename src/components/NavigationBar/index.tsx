import React from 'react';
import { NavigationBarWrapper, StyledNavigationBar, Link } from './style';

const NavigationBar: React.FC = () => {
  return (
    <NavigationBarWrapper>
      <StyledNavigationBar>
        <Link to="/" exact activeClassName="active">
          Home
        </Link>
        <Link to="/expenses" exact activeClassName="active">
          Expenses
        </Link>
      </StyledNavigationBar>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;

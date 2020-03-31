import React from 'react';
import styled from 'styled-components'
import theme from '../../utils/theme'

const StyledContainer = styled.div`
  background: ${theme.colors.white};
  border: ${theme.BORDER};
  border-radius: ${theme.BORDER_RADIUS};
`;

const withContainer = (Component: React.ComponentType<any>) => (props: any) => {
  return (
    <StyledContainer>
      <Component { ...props } />
    </StyledContainer>
  );
};
export default withContainer;

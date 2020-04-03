import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../../utils/theme';

export const NavigationBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: ${theme.spacing.large} ${theme.spacing.medium} 0;
  background: ${theme.colors.white};
  border-right: ${theme.BORDER};
`;

export const StyledNavigationBar = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit);
  grid-gap: ${theme.spacing.small};
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: ${theme.spacing.xsmall} ${theme.spacing.large};
  width: 100%;
  font-weight: 600;
  font-size: ${theme.font.size.regular};
  text-align: center;
  color: ${theme.font.colors.alt};
  text-decoration: none;
  border-radius: ${theme.BORDER_RADIUS};

  &:hover {
    color: ${theme.font.colors.text};
  }

  &.${props => props.activeClassName} {
    background: ${theme.colors.subHeading};
    color: ${theme.colors.primary};
  }
`;

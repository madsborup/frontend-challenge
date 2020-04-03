import React from 'react'
import styled from 'styled-components'
import theme from '../../utils/theme'

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  line-height: 1;
  font-size: ${theme.font.size.h1};
  color: ${theme.font.colors.heading};
  font-weight: 700;
`;

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <StyledHeader>
      {title}
    </StyledHeader>
  )
}

export default Header

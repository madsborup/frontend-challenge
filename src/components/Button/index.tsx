import styled from 'styled-components'
import theme from '../../utils/theme'

interface Buttonprops {
  primary?: boolean;
  isDisabled?: boolean;
}

const Button = styled.button<Buttonprops>`
  background: ${({ primary }) => primary ? theme.colors.primary : theme.colors.white};
  border-radius: ${theme.BORDER_RADIUS};
  border: ${({ primary }) => !primary && `1px solid ${theme.colors.border}`};
  padding: ${theme.spacing.xsmall} ${theme.spacing.medium};
  font-size: ${theme.font.size.regular};
  font-weight: 600;
  color: ${({ primary }) => primary ? theme.colors.white : theme.font.colors.heading};
  outline: 0;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.primaryMuted};
  }
`;

export default Button
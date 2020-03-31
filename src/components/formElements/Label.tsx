import styled from 'styled-components'
import theme from '../../utils/theme'

export const StyledLabel = styled.label`
  font-size: ${theme.font.size.regular};
  font-weight: 500;
  color: ${theme.font.colors.textMuted};
  margin: ${theme.spacing.small} 0 ${theme.spacing.xxsmall};
  position: relative;
`;
import styled from 'styled-components';
import theme from '../../utils/theme';

interface ExpenseTableItemProps {
  disabled?: boolean;
}

interface LabelProps{
  bold?: boolean;
  primary?: boolean;
}

export const StyledExpenseTableItem = styled.div<ExpenseTableItemProps>`
  display: grid;
  grid-template-columns: 1fr repeat(5, 120px);
  align-items: center;
  border-bottom: 1px solid ${theme.colors.subHeading};
  padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  color: ${({ disabled }) => (disabled ? theme.font.colors.alt : theme.font.colors.text)};
  background: ${theme.colors.white};

  &:hover {
    background: ${({ disabled }) => !disabled && theme.colors.hover};
  }
`;

export const Label = styled.span<LabelProps>`
  font-weight: ${({ bold }) => (bold ? '600' : '400')};
  font-size: ${theme.font.size.small};
`;

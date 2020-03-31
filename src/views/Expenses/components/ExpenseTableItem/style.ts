import styled from 'styled-components'
import theme from '../../../../utils/theme'

export const StyledExpenseTableItem = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(5, 120px);
  align-items: center;
  border-bottom: 1px solid ${theme.colors.background};
  padding: ${theme.spacing.xsmall} ${theme.spacing.small};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.hover};
  }
`;

export const Receipt = styled.div`
  color: ${theme.colors.primary};
  font-weight: 500;
`;

export const Amount = styled.div`
  display: flex;
  line-height: 1;
  margin-top: ${theme.spacing.xsmall};
  align-items: flex-end;
`;

export const Value = styled.div`
  font-size: ${theme.font.size.h3};
  font-weight: 500;
`;

export const Currency = styled.div`
  font-size: ${theme.font.size.small};
  color: ${theme.font.colors.textMuted};
  font-weight: 500;
`;
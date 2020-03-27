import styled from 'styled-components';
import theme from '../../../../utils/theme';

export const StyledExpensesTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  padding: ${theme.spacing.small};
  display: grid;
  grid-template-columns: 1fr repeat(5, 120px);
  background: ${theme.colors.subHeading};
`;

export const TableColumnTitle = styled.span`
  font-size: ${theme.font.size.small};
  font-weight: 600;
  color: ${theme.font.colors.textMuted};
`;

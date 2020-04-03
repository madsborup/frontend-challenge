import styled from 'styled-components';
import theme from '../../utils/theme';

export const StyledExpenseTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
  padding: ${theme.spacing.xsmall};
  display: grid;
  grid-template-columns: 1fr repeat(5, 120px);
  background: ${theme.colors.subHeading};
`;

export const TableColumnTitle = styled.span`
  font-size: ${theme.font.size.small};
  font-weight: 500;
  color: ${theme.font.colors.textMuted};
`;

export const TableActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PageSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  margin: ${theme.spacing.xxsmall};
`;

export const CurrentPage = styled.div`
  font-size: ${theme.font.size.regular};
  padding: 0 ${theme.spacing.medium};
  color: ${theme.font.colors.heading};
  font-weight: 500;
`;

const Arrow = styled.div`
  font-size: ${theme.font.size.h3};
  color: ${theme.font.colors.alt};
  cursor: pointer;
  padding: ${theme.spacing.xxsmall};
  border: ${theme.BORDER};
  border-radius: ${theme.BORDER_RADIUS};

    &:hover {
    color: ${theme.font.colors.heading};
  }
`;

export const LeftArrow = styled(Arrow)`
  ::before {
    content: '<';
  }
`;

export const RightArrow = styled(Arrow)`
  ::before {
    content: '>';
  }
`;

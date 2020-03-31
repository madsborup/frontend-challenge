import styled from 'styled-components';
import theme from '../../utils/theme'

export const MIN_FIRST_COLUMN_WIDTH = 200;
export const MAX_FIRST_COLUMN_WIDTH = 260;
export const MIN_SECOND_COLUMN_WIDTH = 968;
export const MAX_SECOND_COLUMN_WIDTH = 2560;
export const GRID_GAP = 0;
export const MAX_WIDTH = MAX_FIRST_COLUMN_WIDTH + MAX_SECOND_COLUMN_WIDTH + GRID_GAP;
export const MEDIA_BREAK = MIN_FIRST_COLUMN_WIDTH + MIN_SECOND_COLUMN_WIDTH + GRID_GAP;

export const TwoColumnGrid = styled.div`
  display: grid;
  justify-self: left;
  grid-template-columns:
    minmax(${MIN_FIRST_COLUMN_WIDTH}px, ${MAX_FIRST_COLUMN_WIDTH}px)
    minmax(${MIN_SECOND_COLUMN_WIDTH}px, ${MAX_SECOND_COLUMN_WIDTH}px);
  grid-template-rows: 100%;
  grid-template-areas: 'first second';
  grid-gap: ${GRID_GAP}px;
  max-width: ${MAX_WIDTH}px;
  margin: 0;

  @media (max-width: ${MEDIA_BREAK}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0;
    min-width: 100%;
    max-width: 100%;
  }
`;

export const FirstColumn = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden auto;
  max-width: ${MAX_FIRST_COLUMN_WIDTH}px;
  grid-area: first;

  @media (max-width: ${MEDIA_BREAK}px) {
    display: none;
  }
`;

export const SecondColumn = styled.section`
  max-width: ${MAX_SECOND_COLUMN_WIDTH}px;
  grid-area: second;
  position: sticky;
  height: 100%;
  top: 0;

  @media (max-width: ${MEDIA_BREAK}px) {
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    grid-column-start: 1;
    max-width: 100%;
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.large};
  background: ${theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
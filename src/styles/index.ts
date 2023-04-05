import styled, { createGlobalStyle } from 'styled-components';
import { breakpoints } from './theme';

interface GridItemProps {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 40px;
    }

    ul {
        list-style: none;
    }
`;

export const AppContainer = styled.div`
  display: flex;
  border: 2px solid #cbcbcb;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
`;

export const GridItem = styled.div<GridItemProps>`
  grid-column: span 12;
  border: 1px solid #cbcbcb;

  ${({ sm, md, lg, xl }) => {
    const smValue = sm ?? 12;
    const mdValue = md ?? sm ?? 12;
    const lgValue = lg ?? md ?? sm ?? 12;
    const xlValue = xl ?? lg ?? md ?? sm ?? 12;

    return breakpoints({
      prop: 'gridColumn',
      mediaQueryType: 'min-width',
      mediaQueryValues: [
        { breakpoint: 'sm', value: `span ${smValue}` },
        { breakpoint: 'md', value: `span ${mdValue}` },
        { breakpoint: 'lg', value: `span ${lgValue}` },
        { breakpoint: 'xl', value: `span ${xlValue}` },
      ],
    });
  }};
`;

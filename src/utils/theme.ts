const BASELINE = 20;
const BORDER_RADIUS = '4px';

const SCALES = {
  XXSMALL: 0.25,
  XSMALL: 0.5,
  SMALL: 0.75,
  MEDIUM: 1,
  LARGE: 1.5,
  XLARGE: 2,
  XXLARGE: 2.5
};

export default {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#1C40FB',
    primaryMuted: '#4a67ff',
    background: '#FAFAFA',
    border: '#F1F2F6',
    subHeading: '#F3F3F5',
    hover: '#F8F9FB'
  },
  font: {
    family: {
      display: `'Inter', sans-serif`
    },
    colors: {
      heading: '#000000',
      text: '#2f3037',
      textMuted: '#484952',
      alt: '#A8A8A8'
    },
    size: {
      xsmall: `${SCALES.XSMALL + 0.2}rem`,
      small: `${SCALES.SMALL}rem`,
      regular: `${SCALES.MEDIUM}rem`,
      h1: `${SCALES.XLARGE}rem`,
      h2: `${SCALES.LARGE}rem`,
      h3: `${SCALES.MEDIUM + 0.25}rem`
    }
  },
  spacing: {
    xxsmall: `${SCALES.XXSMALL * BASELINE}px`,
    xsmall: `${SCALES.XSMALL * BASELINE}px`,
    small: `${SCALES.SMALL * BASELINE}px`,
    medium: `${SCALES.MEDIUM * BASELINE}px`,
    large: `${SCALES.LARGE * BASELINE}px`,
    xlarge: `${SCALES.XLARGE * BASELINE}px`
  },
  BORDER: '1px solid #F1F2F6',
  BORDER_RADIUS
};

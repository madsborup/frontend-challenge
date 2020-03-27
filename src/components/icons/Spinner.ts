import styled, { keyframes } from 'styled-components'
import SpinnerIcon from '../../assets/svg/spinner.svg';
import theme from '../../utils/theme'


const loading = keyframes`
  0% {
    path {
      transform: rotate(0deg)
    }
  }
  50% {
    path {
      transform: rotate(180deg)
    }
  }

  100% {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled(SpinnerIcon)`
  animation: ${loading} 2s infinite;

  circle {
    stroke: ${theme.colors.subHeading};
  }

  path {
    stroke: ${theme.colors.primary};
  }
`;
import React from "react";
import styled from 'styled-components'
import theme from '../../utils/theme'
import { Spinner } from "../../components/icons/Spinner";

interface Props {
  content?: string;
}

export const StyledLoadingView = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 140px;
`;

export const Content = styled.div`
  padding: ${theme.spacing.small};
  font-size: ${theme.font.size.h3};
  color: ${theme.font.colors.textMuted};
  letter-spacing: 0.2px;
  font-weight: 500;
`;

const LoadingView: React.FC<Props> = (props: Props) => {
  return (
    <StyledLoadingView>
      <Spinner />
      {props.content && <Content>{props.content}</Content>}
    </StyledLoadingView>
  );
};

export default LoadingView;
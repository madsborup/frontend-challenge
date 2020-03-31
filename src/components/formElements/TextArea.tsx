import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';
import { StyledLabel } from './Label';

interface Props {
  label?: string;
  name: string;
  value: string | undefined;
  placeholder: string;
  onChange: (value: string) => void
}

const StyledTextArea = styled.textarea`
  font-size: ${theme.font.size.regular};
  font-weight: 400;
  width: 100%;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.xsmall};
  color: ${theme.font.colors.text};
  background: ${theme.colors.hover};
  min-height: 40px;
  box-shadow: none;
  outline: none;
  resize: none;
`;

const TextArea: React.FC<Props> = ({ label, ...props }: Props) => {
  return (
    <React.Fragment>
      {label && <StyledLabel htmlFor={props.name}>{label}</StyledLabel>}
      <StyledTextArea
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </React.Fragment>
  );
};

export default TextArea;

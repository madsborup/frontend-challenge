import React from 'react'
import styled from 'styled-components'
import theme from '../../utils/theme'

interface Props {
  name: string;
  label?: string;
  value: string | number;
  options: {label: string, value: string | number}[]
  onChange: Function;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const StyledSelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
  margin-left: ${theme.spacing.xxsmall};
  outline: none;
  border: 1px solid ${theme.font.colors.alt};
  background: white;
  font-size: ${theme.font.size.regular};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.subHeading};
  }
`;

export const Select = (props: Props) => {
  const { name, value, onChange} = props;

  return (
    <Container>
      {props.label && <div>{props.label}</div>}
      <StyledSelect name={name} value={value} onChange={(e) => onChange(e.target.value)}>
        {props.options?.map(option => <option value={option.value}>{option.label}</option>)}
      </StyledSelect>
    </Container>
  )
}
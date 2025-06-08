import React from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const Title = styled.h4`
  font-size: 14px;
  color: #474747;
  margin-bottom: 4px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #474747;
`;

const Input = styled.input`
  width: 22px;
  height: 22px;
  accent-color: #c92071;
`;

const FilterGroup = ({ title, inputType = 'checkbox', options = [] }) => {
  return (
    <GroupContainer>
      <Title>{title}</Title>
      {options.map((option, index) => (
        <Option key={index}>
          <Input
            type={inputType}
            name={title}
            value={option.value || option.text}
          />
          {option.text}
        </Option>
      ))}
    </GroupContainer>
  );
};

export default FilterGroup;

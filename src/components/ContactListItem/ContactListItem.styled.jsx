import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: rgb(255, 255, 255, 0.5);
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Contact = styled.span`
  display: block;
`;

export const Name = styled.span`
  display: block;
`;

export const Number = styled.span`
  display: block;
`;

export const Button = styled.button`
  display: block;
  padding: 5px;
  border-radius: 5px;
  border: transparent;
  height: 25px;
`;

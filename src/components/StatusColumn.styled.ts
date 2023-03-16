import styled from "styled-components";

export const Column = styled.div`
  box-sizing: border-box;
  min-width: 150px;
  width: 300px;
  height: fit-content;
  background-color: #ebebf0;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  margin: 5px 5px 5px 5px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ColumnTitle = styled.div`
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: grey;
  display: flex;
  /* width: 100%; */
  /* padding-bottom: 15px; */
`;



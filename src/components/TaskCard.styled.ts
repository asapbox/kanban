import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 140px;
  height: fit-content;
  background-color: #fdfdfd;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
`;

export const textContainer = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: black;
  padding: 0px 5px 0px 5px;
  text-align: justify;
`;

export const dataContainer = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: grey;
  padding: 0px 5px 0px 5px;
  margin: 5px 0px 5px 0px;
`;
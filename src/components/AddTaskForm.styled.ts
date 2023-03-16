import styled from "styled-components";

export const Form = styled.form.attrs((props: { isVisible: boolean }) => props)`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 500px;
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: grey;
`;
export const FormText = styled.p`
  color: white;
  font-size: 16px;
  font-family: sans-serif;
`;

export const Input = styled.input`
  height: 40px;
  width: 150px;
`;

import * as styled from "./Scaffold.styled";

type AppContainerProps = {
  child?: JSX.Element;
};

export const Scaffold = ({ child }: AppContainerProps) => {
  return <styled.Scaffold> {child}</styled.Scaffold>;
};

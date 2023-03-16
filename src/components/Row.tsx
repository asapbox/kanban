import React from "react";
import * as styled from "./Row.styled";

type RowProps = {
  children?: JSX.Element [];
};

export const Row = ({ children }: RowProps) => {
  return <styled.Row>{children}</styled.Row>;
};

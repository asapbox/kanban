import React from "react";
import * as styled from "./CloseTaskFormBtn.styled";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

type CloseTaskFormBtlProps = {
  onClick: () => void;
};

export const CloseTaskFormBtl = ({ onClick }: CloseTaskFormBtlProps) => {
  return (
    <styled.CloseBtn type="button" onClick={onClick}>
      <HighlightOffIcon sx={{ color: "white" }} />
    </styled.CloseBtn>
  );
};

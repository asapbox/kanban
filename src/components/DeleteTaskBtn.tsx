import * as styled from "./DeleteTaskBtn.styled";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type DeleteTaskBtnProps = {
    onClick: () => void;
};

export const DeleteTaskBtn = ({onClick}: DeleteTaskBtnProps) => {
  return (
    <styled.DeleteBtn onClick={onClick}>
      <DeleteForeverIcon />
    </styled.DeleteBtn>
  );
};

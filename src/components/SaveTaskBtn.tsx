import * as styled from "./SaveTaskBtn.styled";

type SaveTaskBtnProps = {
  onClick?: () => void;
};

export const SaveTaskBtn = ({ onClick }: SaveTaskBtnProps) => {
  return (
    <styled.SaveTaskBtn type="reset" onClick={onClick}>
      Save task
    </styled.SaveTaskBtn>
  );
};

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import * as styled from "./MenuBtn.styled";

type MenuBtnProps = {
    onClick: () => void;
};

export const MenuBtn = ({onClick}: MenuBtnProps) => {
  return (
    <styled.MenuBtn type="button" onClick={onClick}>
      <MenuRoundedIcon sx={{ color: "#307aba", fontSize: 35 }} />
    </styled.MenuBtn>
  );
};

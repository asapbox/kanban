import * as styled from "./SideBar.styled";

import {MenuBtn} from "./MenuBtn";

type SideBarContainerProps = {};

export const SideBar = ({}: SideBarContainerProps) => {
  return (
    <styled.SideBarContainer>
      <MenuBtn onClick={() => {
        console.log("MenuBtn is clicked");
      }}/>
    </styled.SideBarContainer>
  );
};

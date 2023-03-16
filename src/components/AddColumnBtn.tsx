import * as styled from './AddColumnBtn.styled'
import AddIcon from "@mui/icons-material/Add";

type AddColumnBtnProps = {
    onClick: ()=> void;
};

export const AddColumnBtn = ({ onClick }: AddColumnBtnProps) => {

return (<styled.AddColumnBtn type='button' onClick={onClick}>
<AddIcon/>
</styled.AddColumnBtn>);
}
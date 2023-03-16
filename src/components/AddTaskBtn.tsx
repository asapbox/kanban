import * as styled from './AddTaskBtn.styled'

type AddTaskBtnProps = {
    onClick: () => void;
};

export const AddTaskBtn = ({ onClick }: AddTaskBtnProps) => {

return (<styled.AddTaskBtn type="button" onClick={onClick}>+ Add a new task</styled.AddTaskBtn>);
}
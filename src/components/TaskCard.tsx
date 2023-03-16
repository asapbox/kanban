import { useAppDispatch } from "hooks/redux";
import { deleteTask } from "store/reducers/taskActions";
import { DeleteTaskBtn } from "./DeleteTaskBtn";
import PriorityTagMenu from "./PriorityTagMenu";
import * as styled from "./TaskCard.styled";

type TaskCardProps = {
  id: string;
  task: string;
  creationDate: string;
};

export const TaskCard = ({ id, task, creationDate }: TaskCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <styled.Container>
      <PriorityTagMenu />
      <DeleteTaskBtn
        onClick={() => {
          console.log("The DeleteTaskBtn is clicked");
          dispatch(deleteTask(id));
        }}
      />
      <styled.textContainer>{task}</styled.textContainer>
      <styled.dataContainer>{creationDate}</styled.dataContainer>
    </styled.Container>
  );
};

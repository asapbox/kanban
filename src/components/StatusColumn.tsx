import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ITaskModel } from "models/taskModel";
import { showForm } from "store/reducers/taskFormVisibility";
import { AddColumnBtn } from "./AddColumnBtn";
import { AddTaskBtn } from "./AddTaskBtn";
import * as styled from "./StatusColumn.styled";
import { TaskCard } from "./TaskCard";

type StatusColumnProps = {
  title: string;
  children: ITaskModel[];
};

export const StatusColumn = ({ title, children }: StatusColumnProps) => {
  const dispatch = useAppDispatch();

  return (
    <styled.Column>
      <styled.Row>
        <styled.ColumnTitle> {title} </styled.ColumnTitle>
        <AddColumnBtn
          onClick={() => console.log("The AddColumnBtn is clicked")}
        />
      </styled.Row>
      {children.map((task) => {
        return (
          <TaskCard
            key={task.id}
            id={task.id}
            task={task.taskText}
            creationDate={task.creationDate}
          />
        );
      })}
      <AddTaskBtn
        onClick={() => {
          console.log("The AddTaskBtn is clicked");
          dispatch(showForm());
        }}
      />
    </styled.Column>
  );
};

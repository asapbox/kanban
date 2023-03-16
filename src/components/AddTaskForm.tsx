import { useAppDispatch, useAppSelector } from "hooks/redux";
import { createTask, selectTasks } from "store/reducers/taskActions";
import { hideForm } from "store/reducers/taskFormVisibility";
import { createUUID, fetchCreationDate } from "utils/utils";
import * as styled from "./AddTaskForm.styled";
import { CloseTaskFormBtl } from "./CloseTaskFormBtl";
import { SaveTaskBtn } from "./SaveTaskBtn";

type NewTaskFormProps = {};

export const AddTaskForm = ({}: NewTaskFormProps) => {
  let textInput: string = "";

  let isVisible: boolean = useAppSelector(
    (state) => state.taskFormVisibility.isVisible
  );

  const dispatch = useAppDispatch();

  return (
    <styled.Form isVisible={isVisible}>
      <CloseTaskFormBtl
        onClick={() => {
          console.log("The CloseTaskFormBtl is tapped");
          dispatch(hideForm());
        }}
      />
      <styled.FormText> Input a new task</styled.FormText>
      <styled.Input
        type={"text"}
        onChange={(e) => (textInput = e.target.value)}
      ></styled.Input>
      <SaveTaskBtn
        onClick={() => {
          console.log("SaveTaskBtn is clicked");

          dispatch(hideForm());

          dispatch(
            createTask({
              id: createUUID(),
              taskText: textInput,
              creationDate: fetchCreationDate().creationDate,
              creationDateFull: fetchCreationDate().creationDateFull,
            })
          );
        }}
      />
    </styled.Form>
  );
};

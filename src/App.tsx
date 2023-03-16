import { Scaffold } from "./components/Scaffold";
import { TaskCard } from "./components/TaskCard";
import { StatusColumn } from "./components/StatusColumn";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Row } from "./components/Row";
import { SideBar } from "./components/SideBar";
import { AddTaskForm } from "./components/AddTaskForm";
import { listOfTask } from "mockData";
import { useAppSelector } from "hooks/redux";



function App() {

const tasks = useAppSelector((state)=> state.taskAction.tasks );

  return (
    <>
      <GlobalStyle />
      <Scaffold
        child={
          <Row
            children={[
              <SideBar />,
              <StatusColumn
                key="1"
                title="Backlog"
                children={[...listOfTask, ...tasks]}
              />,
              // <StatusColumn
              //   key={'2'}
              //   title="In Progress"
              //   children={listOfTask}
              // />,
              // <StatusColumn key={'3'} title="Done" children={listOfTask} />,
              <AddTaskForm />,
            ]}
          />
        }
      />
    </>
  );
}

export default App;

import React from "react";
import { Task, ViewMode, Gantt } from "gantt-task-react";

import "gantt-task-react/dist/index.css";
import {initTasks} from "./helper";

// Init
const App = () => {

  const [tasks, setTasks] = React.useState<Task[]>(initTasks());




  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Month}
        onExpanderClick={handleExpanderClick}
        listCellWidth={'465px'}
        columnWidth={18}
        rowHeight={24}
        locale={'tr-TR'}
      />

  );
};

export default App;

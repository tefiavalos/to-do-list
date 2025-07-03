import React from "react";
import { List, Typography } from "@mui/material";
import { Item } from "../";
import { Task } from "../../types";
import { TaskListPaper } from "./TaskList.styles";

interface TaskListProps {
  title: string;
  tasks: Task[];
  getCategoryName: (id: string) => string;
  onToggleCompleted: (task: Task) => void;
  completed?: boolean;
  onEdit?: (task: Task) => void;
  action?: React.ReactNode;
}

const TaskList: React.FC<TaskListProps> = ({
  title,
  tasks,
  getCategoryName,
  onToggleCompleted,
  completed,
  onEdit,
  action,
}) => (
  <TaskListPaper>
    <Typography variant="h6" fontWeight={500} mb={2}>
      {title}
    </Typography>
    <List disablePadding>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task as Task}
          getCategoryName={getCategoryName}
          onToggleCompleted={onToggleCompleted}
          completed={completed}
          onEdit={onEdit}
        />
      ))}
    </List>
    {action}
  </TaskListPaper>
);

export { TaskList };

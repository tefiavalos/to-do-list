import React from "react";
import { List, Typography } from "@mui/material";
import { Item } from "../";
import { Task } from "../../types";
import { TaskListPaper, StickyTitle } from "./TaskList.styles";

interface TaskListProps {
  title: string;
  tasks: Task[];
  getCategoryName: (id: string) => string;
  onToggleCompleted: (task: Task) => void;
  completed?: boolean;
  onEdit?: (task: Task) => void;
  action?: React.ReactNode;
  maxHeight?: string;
}

const TaskList: React.FC<TaskListProps> = ({
  title,
  tasks,
  getCategoryName,
  onToggleCompleted,
  completed,
  onEdit,
  action,
  maxHeight,
}) => (
  <TaskListPaper maxHeight={maxHeight}>
    <StickyTitle>
      <Typography variant="h6" fontWeight={500} mt={0} mb={0} pt={4} pb={2} fontSize={20}>
        {title}
      </Typography>
    </StickyTitle>
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

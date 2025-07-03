import React from "react";
import { iconOptions } from "../../utils/constants";
import { ItemProps } from "../../types/task";
import {
  ItemContainer,
  ItemBox,
  ItemTitle,
  ItemDescription,
  ItemChip,
  StyledCheckbox,
  StyledIcon,
} from "./Item.styles";
import { FormControlLabel } from "@mui/material";

const Item: React.FC<ItemProps> = ({
  task,
  getCategoryName,
  onToggleCompleted,
  completed,
  onEdit,
}) => {
  const iconObj = iconOptions.find((opt) => opt.value === task.icon);
  const IconComponent = iconObj ? iconObj.icon : undefined;

  const handleContainerClick = (e: React.MouseEvent) => {
    // Prevent edit if click is on the checkbox
    if ((e.target as HTMLElement).closest('input[type="checkbox"]')) return;
    if (onEdit) onEdit(task);
  };

  return (
    <ItemContainer onClick={handleContainerClick}>
      <FormControlLabel
        control={
          <StyledCheckbox
            id={`checkbox-task-${task.id}`}
            name={`completed-task-${task.id}`}
            checked={task.completed}
            onChange={() => onToggleCompleted(task)}
            color="primary"
            aria-label={`Marcar como ${task.completed ? 'pendiente' : 'completada'} la tarea ${task.title}`}
          />
        }
        label=""
      />
      {IconComponent && (
        <StyledIcon $completed={completed} $color={task.color ?? undefined}>
          <IconComponent fontSize="inherit" />
        </StyledIcon>
      )}
      <ItemBox>
        <ItemTitle variant="subtitle1" fontWeight={700} $completed={completed}>
          {task.title}
        </ItemTitle>
        <ItemDescription variant="body2" $completed={completed}>
          {task.description}
        </ItemDescription>
      </ItemBox>
      <ItemChip
        label={String(getCategoryName(task.category_id))}
        variant="outlined"
        size="small"
        $completed={completed}
      />
    </ItemContainer>
  );
};

export { Item };

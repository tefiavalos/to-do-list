import { useState, useCallback } from "react";
import { Task } from "../types";
import { useTaskForm } from "./useTaskForm";
import { postTask, updateTask } from "../services";

export function useTaskModalController(categories: any[], refreshTasks: () => void) {
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const form = useTaskForm({
    initialTitle: editingTask ? editingTask.title : "",
    initialDescription: editingTask ? editingTask.description : "",
    initialCategory: editingTask ? String(editingTask.category_id) : "",
    initialIcon: editingTask ? editingTask.icon || "" : "",
    initialColor: editingTask ? editingTask.color || "" : "",
  });

  const getCategoryName = useCallback((category_id: string) => {
    const category = categories.find((cat) => cat.id === category_id);
    return category ? category.name : "";
  }, [categories]);

  const handleOpen = () => {
    setEditingTask(null);
    setOpen(true);
    form.resetForm();
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setOpen(true);
    form.setTitle(task.title);
    form.setDescription(task.description);
    form.setSelectedCategory(String(task.category_id));
    form.setSelectedIcon(task.icon || "");
    form.setSelectedColor(task.color || "");
    form.setActiveTab(null);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingTask(null);
    form.resetForm();
  };

  const handleSave = async () => {
    form.markAllTouched();
    if (!form.isFormValid) return;
    if (editingTask) {
      await updateTask(editingTask.id, {
        ...editingTask,
        title: form.title,
        description: form.description,
        category_id: form.selectedCategory,
        icon: form.selectedIcon,
        color: form.selectedColor,
      });
    } else {
      const newTask = {
        title: form.title,
        description: form.description,
        category_id: form.selectedCategory,
        icon: form.selectedIcon || null,
        completed: false,
        color: form.selectedColor || null,
      };
      await postTask(newTask);
    }
    refreshTasks();
    form.resetForm();
    setOpen(false);
    setEditingTask(null);
  };

  return {
    open,
    editingTask,
    form,
    handleOpen,
    handleEdit,
    handleClose,
    handleSave,
    getCategoryName,
  };
} 
import { useEffect, useState } from "react";
import { getTasks, getCategories } from "../services";
import { Task, Category } from "../types";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
    getCategories().then(setCategories);
  }, []);

  const refreshTasks = () => getTasks().then(setTasks);
  const refreshCategories = () => getCategories().then(setCategories);

  return { tasks, setTasks, categories, setCategories, refreshTasks, refreshCategories };
} 
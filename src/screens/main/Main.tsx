import {
  MainContainer,
  ContentBox,
  Title,
  TaskListBox,
  FabBox,
  fabSx
} from "./Main.styles";
import {
  TaskList,
  TaskModal
} from "../../components";
import { Task } from "../../types/task";
import { useTasks } from "../../hooks/useTasks";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { filterTasksByStatus } from "../../utils/formUtils";
import { useTaskModalController } from "../../hooks/useTaskModalController";

function Main() {
  const {
    tasks,
    categories,
    refreshTasks,
  } = useTasks();

  const {
    open,
    editingTask,
    form,
    handleOpen,
    handleEdit,
    handleClose,
    handleSave,
    getCategoryName,
  } = useTaskModalController(categories, refreshTasks);

  const handleToggleCompleted = async (task: Task) => {
    await import("../../services/updateTask").then(({ updateTask }) =>
      updateTask(task.id, { ...task, completed: !task.completed })
    );
    refreshTasks();
  };

  const pendingTasks = filterTasksByStatus(tasks, false);
  const completedTasks = filterTasksByStatus(tasks, true);

  return (
    <MainContainer>
      <ContentBox>
        <Title variant="h3">Lista de tareas</Title>
        <TaskListBox>
          <TaskList
            title="Pendientes"
            tasks={pendingTasks}
            getCategoryName={getCategoryName}
            onToggleCompleted={handleToggleCompleted}
            completed={false}
            onEdit={handleEdit}
            maxHeight="40vh"
          />
          <TaskList
            title="Terminadas"
            tasks={completedTasks}
            getCategoryName={getCategoryName}
            onToggleCompleted={handleToggleCompleted}
            completed={true}
            onEdit={handleEdit}
            maxHeight="25vh"
          />
          <FabBox>
            <Fab color="primary" aria-label="add" onClick={handleOpen} sx={fabSx}>
              <AddIcon fontSize="inherit" sx={{ fontSize: 14, fontWeight: 500 }} />
            </Fab>
          </FabBox>
        </TaskListBox>
        <TaskModal
          open={open}
          onClose={handleClose}
          onSave={handleSave}
          title={form.title}
          setTitle={form.setTitle}
          description={form.description}
          setDescription={form.setDescription}
          selectedCategory={form.selectedCategory}
          setSelectedCategory={form.setSelectedCategory}
          categories={categories}
          selectedIcon={form.selectedIcon}
          setSelectedIcon={form.setSelectedIcon}
          selectedColor={form.selectedColor}
          setSelectedColor={form.setSelectedColor}
          activeTab={form.activeTab}
          setActiveTab={form.setActiveTab}
          isEdit={!!editingTask}
        />
      </ContentBox>
    </MainContainer>
  );
}

export { Main }; 
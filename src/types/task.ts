export type Task = {
  id: string;
  title: string;
  description: string;
  category_id: string;
  icon: string | null;
  color?: string | null;
  completed: boolean;
};

export type Category = {
  id: string;
  name: string;
}; 

export interface TaskModalProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  setTitle: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  categories: Category[];
  selectedIcon: string;
  setSelectedIcon: (v: string) => void;
  selectedColor: string;
  setSelectedColor: (v: string) => void;
  activeTab: "icon" | "color" | null;
  setActiveTab: (v: "icon" | "color" | null) => void;
  isEdit?: boolean;
}

export interface TaskModalPickerProps {
  activeTab: "icon" | "color" | null;
  setActiveTab: (tab: "icon" | "color") => void;
  selectedIcon: string;
  setSelectedIcon: (icon: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export interface ItemProps {
  task: Task;
  getCategoryName: (id: string) => string;
  onToggleCompleted: (task: Task) => void;
  completed?: boolean;
  onEdit?: (task: Task) => void;
}

export interface TaskListProps {
  title: string;
  tasks: Task[];
  getCategoryName: (id: string) => string;
  onToggleCompleted: (task: Task) => void;
  completed?: boolean;
  onEdit?: (task: Task) => void;
}
import { useState } from "react";

export interface UseTaskFormProps {
  initialTitle?: string;
  initialDescription?: string;
  initialCategory?: string;
  initialIcon?: string;
  initialColor?: string;
  initialTab?: "icon" | "color" | null;
}

export function useTaskForm({
  initialTitle = "",
  initialDescription = "",
  initialCategory = "",
  initialIcon = "",
  initialColor = "",
  initialTab = null,
}: UseTaskFormProps = {}) {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedIcon, setSelectedIcon] = useState<string>(initialIcon);
  const [selectedColor, setSelectedColor] = useState<string>(initialColor);
  const [activeTab, setActiveTab] = useState<"icon" | "color" | null>(initialTab);

  // Touched states
  const [titleTouched, setTitleTouched] = useState(false);
  const [descriptionTouched, setDescriptionTouched] = useState(false);
  const [categoryTouched, setCategoryTouched] = useState(false);

  // Validations
  const isTitleValid = title.trim().length > 0 && title.length <= 40;
  const isDescriptionValid = description.length === 0 || description.length <= 100;
  const isCategoryValid = selectedCategory !== "";
  const isFormValid = isTitleValid && isDescriptionValid && isCategoryValid;

  const markAllTouched = () => {
    setTitleTouched(true);
    setDescriptionTouched(true);
    setCategoryTouched(true);
  };

  const resetForm = () => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setSelectedCategory(initialCategory);
    setSelectedIcon(initialIcon);
    setSelectedColor(initialColor);
    setActiveTab(null);
    setTitleTouched(false);
    setDescriptionTouched(false);
    setCategoryTouched(false);
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    selectedCategory,
    setSelectedCategory,
    selectedIcon,
    setSelectedIcon,
    selectedColor,
    setSelectedColor,
    activeTab,
    setActiveTab,
    titleTouched,
    setTitleTouched,
    descriptionTouched,
    setDescriptionTouched,
    categoryTouched,
    setCategoryTouched,
    isTitleValid,
    isDescriptionValid,
    isCategoryValid,
    isFormValid,
    markAllTouched,
    resetForm,
  };
} 
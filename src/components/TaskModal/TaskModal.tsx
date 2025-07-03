import React, { useState } from "react";
import { FormControl } from "@mui/material";
import { TaskModalProps } from "../../types/task";
import {
  StyledDialog,
  StyledDialogContent,
  StyledDialogActions,
  StyledTextField,
  StyledSelect,
  StyledMenuItem,
  StyledCreateButton,
  StyledInputLabel,
  StyledCategoryError,
  StyledCancelButton,
} from "./TaskModal.styles";
import { TaskIconColorPicker } from "./TaskIconColorPicker";

const TaskModal: React.FC<TaskModalProps> = ({
  open,
  onClose,
  onSave,
  title,
  setTitle,
  description,
  setDescription,
  selectedCategory,
  setSelectedCategory,
  categories,
  selectedIcon,
  setSelectedIcon,
  selectedColor,
  setSelectedColor,
  activeTab,
  setActiveTab,
  isEdit = false,
}) => {
  const [showErrors, setShowErrors] = useState(false);

  const isTitleValid = title.trim().length > 0 && title.length <= 40;
  const isDescriptionValid =
    description.length === 0 || description.length <= 100;
  const isCategoryValid = selectedCategory !== "";
  const isFormValid = isTitleValid && isDescriptionValid && isCategoryValid;

  const handleSubmit = () => {
    setShowErrors(true);
    if (isFormValid) {
      onSave();
      setShowErrors(false);
    }
  };

  const handleClose = () => {
    setShowErrors(false);
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogContent>
        <TaskIconColorPicker
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <StyledTextField
          id="task-title-input"
          variant="standard"
          label="Título"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          error={showErrors && !isTitleValid}
          helperText={
            showErrors && !isTitleValid
              ? "El título es obligatorio y máximo 40 caracteres"
              : ""
          }
          inputProps={{ maxLength: 40, "aria-label": "Título" }}
        />
        <StyledTextField
          id="task-description-input"
          variant="standard"
          label="Descripción"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          error={showErrors && !isDescriptionValid}
          helperText={
            showErrors && !isDescriptionValid ? "Máximo 100 caracteres" : ""
          }
          inputProps={{ maxLength: 100, "aria-label": "Descripción" }}
        />
        <FormControl
          variant="standard"
          fullWidth
          margin="normal"
          error={showErrors && !isCategoryValid}
        >
          <StyledInputLabel id="categoria-label">Categoría</StyledInputLabel>
          <StyledSelect
            labelId="categoria-label"
            id="categoria-select"
            name="category"
            value={selectedCategory ?? ""}
            onChange={(e) => setSelectedCategory(e.target.value as string)}
            label="Categoría"
            inputProps={{ "aria-label": "Categoría" }}
          >
            <StyledMenuItem value="">
              <em>Selecciona una categoría</em>
            </StyledMenuItem>
            {categories.map((cat) => (
              <StyledMenuItem key={cat.id} value={cat.id}>
                {cat.name}
              </StyledMenuItem>
            ))}
          </StyledSelect>
          {showErrors && !isCategoryValid && (
            <StyledCategoryError>
              La categoría es obligatoria
            </StyledCategoryError>
          )}
        </FormControl>
      </StyledDialogContent>
      <StyledDialogActions>
        <StyledCancelButton onClick={handleClose} variant="text">
          Cancelar
        </StyledCancelButton>
        <StyledCreateButton
          variant="contained"
          onClick={handleSubmit}
          disabled={false}
        >
          {isEdit ? "Guardar" : "Crear"}
        </StyledCreateButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export { TaskModal };

import React from "react";
import {
  colorOptions,
  iconOptions,
  ICON_TAB,
  COLOR_TAB,
} from "../../utils/constants";
import {
  FilterButtonGroup,
  FilterButton,
  FilterButtonContent,
  SelectButton,
  RowBox,
  StyledIcon,
  ColorSelectButton,
} from "./TaskModal.styles";
import { chunkArray } from "../../utils/formUtils";
import { TaskModalPickerProps } from "../../types/task";
import AppleIcon from "@mui/icons-material/Apple";
import CircleIcon from "@mui/icons-material/Circle";

export const TaskIconColorPicker: React.FC<TaskModalPickerProps> = ({
  activeTab,
  setActiveTab,
  selectedIcon,
  setSelectedIcon,
  selectedColor,
  setSelectedColor,
}) => {
  const getActiveColor = (color?: string) => color || "#FF5E5E";

  return (
    <>
      <FilterButtonGroup>
        <FilterButton
          className={activeTab === ICON_TAB ? "active" : ""}
          activecolor={
            activeTab === ICON_TAB
              ? getActiveColor(selectedColor || undefined)
              : undefined
          }
          onClick={() => setActiveTab(ICON_TAB)}
          aria-label="Seleccionar ícono"
        >
          <FilterButtonContent>
            <AppleIcon style={{ color: "#FF5E5E", fontSize: 18 }} />
            Ícono
          </FilterButtonContent>
        </FilterButton>
        <FilterButton
          className={activeTab === COLOR_TAB ? "active" : ""}
          activecolor={
            activeTab === COLOR_TAB
              ? getActiveColor(selectedColor || undefined)
              : undefined
          }
          onClick={() => setActiveTab(COLOR_TAB)}
          aria-label="Seleccionar color"
        >
          <FilterButtonContent>
            <CircleIcon style={{ color: "#FF5E5E", fontSize: 18 }} />
            Color
          </FilterButtonContent>
        </FilterButton>
      </FilterButtonGroup>
      {activeTab === ICON_TAB ? (
        <div>
          {chunkArray(iconOptions, 5).map((row, idx) => (
            <RowBox key={idx}>
              {row.map((opt) => {
                const IconComp = opt.icon;
                return (
                  <SelectButton
                    key={opt.value}
                    className={selectedIcon === opt.value ? "selected" : ""}
                    onClick={() =>
                      setSelectedIcon(
                        selectedIcon === opt.value ? "" : opt.value
                      )
                    }
                    aria-label={`Ícono ${opt.value}`}
                  >
                    <StyledIcon
                      as={IconComp}
                      color={selectedColor !== null ? selectedColor : undefined}
                      size={24}
                    />
                  </SelectButton>
                );
              })}
            </RowBox>
          ))}
        </div>
      ) : activeTab === COLOR_TAB ? (
        <div>
          {chunkArray(colorOptions, 5).map((row, idx) => (
            <RowBox key={idx}>
              {row.map((color) => (
                <ColorSelectButton
                  key={color}
                  className={`color${
                    selectedColor === color ? " selected" : ""
                  }`}
                  bgcolor={color}
                  onClick={() =>
                    setSelectedColor(selectedColor === color ? "" : color)
                  }
                  aria-label={`Color ${color}`}
                />
              ))}
            </RowBox>
          ))}
        </div>
      ) : null}
    </>
  );
};

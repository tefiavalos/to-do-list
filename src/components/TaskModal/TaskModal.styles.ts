import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, Box, IconButton, TextField, Select, MenuItem, InputLabel } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius,
    padding: 0,
    minWidth: theme.custom.dialogMinWidth,
    boxShadow: theme.shadows[8],
    maxWidth: theme.custom.dialogMaxWidth,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "unset",
      maxWidth: "95vw",
      width: "100vw",
    },
  },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.h6.fontSize,
  paddingBottom: 0,
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    fontSize: 18,
    paddingTop: theme.spacing(2),
  },
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
  },
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(3),
  paddingTop: theme.spacing(2),
}));

export const FilterButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 20,
  padding: theme.custom.filterButtonPadding,
}));

export const FilterButton = styled(Button)<{activecolor?: string}>(({ theme, activecolor }) => ({
  borderRadius: theme.custom.pillRadius,
  minWidth: theme.custom.filterButtonMinWidth,
  fontWeight: theme.typography.fontWeightRegular,
  backgroundColor: theme.palette.background.modal,
  color: theme.palette.text.primary,
  boxShadow: "none",
  textTransform: "none",
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 8,
  paddingBottom: 8,
  border: "2px solid transparent",
  "&.active": activecolor
    ? { border: `2px solid ${activecolor}` }
    : {},
}));

export const FilterButtonContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 4,
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
}));

export const SelectButton = styled(IconButton)(({ theme }) => ({
  border: "2px solid transparent",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.custom.chipFontSize,
  width: 36,
  height: 36,
  transition: "border 0.2s",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  "&.selected": {
    border: "2px solid rgba(0,0,0,0.6)",
    boxShadow: 2,
  },
  "&.color": {
    borderRadius: "50%",
    width: 24,
    height: 24,
    "@media (max-width:600px)": {
      width: 18,
      height: 18,
    },
  },
  "@media (max-width:600px)": {
    width: 28,
    height: 28,
  },
}));

export const ColorSelectButton = styled(SelectButton)<{bgcolor: string}>(({ bgcolor }) => ({
  backgroundColor: bgcolor,
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: 12,
  '& .MuiInputLabel-root': {
    color: theme.palette.text.faded,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.custom.fontSizeSmall,
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.text.faded,
  },
  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.palette.text.fadedBorder,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.text.fadedBorder,
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.error.main,
    fontSize: theme.custom.fontSizeSmall,
    marginLeft: 0,
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
  '& .MuiFormHelperText-root': {
    color: theme.palette.error.main,
    fontSize: theme.custom.fontSizeSmall,
    marginLeft: 0,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightRegular,
}));

export const RowBox = styled(Box)(({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: 16,
  marginBottom: 16,
}));

export const ColorCircle = styled("span")<{
  color: string;
}>(({ color }) => ({
  width: 16,
  height: 16,
  backgroundColor: color,
  borderRadius: "50%",
  display: "inline-block",
  marginRight: 4,
}));

export const StyledIcon = styled('span')<{color?: string; size?: number}>(({ color, size }) => ({
  color: color || 'inherit',
  fontSize: size || 24,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledCreateButton = styled(Button)(({ theme }) => ({
  padding: theme.custom.createButtonPadding,
  minWidth: 90,
  height: 36,
  background: theme.palette.primary.main,
  borderRadius: theme.custom.dialogBorderRadius,
  color: theme.palette.common?.white || '#fff',
  fontSize: "14px",
  fontWeight: theme.typography.fontWeightMedium,
  cursor: 'pointer',
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.custom.fontSizeSmall,
  fontWeight: theme.typography.fontWeightRegular,
  '&.Mui-focused': {
    color: theme.palette.text.secondary,
  },
}));

export const StyledFloatingInputLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.fontSizeSmall,
  color: theme.palette.text.secondary,
}));

export const StyledCategoryError = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: theme.custom.fontSizeSmall,
  marginLeft: 0,
  marginTop: 3,
}));

export const StyledCancelButton = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: "14px",
  cursor: 'pointer',
})); 
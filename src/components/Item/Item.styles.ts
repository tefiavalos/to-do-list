import { Box, Typography, Chip, Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemContainer = styled("li")(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.custom.itemBoxPadding,
  borderRadius: theme.custom.itemBoxRadius,
  backgroundColor: theme.palette.background.modal,
  boxShadow: "none",
  display: "flex",
  alignItems: "center",
  minHeight: theme.custom.itemBoxMinHeight,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  cursor: 'pointer',
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    minHeight: 54,
  },
}));

export const ItemBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flexGrow: 1,
  minWidth: 0,
});

export const ItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$completed",
})<{ $completed?: boolean }>(({ theme, $completed }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.subtitle1.fontSize,
  color: $completed ? theme.palette.text.secondary : theme.palette.text.primary,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    maxWidth: 120,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

export const ItemDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "$completed",
})<{ $completed?: boolean }>(({ theme, $completed }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.custom.fontSizeSmall,
  color: $completed
    ? theme.palette.text.secondary
    : theme.palette.text.secondary,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: 180,
    display: "block",
  },
}));

export const ItemChip = styled(Chip, {
  shouldForwardProp: (prop) => prop !== "$completed",
})<{ $completed?: boolean }>(({ theme, $completed }) => ({
  marginLeft: "auto",
  alignSelf: "center",
  fontWeight: theme.custom.chipFontWeight,
  borderRadius: theme.custom.chipFontSize,
  color: $completed ? theme.palette.text.disabled : theme.palette.primary.main,
  borderColor: $completed
    ? theme.palette.text.disabled
    : theme.palette.primary.main,
  fontSize: theme.custom.chipFontSize,
  height: theme.custom.chipHeight,
  paddingLeft: theme.spacing(theme.custom.chipPadding),
  paddingRight: theme.spacing(theme.custom.chipPadding),
  [theme.breakpoints.down("sm")]: {
    fontSize: 11,
    height: 18,
    paddingLeft: 2,
    paddingRight: 2,
  },
}));

export const StyledCheckbox = styled(Checkbox)({
  marginRight: 16,
});

export const StyledIcon = styled("div", {
  shouldForwardProp: (prop) => prop !== "$completed" && prop !== "$color",
})<{ $completed?: boolean; $color?: string }>(
  ({ theme, $completed, $color }) => ({
    fontSize: 22,
    color: $completed ? theme.palette.text.disabledText : $color || "inherit",
    marginRight: 8,
  })
);

import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TaskListPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'maxHeight',
})<{ maxHeight?: string }>(({ theme, maxHeight }) => ({
  width: "100%",
  borderRadius: theme.custom.itemBoxRadius,
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
  boxShadow: "none",
  maxHeight: maxHeight || '40vh',
  overflowY: 'auto',
  position: 'relative',
  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    maxHeight: maxHeight || '65vh',
  },
}));

export const StickyTitle = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  background: theme.palette.background.paper,
  zIndex: 2,
}));

import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TaskListPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.custom.itemBoxRadius,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  marginBottom: theme.spacing(3),
  boxShadow: "none",
  maxHeight: '40vh',
  overflowY: 'auto',
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    borderRadius: 0,
  },
}));

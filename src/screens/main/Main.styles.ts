import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  bgcolor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.custom.contentBoxMaxWidth,
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.custom.contentBoxRadius,
  padding: theme.spacing(theme.custom.contentBoxPadding),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  flex: 1,
  minHeight: "100vh",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    borderRadius: 0,
    minHeight: "100vh",
    height: "100vh",
    boxShadow: "none",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  width: "100%",
  maxWidth: 700,
  margin: "0 auto",
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: theme.spacing(4),
  fontSize: 36,
  [theme.breakpoints.down("sm")]: {
    fontSize: 26,
    marginBottom: theme.spacing(2),
    maxWidth: '95vw',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export const TaskListBox = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: 700,
  position: "relative",
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    paddingRight: 0,
    maxHeight: '95vh',
  },
}));

export const FabBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: -32,
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    bottom: -32,
    right: 0,
  },
}));

export const fabSx = { width: 50, height: 50, minHeight: 50, cursor: 'pointer' }; 
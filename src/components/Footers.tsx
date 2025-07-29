import { Paper, Typography, Box } from "@mui/material";

export default function Footers() {
  return (
    <Paper sx={{ bgcolor: "grey.100", py: 4, mt: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography color="text.secondary">
          Footer: Built with React, TypeScript, and Material-UI
        </Typography>
      </Box>
    </Paper>
  );
}

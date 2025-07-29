import { Paper, Typography, Box, Fab } from "@mui/material";
import CodeBlock from "./CodeBlock";
import { Add, Edit, Favorite } from "@mui/icons-material";

export default function FloatingActionButtons() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Floating Action Button
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Primary action button that floats above content
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Fab color="primary">
          <Add />
        </Fab>
        <Fab color="secondary">
          <Edit />
        </Fab>
        <Fab variant="extended">
          <Favorite sx={{ mr: 1 }} />
          Extended
        </Fab>
      </Box>
      <CodeBlock
        title="Floating Action Button Example"
        code={`import { Fab } from "@mui/material";
import { Add, Edit, Favorite } from "@mui/icons-material";

<Fab color="primary">
  <Add />
</Fab>
<Fab color="secondary">
  <Edit />
</Fab>
<Fab variant="extended">
  <Favorite sx={{ mr: 1 }} />
  Extended
</Fab>`}
      />
    </Paper>
  );
}

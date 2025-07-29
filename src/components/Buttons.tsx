import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import CodeBlock from "./CodeBlock";

export default function Buttons() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Buttons</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Interactive buttons with multiple variants and sizes
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="large">Large</Button>
      </Box>
      <CodeBlock
        title="Buttons Example"
        code={`import { Button } from "@mui/material";

<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
<Button variant="contained" color="secondary">Secondary</Button>
<Button variant="contained" color="error">Error</Button>
<Button variant="contained" size="small">Small</Button>
<Button variant="contained" size="large">Large</Button>`}
      />
    </Paper>
  );
}

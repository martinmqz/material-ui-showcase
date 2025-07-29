import { Chip, Paper, Typography, Box } from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function Chips() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Chips</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Compact elements that represent an input, attribute, or action
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
        <Chip label="Basic" />
        <Chip label="Clickable" onClick={() => {}} />
        <Chip label="Deletable" onDelete={() => {}} />
        <Chip label="Primary" color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Success" color="success" />
        <Chip label="Error" color="error" />
      </Box>
      <CodeBlock
        title="Chips Example"
        code={`import { Chip } from "@mui/material";

    <Chip label="Basic" />
    <Chip label="Clickable" onClick={() => {}} />
    <Chip label="Deletable" onDelete={() => {}} />
    <Chip label="Primary" color="primary" />
    <Chip label="Secondary" color="secondary" />
    <Chip label="Success" color="success" />
    <Chip label="Error" color="error" />`}
      />
    </Paper>
  );
}

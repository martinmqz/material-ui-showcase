import { Paper, Typography, Box, TextField } from "@mui/material";
import CodeBlock from "./CodeBlock";


export default function TextFields() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Text Fields
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Form inputs with various states and styles
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          maxWidth: "600px",
          mb: 3,
        }}
      >
        <TextField label="Standard" variant="standard" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Email" type="email" helperText="Enter your email" />
        <TextField label="Password" type="password" />
        <TextField label="Disabled" disabled />
        <TextField label="Error" error helperText="This field is required" />
      </Box>
      <CodeBlock
        title="Text Fields Example"
        code={`import { TextField } from "@mui/material";
    
    <TextField label="Standard" variant="standard" />
    <TextField label="Filled" variant="filled" />
    <TextField label="Outlined" variant="outlined" />
    <TextField label="Email" type="email" helperText="Enter your email" />
    <TextField label="Password" type="password" />
    <TextField label="Disabled" disabled />
    <TextField label="Error" error helperText="This field is required" />`}
      />
    </Paper>
  );
}

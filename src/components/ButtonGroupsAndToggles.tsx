import { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function ButtonGroupsAndToggles() {
  const [toggleValue, setToggleValue] = useState('left');

  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Button Groups & Toggles
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Grouped buttons and toggle options
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ToggleButtonGroup
          value={toggleValue}
          exclusive
          onChange={(_, newValue) => setToggleValue(newValue)}
        >
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <CodeBlock
        title="Button Groups & Toggles Example"
        code={`import { ButtonGroup, Button, ToggleButtonGroup, ToggleButton } from "@mui/material";

<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>

<ToggleButtonGroup
  value={toggleValue}
  exclusive
  onChange={(_, newValue) => setToggleValue(newValue)}
>
  <ToggleButton value="left">Left</ToggleButton>
  <ToggleButton value="center">Center</ToggleButton>
  <ToggleButton value="right">Right</ToggleButton>
</ToggleButtonGroup>`}
      />
    </Paper>
  );
}

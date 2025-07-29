import { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Switch,
  Checkbox,
  Radio,
} from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function FormControls() {
  const [radioValue, setRadioValue] = useState("option1");
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Form Controls
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Interactive form elements
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}>
        <FormControlLabel
          control={
            <Switch
              checked={switchChecked}
              onChange={(e) => setSwitchChecked(e.target.checked)}
            />
          }
          label="Enable notifications"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxChecked}
              onChange={(e) => setCheckboxChecked(e.target.checked)}
            />
          }
          label="Accept terms"
        />
        <FormControl>
          <FormLabel>Radio Group</FormLabel>
          <RadioGroup
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
          >
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="Option 2"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <CodeBlock
        title="Form Controls Example"
        code={`import { Switch, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

<FormControlLabel 
  control={<Switch checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />} 
  label="Enable notifications" 
/>

<FormControlLabel 
  control={<Checkbox checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />} 
  label="Accept terms" 
/>

<FormControl>
  <FormLabel>Radio Group</FormLabel>
  <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
    <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
    <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
  </RadioGroup>
</FormControl>`}
      />
    </Paper>
  );
}

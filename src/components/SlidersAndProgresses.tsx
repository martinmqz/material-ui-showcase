import { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Slider,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function SlidersAndProgresses() {
    const [sliderValue, setSliderValue] = useState(50);

  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Slider & Progress
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Range inputs and progress indicators
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mb: 3,
        }}
      >
        <Box>
          <Typography gutterBottom>Slider Value: {sliderValue}</Typography>
          <Slider
            value={sliderValue}
            onChange={(_, newValue) => setSliderValue(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={100}
          />
        </Box>
        <Box>
          <Typography gutterBottom>Linear Progress: 75%</Typography>
          <LinearProgress variant="determinate" value={75} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography>Circular Progress:</Typography>
          <CircularProgress size={30} />
        </Box>
      </Box>
      <CodeBlock
        title="Slider & Progress Example"
        code={`import { Slider, LinearProgress, CircularProgress, Typography } from "@mui/material";

<Typography gutterBottom>Slider</Typography>
<Slider
  value={sliderValue}
  onChange={(_, newValue) => setSliderValue(newValue)}
  valueLabelDisplay="auto"
  min={0}
  max={100}
/>

<Typography gutterBottom>Linear Progress</Typography>
<LinearProgress variant="determinate" value={75} />

<CircularProgress />`}
      />
    </Paper>
  );
}

import { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function Ratings () {
  const [rating, setRating] = useState(4);

  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rating
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Star rating component
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography component="legend">Rating: {rating} stars</Typography>
        <Rating
          value={rating}
          onChange={(_, newValue) => setRating(newValue ?? rating)}
        />
      </Box>
      <CodeBlock
        title="Rating Example"
        code={`import { Rating, Typography } from "@mui/material";

<Typography component="legend">Rating</Typography>
<Rating
  value={rating}
  onChange={(_, newValue) => setRating(newValue)}
/>`}
      />
    </Paper>
  );
}

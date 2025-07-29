import {
  Paper,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function FloatingActionButtons() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Divider
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Visual dividers for content sections
      </Typography>
      <Box sx={{ width: "100%", maxWidth: "400px", mb: 3 }}>
        <Typography>Content above divider</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>Content below divider</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
          <Typography>Left</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography>Right</Typography>
        </Box>
      </Box>
      <CodeBlock
        title="Divider Example"
        code={`import { Divider, Typography } from "@mui/material";

<Typography>Content above divider</Typography>
<Divider />
<Typography>Content below divider</Typography>

<Divider orientation="vertical" flexItem />`}
      />
    </Paper>
  );
}

import { Paper, Typography, Box, CardContent, Card } from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function Cards() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cards
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Flexible containers for content
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Material UI Card
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a Material UI card component with some example content to
              demonstrate how it looks.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <CodeBlock
        title="Cards Example"
        code={`import { Card, CardContent, Typography } from "@mui/material";

<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Card Title
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Card description goes here. This is some sample content.
    </Typography>
  </CardContent>
</Card>`}
      />
    </Paper>
  );
}

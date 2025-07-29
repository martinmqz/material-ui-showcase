import { Paper, Typography, Box, Alert } from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function Alerts () {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Alerts
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Important messages and notifications
        </Typography>
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 3,
          }}
        >
          <Alert severity="info">This is an info alert</Alert>
          <Alert severity="success">This is a success alert</Alert>
          <Alert severity="warning">This is a warning alert</Alert>
          <Alert severity="error">This is an error alert</Alert>
        </Box>
        <CodeBlock
          title="Alerts Example"
          code={`import { Alert } from "@mui/material";

<Alert severity="info">This is an info alert</Alert>
<Alert severity="success">This is a success alert</Alert>
<Alert severity="warning">This is a warning alert</Alert>
<Alert severity="error">This is an error alert</Alert>`}
        />
      </Paper>
  )
}

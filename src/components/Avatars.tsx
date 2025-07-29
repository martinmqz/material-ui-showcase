import {
  Paper,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import CodeBlock from "./CodeBlock";

export default function Avatars() {
  return (
    <Paper sx={{ p: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Avatar
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        User profile images and initials
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: "secondary.main" }}>N</Avatar>
        <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar sx={{ width: 56, height: 56 }}>XL</Avatar>
      </Box>
      <CodeBlock
        title="Avatar Example"
        code={`import { Avatar } from "@mui/material";

<Avatar>H</Avatar>
<Avatar sx={{ bgcolor: 'secondary.main' }}>N</Avatar>
<Avatar src="https://mui.com/static/images/avatar/1.jpg" />
<Avatar sx={{ width: 56, height: 56 }}>XL</Avatar>`}
      />
    </Paper>
  );
}
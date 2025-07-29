import { Card, CardContent, IconButton, Typography, Snackbar, Alert, } from "@mui/material";
import { ContentCopy, Check } from "@mui/icons-material";
import { useState } from "react";

interface CodeBlockProps {
  code: string
  title: string
}

export default function CodeBlock({ code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch (error) {
      console.error("Failed to copy code:", error)
    }
  }

  return (
    <>
      <Card sx={{ bgcolor: 'grey.50'}}>
        <CardContent sx={{ p:0 }}>
          <div style={{display:'flex', alignItems: 'center', justifyContent:'space-between', padding: '16px', borderBottom:'1px solid #e0e0e0'}}>
            <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
            <IconButton size="small" onClick={copyToClipboard} color={copied ? 'primary' : 'default'}>
              {copied ? <Check /> : <ContentCopy />}
            </IconButton>
          </div>
          <pre style={{padding: '16px', margin:0, overflowX:'auto', fontSize: '14px', backgroundColor: '#f5f5f5',  fontFamily: 'monospace'}}>
            <code>{code}</code>
          </pre>
        </CardContent>
      </Card>
      <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="success" onClose={() => setSnackbarOpen(false)}>Code copied to clipboard!</Alert>
      </Snackbar>
    </>
  )
}

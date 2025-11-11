import { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem, CircularProgress, Button } from '@mui/material';
import './App.css';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedReply, setGeneratedReply] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/email/generator", {
        emailContent, tone
      });

      setGeneratedReply(
        typeof response.data === 'string' ? response.data : JSON.stringify(response.data)
      );
    } catch (error) {
      alert('Failed to generate email reply. Please try again');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Email Reply Generator
      </Typography>

      <Box sx={{ mx: 3, mb: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          label="Original Email Content"
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="demo-simple-select-label">Tone</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tone || ''}
            label="Tone (Optional)"
            onChange={(e) => setTone(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Professional">Professional</MenuItem>
            <MenuItem value="Casual">Casual</MenuItem>
            <MenuItem value="Friendly">Friendly</MenuItem>
          </Select>
        </FormControl>

        <Button sx={{ mb: 2 }} variant="contained" onClick={handleSubmit} disabled={!emailContent || loading}>
          {loading ? <CircularProgress size={24} /> : "Generate Reply"}
        </Button>
      </Box>

      <Box sx={{ mx: 3, mb: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          value={generatedReply || ''}
          inputProps={{ readOnly: true }}
          sx={{ mb: 2 }}
        />

        <Button variant="outlined" onClick={() => navigator.clipboard.writeText(generatedReply)}>
          Copy to Clipboard
        </Button>
      </Box>
    </Container>
  );
}

export default App;

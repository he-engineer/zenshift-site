import { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found - ZenShift Meditation Coach';
  }, []);

  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Page Not Found
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          We could not find that page. Try heading back to the home page.
        </Typography>
        <Button variant="contained" component={RouterLink} to="/">
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;

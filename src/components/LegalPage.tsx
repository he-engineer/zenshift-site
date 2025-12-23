import { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';

type LegalPageProps = {
  title: string;
  lastUpdated?: string;
  effectiveDate?: string;
  contentHtml: string;
  metaTitle?: string;
};

const legalContentSx: SxProps<Theme> = {
  '& a': {
    color: 'primary.main'
  },
  '& p': {
    color: 'text.secondary',
    marginBottom: 2
  },
  '& ul, & ol': {
    color: 'text.secondary',
    paddingLeft: 3,
    marginBottom: 2
  },
  '& li': {
    marginBottom: 1
  },
  '& h2': {
    marginTop: 4,
    marginBottom: 2,
    fontWeight: 600
  },
  '& h3': {
    marginTop: 3,
    marginBottom: 1.5,
    fontWeight: 600
  },
  '& .toc': {
    backgroundColor: '#F8FAFC',
    padding: 2,
    borderRadius: 1,
    marginBottom: 4
  },
  '& .toc h2': {
    marginTop: 0
  },
  '& .toc a': {
    color: 'primary.main'
  },
  '& .important-notice, & .important-box': {
    backgroundColor: 'warning.light',
    padding: 2,
    borderRadius: 1,
    borderLeft: '4px solid',
    borderColor: 'warning.main',
    marginBottom: 3
  },
  '& .contact-info': {
    backgroundColor: 'grey.100',
    padding: 2,
    borderRadius: 1,
    borderLeft: '4px solid',
    borderColor: 'primary.main',
    marginBottom: 3
  },
  '& .step-box': {
    backgroundColor: 'grey.50',
    padding: 2,
    borderRadius: 1,
    border: '1px solid',
    borderColor: 'divider',
    marginBottom: 2
  },
  '& .terms-section, & .privacy-section, & .delete-section': {
    marginBottom: 4
  },
  '& strong': {
    color: 'text.primary'
  }
};

const LegalPage = ({
  title,
  lastUpdated,
  effectiveDate,
  contentHtml,
  metaTitle
}: LegalPageProps) => {
  useEffect(() => {
    document.title = metaTitle ?? `${title} - ZenShift Meditation Coach`;
  }, [metaTitle, title]);

  return (
    <Container maxWidth={false} sx={{ py: { xs: 4, md: 6 }, maxWidth: 900, mx: 'auto' }}>
      <Box sx={{ mb: 4 }}>
        <Button
          component={RouterLink}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2 }}
        >
          Back to Home
        </Button>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        {lastUpdated && (
          <Typography color="text.secondary">Last Updated: {lastUpdated}</Typography>
        )}
        {effectiveDate && (
          <Typography color="text.secondary">Effective Date: {effectiveDate}</Typography>
        )}
      </Box>
      <Box sx={legalContentSx} dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Container>
  );
};

export default LegalPage;

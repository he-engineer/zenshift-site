import { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    title: 'AI Coach Conversations',
    description:
      "Have a real conversation with your meditation coach. Describe what you need, and our AI understands your situation then recommends the perfect library session or offers to create a custom one tailored just for you.",
    image: '/assets/images/meditation-photos/optimized/1_forest_morning_mist/mobile.png',
    alt: 'Peaceful forest scene with morning mist representing calm conversation'
  },
  {
    title: 'Custom Session Generation',
    description:
      'Need something unique? The AI creates a personalized meditation with your name and calming music in 2-3 minutes, tailored to your exact situation.',
    image: '/assets/images/meditation-photos/optimized/2_mountain_sunrise/mobile.png',
    alt: 'Mountain sunrise representing personalized experiences'
  },
  {
    title: 'Smart Library Matching',
    description:
      'Browse or discover from 20 curated sessions across 10 categories. AI recommends the best match for your mood and available time.',
    image: '/assets/images/meditation-photos/optimized/3_still_lake_reflection/mobile.png',
    alt: 'Still lake reflection representing clarity'
  },
  {
    title: 'Progress Tracking and Learning',
    description:
      'Track your progress with streaks, milestones, and weekly goals. Favorites sync across devices and recommendations improve over time.',
    image: '/assets/images/meditation-photos/optimized/4_ocean_horizon_at_dusk/mobile.png',
    alt: 'Ocean horizon at dusk representing growth'
  }
];

const steps = [
  {
    number: '1',
    title: 'Express Your Need Conversationally',
    description:
      'Tell your AI coach what is on your mind in your own words. No predefined categories, just natural conversation.',
    image: '/assets/images/meditation-photos/optimized/6_cloudy_mountains/mobile.png',
    alt: 'Cloudy mountain landscape'
  },
  {
    number: '2',
    title: 'AI Analyzes and Matches',
    description:
      'The system evaluates your situation and searches our library. If no strong match exists, it offers to create a custom session.',
    image: '/assets/images/meditation-photos/optimized/12_starry_night_sky/mobile.png',
    alt: 'Starry night sky representing clarity'
  },
  {
    number: '3',
    title: 'Choose Your Path to Relief',
    description:
      'Play a library session instantly or approve custom generation. For custom sessions, AI writes a script, narrates it, and adds music.',
    image: '/assets/images/meditation-photos/optimized/11_tropical_beach/mobile.png',
    alt: 'Tropical beach representing relief'
  },
  {
    number: '4',
    title: 'Let AI Learn Your Patterns',
    description:
      'Every session helps the system improve its recommendations, making each experience more personalized.',
    image: '/assets/images/meditation-photos/optimized/19_bamboo_forest/mobile.png',
    alt: 'Bamboo forest representing growth'
  }
];

const screenshots = [
  {
    title: 'Intuitive Home Screen',
    description: 'Single-screen interface with quick access to guided sessions from 2 to 10 minutes.',
    image: '/assets/images/meditation-photos/optimized/5_river_quiet_valley/mobile.png',
    alt: 'Quiet river flowing through a peaceful valley'
  },
  {
    title: 'Dynamic Recommendations',
    description: 'Personalized recommendations based on your mood, available time, and usage patterns.',
    image: '/assets/images/meditation-photos/optimized/7_meadow_soft_afternoon/mobile.png',
    alt: 'Peaceful meadow in soft afternoon light'
  },
  {
    title: 'Premium Audio Experience',
    description: 'Soothing narration with carefully selected background music optimized for seamless playback.',
    image: '/assets/images/meditation-photos/optimized/8_snowy_landscape_blue_hour/mobile.png',
    alt: 'Serene snowy landscape during blue hour'
  },
  {
    title: 'Progress Tracking',
    description: 'Session history, weekly stats, and milestone tracking to keep you consistent.',
    image: '/assets/images/meditation-photos/optimized/9_desert_sunset/mobile.png',
    alt: 'Desert landscape at sunset'
  }
];

const stats = [
  { value: '2-10 min', label: 'Quick Sessions' },
  { value: 'One-tap', label: 'Instant Relief' },
  { value: '24/7', label: 'Always Available' }
];

const heroMetrics = [
  { value: 'Conversational', label: 'AI coach' },
  { value: 'Custom', label: 'generation' }
];

const HomePage = () => {
  useEffect(() => {
    document.title = 'ZenShift Meditation Coach - Your Mindfulness Companion';
  }, []);

  return (
    <Box>
      <Box
        component="section"
        sx={{
          background: 'linear-gradient(135deg, #1A1D2E 0%, #2D6A6C 100%)',
          color: 'common.white',
          py: { xs: 8, md: 12 },
          minHeight: { md: 'calc(100vh - 72px)' },
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Your AI-Powered Meditation Coach - Understands Your Exact Situation
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: 'rgba(255, 255, 255, 0.85)', maxWidth: 600 }}
                >
                  Have a conversation with your meditation coach about what you need. We recommend the
                  perfect session from our library or create a custom one tailored specifically for you.
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: 2
                  }}
                >
                  {heroMetrics.map((metric) => (
                    <Box key={metric.label} sx={{ textAlign: 'center' }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: 'common.white',
                          fontSize: { xs: '1.25rem', sm: '1.5rem', lg: '1.75rem' }
                        }}
                      >
                        {metric.value}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {metric.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    component={RouterLink}
                    to="/#download"
                    size="large"
                    sx={{
                      bgcolor: 'common.white',
                      color: 'primary.main',
                      '&:hover': { bgcolor: 'grey.100' }
                    }}
                  >
                    Download Free App
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    component={RouterLink}
                    to="/#how-it-works"
                    size="large"
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.6)',
                      color: 'common.white',
                      '&:hover': {
                        borderColor: 'common.white',
                        bgcolor: 'rgba(255, 255, 255, 0.08)'
                      }
                    }}
                  >
                    See How It Works
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                component="img"
                src="/assets/images/app-hero-preview.png"
                alt="ZenShift Meditation Coach app interface"
                sx={{
                  width: '100%',
                  maxWidth: { xs: 280, md: 320, lg: 360 },
                  display: 'block',
                  margin: { xs: '0 auto', md: '0 0 0 auto' },
                  borderRadius: '20px',
                  boxShadow:
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="product" sx={{ py: { xs: 6, md: 12 } }}>
        <Container>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h4">ZenShift Features</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Our AI-powered system combines conversational guidance with personalized recommendations and
              custom content generation. ZenShift adapts uniquely to you and gets smarter with every
              interaction.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} lg={3} key={feature.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 300ms ease, box-shadow 300ms ease',
                    boxShadow:
                      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow:
                        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    },
                    '&:hover .feature-media': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={feature.image}
                    alt={feature.alt}
                    className="feature-media"
                    sx={{
                      height: { xs: 240, md: 200, lg: 220 },
                      objectFit: 'cover',
                      transition: 'transform 300ms ease'
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center', flex: 1, p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">{feature.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="how-it-works" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#F8FAFC' }}>
        <Container>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h4">How Your AI Coach Helps You Find Calm</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              A conversational system that understands your needs and delivers personalized meditation
              from our library or created just for you.
            </Typography>
          </Stack>
          <Stack spacing={{ xs: 4, md: 5 }}>
            {steps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <Box
                  key={step.title}
                  sx={{
                    display: 'grid',
                    gap: { xs: 3, md: 4 },
                    alignItems: 'center',
                    gridTemplateColumns: {
                      xs: '1fr',
                      md: isEven ? '200px 1fr 80px' : '80px 1fr 200px'
                    }
                  }}
                >
                  <Box
                    sx={{
                      order: { xs: 1, md: isEven ? 3 : 1 },
                      display: 'flex',
                      justifyContent: { xs: 'flex-start', md: 'center' }
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2D6A6C 0%, #4A9B9E 100%)',
                        color: 'common.white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', md: '1.75rem' }
                      }}
                    >
                      {step.number}
                    </Box>
                  </Box>
                  <Box sx={{ order: { xs: 2, md: 2 } }}>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary">{step.description}</Typography>
                  </Box>
                  <Box
                    sx={{
                      order: { xs: 3, md: isEven ? 1 : 3 },
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '100%', sm: 300, md: 200 },
                        maxWidth: 300,
                        aspectRatio: '1 / 1',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow:
                          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                      }}
                    >
                      <Box
                        component="img"
                        src={step.image}
                        alt={step.alt}
                        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Stack>
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              pt: { xs: 4, md: 5 },
              borderTop: '1px solid',
              borderColor: 'divider',
              textAlign: 'center'
            }}
          >
            <Typography sx={{ mb: 2 }}>
              <strong>Who It's For:</strong> Busy professionals, beginners seeking guided structure,
              experienced meditators looking for variety, and anyone wanting to build consistent
              mindfulness habits.
            </Typography>
            <Button variant="contained" component={RouterLink} to="/#download">
              Download ZenShift Today
            </Button>
          </Box>
        </Container>
      </Box>

      <Box component="section" id="app-preview" sx={{ py: { xs: 6, md: 12 } }}>
        <Container>
          <Stack spacing={2} sx={{ mb: 5, textAlign: 'center' }}>
            <Typography variant="h4">Experience ZenShift Meditation Coach</Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Enjoy premium audio with soothing narration and carefully selected background music. Each
              session is optimized for fast loading and seamless playback.
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {screenshots.map((shot) => (
              <Grid item xs={12} sm={6} lg={3} key={shot.title}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'transform 300ms ease, box-shadow 300ms ease',
                    boxShadow:
                      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow:
                        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    },
                    '&:hover .screenshot-media': {
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={shot.image}
                    alt={shot.alt}
                    className="screenshot-media"
                    sx={{
                      height: { xs: 240, md: 200, lg: 220 },
                      objectFit: 'cover',
                      transition: 'transform 300ms ease'
                    }}
                  />
                  <CardContent sx={{ textAlign: 'left', flex: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      sx={{ fontSize: '1.0625rem', fontWeight: 600, color: 'text.primary' }}
                    >
                      {shot.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {shot.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="company" sx={{ py: { xs: 6, md: 12 }, bgcolor: '#F8FAFC' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Typography variant="h4">About One Ping Fan Venture LLC</Typography>
                <Typography color="text.secondary">
                  We are a technology company pioneering AI-powered personalization in the wellness
                  space. Our platform combines conversational AI, serverless cloud infrastructure, and
                  evidence-based meditation practices to deliver truly personalized mindfulness
                  experiences.
                </Typography>
                <Box>
                  <Typography variant="h6">Our Mission</Typography>
                  <Typography color="text.secondary">
                    Making personalized mindfulness accessible through advanced AI technology.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">Our Technology</Typography>
                  <Typography color="text.secondary">
                    ZenShift is built on conversational AI, serverless cloud infrastructure, and
                    intelligent matching algorithms that improve with every user interaction.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6">Contact Information</Typography>
                  <Typography color="text.secondary">
                    <strong>One Ping Fan Venture LLC</strong>
                    <br />
                    United States
                    <br />
                    Email:{' '}
                    <a href="mailto:zenshift-support@onepingfanventure.com">
                      zenshift-support@onepingfanventure.com
                    </a>
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: 2
                }}
              >
                {stats.map((stat) => (
                  <Paper
                    key={stat.label}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '16px',
                      boxShadow:
                        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                      {stat.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        id="download"
        sx={{
          py: { xs: 6, md: 12 },
          color: 'common.white',
          background: 'linear-gradient(135deg, #2D6A6C 0%, #4A9B9E 100%)'
        }}
      >
        <Container>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h4">Download ZenShift Meditation Coach</Typography>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)' }} maxWidth={720}>
              Transform stress into calm, distraction into focus, and everyday moments into mindful
              experiences with ZenShift.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Button
                component="a"
                href="https://play.google.com/store/apps/details?id=com.zenshift.meditation"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ p: 0 }}
              >
                <Box
                  component="img"
                  src="/assets/app-store-badges/google-play-badge-official.svg"
                  alt="Get it on Google Play"
                  sx={{ height: 53, width: 'auto' }}
                />
              </Button>
              <Box
                sx={{
                  height: 53,
                  px: 3,
                  display: 'inline-flex',
                  alignItems: 'center',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#6B7280',
                  fontWeight: 600
                }}
              >
                iOS - Coming Soon
              </Box>
            </Stack>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.75)' }} maxWidth={720}>
              <strong>Available Now:</strong> Android 8.0+ on Google Play
              <br />
              <strong>Coming Soon:</strong> iOS - Intelligent features to make your meditation practice
              more personalized and supportive
              <br />
              <strong>Privacy:</strong> Your meditation data stays private and secure. ZenShift makes
              personalized recommendations based only on your usage patterns.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;

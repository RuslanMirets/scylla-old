import { Box, Button, Paper, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Ui: NextPage = () => {
  return (
    <MainLayout title="UI">
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'flex-start',
          padding: '20px',
        }}>
        <Typography variant="h1">Заголовок h1</Typography>
        <Typography variant="h2">Заголовок h2</Typography>
        <Typography variant="h3">Заголовок h3</Typography>
        <Typography variant="h4">Заголовок h4</Typography>
        <Typography variant="h5">Заголовок h5</Typography>
        <Typography variant="h6">Заголовок h6</Typography>
        <Typography variant="body1">Текст body1</Typography>
        <Typography variant="body2">Текст body2</Typography>
        <Box>
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="contained">Нажать</Button>
            <Button variant="outlined">Нажать</Button>
            <Button variant="text">Нажать</Button>
          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="contained" color="secondary">
              Нажать
            </Button>
            <Button variant="outlined" color="secondary">
              Нажать
            </Button>
            <Button variant="text" color="secondary">
              Нажать
            </Button>
          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="contained" color="error">
              Нажать
            </Button>
            <Button variant="outlined" color="error">
              Нажать
            </Button>
            <Button variant="text" color="error">
              Нажать
            </Button>
          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="contained" color="success">
              Нажать
            </Button>
            <Button variant="outlined" color="success">
              Нажать
            </Button>
            <Button variant="text" color="success">
              Нажать
            </Button>
          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="contained" color="info">
              Нажать
            </Button>
            <Button variant="outlined" color="info">
              Нажать
            </Button>
            <Button variant="text" color="info">
              Нажать
            </Button>
          </Box>
          <br />
          <Box sx={{ display: 'flex', gap: '15px' }}>
            <Button variant="contained" color="warning">
              Нажать
            </Button>
            <Button variant="outlined" color="warning">
              Нажать
            </Button>
            <Button variant="text" color="warning">
              Нажать
            </Button>
          </Box>
          <br />
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default Ui;

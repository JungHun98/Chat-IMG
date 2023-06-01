import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';

function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container sx={{
        maxWidth: '800px',
        width: '100%'
      }}>
        <Toolbar disableGutters>
          <AdbIcon  />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: 0
            }}
          >
            Chat IMG
          </Typography>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="GitHub Link">
              <a href='https://github.com/JungHun98/Chat-IMG' target='_blank'>
                <GitHubIcon sx={{width: '32px', height: '32px', color:'#0F0F0F'}}/>
              </a>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

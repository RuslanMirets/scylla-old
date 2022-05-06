import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import React from 'react';
import { LinkItem } from '../LinkItem';
import { NavItem } from '../NavItem';
import styles from './Header.module.scss';
import Link from 'next/link';

const pages = [
  { title: 'Главная', href: '/' },
  { title: 'UI', href: '/ui' },
];

const adminItems = [
  { title: 'Админ-панель', href: '/admin', icon: <AdminPanelSettingsIcon fontSize="small" /> },
  { title: 'Пользователи', href: '/users', icon: <PeopleIcon fontSize="small" /> },
];

export const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  const isAuth = false;
  const isAdmin = false;

  return (
    <AppBar className={styles.root}>
      <Container>
        <Toolbar className={styles.toolbar} disableGutters>
          <LinkItem className={styles.logo} href="/">
            <Typography variant="h5">LOGO</Typography>
          </LinkItem>
          <Box className={styles.menu}>
            {pages.map((page) => (
              <NavItem key={page.title} title={page.title} href={page.href} />
            ))}
          </Box>
          <Box className={styles.actions}>
            {isAuth ? (
              <>
                <IconButton onClick={handleClick}>
                  <Avatar src="" alt="" />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  keepMounted
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 21,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}>
                  <Link href="/profile">
                    <MenuItem onClick={handleClose} component="a">
                      <ListItemIcon>
                        <PersonIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Профиль</ListItemText>
                    </MenuItem>
                  </Link>
                  {isAdmin &&
                    adminItems.map((item) => (
                      <Link key={item.title} href={item.href}>
                        <MenuItem onClick={handleClose} component="a">
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText>{item.title}</ListItemText>
                        </MenuItem>
                      </Link>
                    ))}
                  <Divider variant="middle" />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Выйти</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button variant="contained" color="secondary">
                Войти
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import { useState } from 'react';
import { AutoAwesomeTwoTone, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';

const StyleToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  p: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <Typography
          variant='h6'
          container='h5'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          NAV NAV
        </Typography>
        <AutoAwesomeTwoTone sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search here mate...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 29, height: 29 }}
            src='https://cdn.sanity.io/images/zxpjezk0/production/26ffb29ae9e965d442f96bdc10dc0cabffb0c1a8-397x501.png'
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 29, height: 29 }}
            src='https://cdn.sanity.io/images/zxpjezk0/production/26ffb29ae9e965d442f96bdc10dc0cabffb0c1a8-397x501.png'
          />
          <Typography variant='span' container='span'>
            Pannu
          </Typography>
        </UserBox>
      </StyleToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

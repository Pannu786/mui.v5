import {
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Storefront,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary='Homepage' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#article'>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary='Page' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#group'>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary='Groups' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#marketplace'>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary='Marketplace' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#Friend'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary='Friends' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a'>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Link from 'next/link';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HomeIcon from '@mui/icons-material/Home';

export default function TemporaryDrawer() {
  const [isBarOpened, setIsBarOpened] = React.useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    
    if (event.type === 'keydown' && (
      (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {return;}

    setIsBarOpened(open);
    };

  const firstItems = ['home', 'page_1', 'page_2', 'page_3'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <Link href={text === 'home' ? '/' : `/${text}`}>
        <ListItemButton>
          <ListItemIcon>
            {text === 'home' ? <HomeIcon /> :
            index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  ))
  
  const secondItems = ['page_1', 'page_2', 'page_3'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <Link href={`/${text}`}>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  ))

  return (
    <div>
      <Button sx={{'right': 0, 'position': 'absolute'}} onClick={toggleDrawer(true)}>{isBarOpened ? <MenuOpenIcon /> :  <MenuIcon />}</Button>
      <Drawer anchor={'left'} open={isBarOpened} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem style={{backgroundColor: '#DFDFDF'}} >
              <ListItemButton>
              <HighlightOffIcon></HighlightOffIcon>
              </ListItemButton>
            </ListItem>
            {firstItems}
          </List>
          <Divider />
          <List>
            {secondItems}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

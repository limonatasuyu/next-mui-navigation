// Creating the sidebar component that is gonna be used for navigation

// useState needed for manipuating the state and getting the state info
// KeyboardEvent and MouseEvent is needed for '''''''''''''''''
import {useState, KeyboardEvent, MouseEvent} from 'react';

// Importing mui components i'm going to build sidebar with
import Box from '@mui/material/Box'; // Box component is like a default div but i can use custom props that are for mui components (such as sx) too 
import Drawer from '@mui/material/SwipeableDrawer'; // Drawer component is basically the template i'm gonna use for the sidebar
import Button from '@mui/material/Button'; // Component that is almost the same thing as the default button element but with mui features
import List from '@mui/material/List'; // "Lists are continuous, vertical indexes of text or images." (quote from docs)
import ListItem from '@mui/material/ListItem'; // List and ListItem componets are like the ul (or ol) and li elements on html
import ListItemButton from '@mui/material/ListItemButton'; // These 3 are wrappers for the elements inside navigation
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Link component is needed for navigation's functionality
import Link from 'next/link';

// Importing Icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HomeIcon from '@mui/icons-material/Home';


// Declaring the Sidebar component
export default function Sidebar() {
  
  // The state of sidebar
  const [isBarOpened, setIsBarOpened] = useState(false);

  // The function that is gonna close or open the sidebar (the event argument needs to be KeyboardEvent or MouseEvent)
  const toggleDrawer = (open: boolean) => (event: KeyboardEvent | MouseEvent) => {setIsBarOpened(open);};


  const CloseNavButton = () => {

    return (
      <ListItem style={{backgroundColor: '#DFDFDF'}} >
        <ListItemButton onClick={toggleDrawer(false)}>
          <HighlightOffIcon></HighlightOffIcon>
        </ListItemButton>
      </ListItem>
    )
  }

  // 
  const Items = ['home', 'page_1', 'page_2', 'page_3'].map((text, index) => (
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

  return (
    <div>
      <Button sx={{'right': '5rem', 'position': 'fixed', 'bgcolor': 'blue'}} onClick={toggleDrawer(true)}>{isBarOpened ? <MenuOpenIcon /> :  <MenuIcon />}</Button>
      <Drawer anchor={'left'} open={isBarOpened} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <CloseNavButton />
            {Items}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

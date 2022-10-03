
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Button from '@mui/material/Button'; // Component that is almost the same thing as the default button element but with mui features
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import Link from 'next/link'

const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'page_1',
        icon: <PeopleIcon />,
        href: '/page_1',
      },
      { id: 'page_2', icon: <DnsRoundedIcon /> , href: '/page_2',},
      { id: 'page_3', icon: <PermMediaOutlinedIcon />, href: '/page_3', },
      { id: 'page_4', icon: <PublicIcon />, href: '/page_4',},
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'page_1', icon: <SettingsIcon />, href: '/page_1', },
      { id: 'page_2', icon: <TimerIcon /> , href: '/page_2',},
      { id: 'page_3', icon: <PhonelinkSetupIcon />, href: '/page_3',},
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(0, 0, 0, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(0, 0, 0, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(0,0,0,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;


   // The state of sidebar
   const [isBarOpened, setIsBarOpened] = React.useState(false);

   // The function that is gonna close or open the sidebar (the event argument needs to be KeyboardEvent or MouseEvent)
   const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {setIsBarOpened(open);};


   const CloseNavButton = () => {
   return (
     <ListItem style={{backgroundColor: '#DFDFDF'}} >
       <ListItemButton onClick={toggleDrawer(false)}>
         <HighlightOffIcon></HighlightOffIcon>
       </ListItemButton>
     </ListItem>
   )
 }

  return (
    <div>
    <Button sx={{'right': '5rem', 'position': 'fixed', 'bgcolor': 'blue'}} onClick={toggleDrawer(true)}>{isBarOpened ? <MenuOpenIcon /> :  <MenuIcon />}</Button>

    <Drawer open={isBarOpened} {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#000' }}>
          Paperbase
        </ListItem>
        <Link href='/'>
          <ListItem sx={{ ...item, ...itemCategory, cursor: 'pointer' }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#fff' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#000' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, href }) => (
              <ListItem disablePadding key={childId}>
                <Link href={href}>
                  <ListItemButton sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
        <CloseNavButton />
      </List>
    </Drawer>
    </div>
  );
}


/*// Creating the sidebar component that is gonna be used for navigation

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
      <Drawer anchor={'left'} open={isBarOpened} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
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
*/

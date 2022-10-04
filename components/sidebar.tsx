import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';;
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'
import { useRouter } from 'next/router'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer(props: {Page: React.ReactNode}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [leaveOpened, setLeaveOpened] = React.useState(false)
  const [isHovering, setIsHovering] = React.useState(false)

  const router = useRouter()

  const handleLeaveOpenedOpen = () => {
    setLeaveOpened(true)
  }

  const handleLeaveOpenedClose = () => {
    setLeaveOpened(false)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    if (!leaveOpened) setOpen(false);
  };

  const drawerItems = ['page_1', 'page_2', 'page_3', 'page_4'].map((text, index) => (
    <ListItem key={text} disablePadding 
      sx={{
        display: 'block',
        borderRadius: '50px',
        width: '92%',
        ml: '4%',
        mt:'5px',
        color: `${router.pathname === `/${text}` ? 'rgb(36, 153, 239)' : ''}`
      }}>
      <Link href={`/${text}`}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          bgcolor: `${router.pathname === `/${text}` ? 'rgb(242, 249, 254)' : ''}`,
          borderRadius: '15px'
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {index % 2 === 0 ? <InboxIcon sx={{color: `${router.pathname === `/${text}` ? 'rgb(36, 153, 239)' : ''}`}}/> : <MailIcon sx={{color: `${router.pathname === `/${text}` ? 'rgb(36, 153, 239)' : ''}`}}/>}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, fontSize: '13px', fontWeight: '500' }} disableTypography />
      </ListItemButton>
      </Link>
    </ListItem>
  ))    


  React.useEffect(()=> {
    setOpen(leaveOpened )
  }, [leaveOpened])


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} 
        onMouseEnter={() => {handleDrawerOpen(); setIsHovering(true)}} 
        onMouseLeave={() => {handleDrawerClose(); setIsHovering(false)}}
        PaperProps={{

          sx: {
            border: 'none',
            '&::-webkit-scrollbar': { WebkitAppearance: 'none', width: '5px' },
            '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: `${isHovering ? 'rgb(95, 116, 141)': 'initial'}`,
          },
          }
        }}
      
      >
        <DrawerHeader>
          <IconButton onClick={leaveOpened ? handleLeaveOpenedClose :  handleLeaveOpenedOpen}>
            {leaveOpened ? <ChevronLeftIcon /> : <ChevronRightIcon /> }
          </IconButton>
        </DrawerHeader>
        <ListItem key={'Home'} disablePadding 
          sx={{
          display: 'block',
          borderRadius: '50px',
          width: '92%',
          ml: '4%',
          mt:'5px',
          color: `${router.pathname === '/' ? 'rgb(36, 153, 239)' : ''}`
        }}>
        <Link href='/'>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
          bgcolor: `${router.pathname === '/' ? 'rgb(242, 249, 254)' : ''}`,
          borderRadius: '15px'

        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          <HomeIcon sx={{color: `${router.pathname === '/' ? 'rgb(36, 153, 239)' : ''}`}}/>
        </ListItemIcon>
        <ListItemText primary={'home'} sx={{ opacity: open ? 1 : 0, fontSize: '13px', fontWeight: '500' }} disableTypography />
      </ListItemButton>
      </Link>
    </ListItem>
        {[0, 1, 2, 3, 4].map((i) => {return (
          <Box key={i}>
          <ListItem sx={{ py: 2, px: 3 }}>
            <ListItemText sx={{color: 'gray', fontWeight: 700, height: '1rem', width: `${drawerWidth}px`, opacity: `${open ? 1 : 0}`}} disableTypography>SECTİON</ListItemText>
          </ListItem>
          <List>
            {drawerItems}
          </List>
        </Box>
        )})}
      </Drawer>
      <Box sx={{width: '100%'}}>{props.Page}</Box>
    </Box>
  );
}
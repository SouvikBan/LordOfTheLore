import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import SendIcon from '@material-ui/icons/Send'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import {Link} from 'react-router-dom'

export const mainListItems = (
  <div>
  <Link to="/MainPage">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>
    <Link to="/Genres">
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Start The Quiz" />
    </ListItem>
    </Link>
    <Link to="/Leaderboards">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Leaderboard" />
    </ListItem>
    </Link>
    <Link to="/Login">
    <ListItem button>
      <ListItemIcon>
        <PowerSettingsNewIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
    </Link>
  </div>
);


import LayersIcon from '@material-ui/icons/Layers';
import {Link} from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dominio01">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Dominio 01" />
    </ListItem>
    <ListItem button component={Link} to="/segundodominio">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Segundo Dominio" />
    </ListItem>
    <ListItem button component={Link} to="/informacoes">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="InformaÁıes Extras" />
    </ListItem>    
  </div>
);

export const secondaryListItems = (
  <div>
  </div>
);

import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { AttachMoney, Store } from "@material-ui/icons";

function SidebarMenu() {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <AttachMoney />
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItem>
    </List>
  );
}

export default SidebarMenu;

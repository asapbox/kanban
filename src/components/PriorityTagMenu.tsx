import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const menuOptions = [
  { tag: "Choose a priority level:" },
  { tag: "Low", backGroundColor: "#B8EBB0", color: "black" },
  { tag: "Medium", backGroundColor: "#F0CA81", color: "black" },
  { tag: "High", backGroundColor: "#DE1D3E", color: "white" },
];

export default function PriorityTagMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        // TODO: fix all the styles in the component.
        sx={{
          width: 120,

        }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label=""
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={menuOptions[selectedIndex].tag}
            // TODO: fix all the styles in the component.
            sx={{
              bgcolor: menuOptions[selectedIndex].backGroundColor,
              color: menuOptions[selectedIndex].color,
              borderRadius: 50,
              fontFamily: "Roboto",
              font: "sans-serif",
              fontWeight: 400,
              fontSize: 16,
              display: "flex",
              justifyContent: "center",
            }}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={option.tag}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.tag}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

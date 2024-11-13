// CustomPopper.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const CustomPopper = ({ options, anchorEl, open, onClose, value, onOptionClick }) => {
  return (
    <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
      <List component="nav">
        {options.map((option) => (
          <ListItem button key={option.name} onClick={() => onOptionClick(option)}>
            <ListItemText primary={option.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CustomPopper;

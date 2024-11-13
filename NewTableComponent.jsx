import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
  Box,
  IconButton,
  Typography,
  Pagination,
  Container
} from '@mui/material';
import { ExpandLess, ExpandMore, Share } from '@mui/icons-material';

const TableComponent = ({ sections }) => {
  const [openSections, setOpenSections] = useState(sections.map(section => Array(section.data.length).fill(false)));

  const handleClick = (sectionIndex, itemIndex) => {
    const newOpenSections = openSections.map((open, idx) => 
      idx === sectionIndex ? open.map((itemOpen, j) => (j === itemIndex ? !itemOpen : itemOpen)) : open
    );
    setOpenSections(newOpenSections);
  };

  return (
    <Container>
      {sections.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginBottom: 2 }} marginLeft={2}>
          <Typography variant="h6" component="div" sx={{ padding: 5 }} marginLeft={3}>
            {section.header}
          </Typography>
          <nav aria-label="connections">
            <List>
              {section.data.map((connection, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <ListItem disablePadding>
                    <ListItemButton onClick={() => handleClick(sectionIndex, itemIndex)}>
                      <ListItemText primary={connection.name} secondary={connection.details} />
                      {openSections[sectionIndex][itemIndex] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <IconButton edge="end" aria-label="share">
                      <Share />
                    </IconButton>
                  </ListItem>
                  <Collapse in={openSections[sectionIndex][itemIndex]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="More details" />
                      </ListItemButton>
                      {/* You can add more nested items here */}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </nav>
          <Pagination count={Math.ceil(section.data.length / 5)} color="primary" sx={{ marginTop: 2, justifyContent: 'center', display: 'flex' }} />
        </Box>
      ))}
    </Container>
  );
};

export default TableComponent;

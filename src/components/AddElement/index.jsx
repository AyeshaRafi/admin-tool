import { useState } from 'react';
import { Box, Stack, Typography, Button, Menu, MenuItem } from '@mui/material';

import plusIcon from '../../assets/plusIcon.svg';
import checkMark from '../../assets/checkMark.svg';
import callToAction from '../../assets/callToAction.svg';

import { ITEM_TYPES_TO_NUMBER } from '../../utils/constants';

import './index.scss';

function AddElement({ addElement }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Box ml="auto">
      <Button
        sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        onMouseOver={handleClick}
        className="menu-button"
      >
        <Stack className="plus-icon">
          <img src={plusIcon} alt="plus icon" />
        </Stack>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PopoverClasses={{
          paper: 'menu',
        }}
      >
        <MenuItem onClick={() => handleAddElement(ITEM_TYPES_TO_NUMBER.CALL_TO_ACTION, 'Call to Action')}>
          <Stack direction="row" className="bar">
            <img src={callToAction} alt="call to action icon" className="icon" />
            <Typography> Call to Action</Typography>
          </Stack>
        </MenuItem>
        <MenuItem onClick={() => handleAddElement(ITEM_TYPES_TO_NUMBER.TO_DO, 'Todo')}>
          <Stack direction="row" className="bar">
            <img src={checkMark} alt="check mark" className="icon" />
            <Typography>Todo</Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Box>
  );

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  async function handleAddElement(type, title) {
    addElement(type, title);
    handleClose();
  }
}

export default AddElement;

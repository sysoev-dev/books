import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import CardList from '../card-list';

import './index.css';

export default function ShopingCard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <IconButton onClick={handleClick} aria-label='Shoping card'>
      <ShoppingCart />
      <Popover
        className='popover__card'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference='anchorPosition'
        anchorPosition={{ top: 130, left: 1020 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='popover__card__contant'>
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={() => console.log('close')}
            aria-label='Close'
          >
            <Close />
          </IconButton>
          <h3 className='popover__card__title'>Корзина</h3>
          <CardList />
        </div>
      </Popover>
    </IconButton>
  );
}

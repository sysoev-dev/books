import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Popover from '@mui/material/Popover';
import { useContext, useState } from 'react';
import CardList from '../card-list';
import Badge from '@mui/material/Badge';
import { CardContext } from '../../lib/context/card';

import './index.css';

export default function ShopingCard() {
  const card = useContext(CardContext);
  const cardItemsCount = card.length;

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
    <>
      <IconButton onClick={handleClick} aria-label='Shoping card'>
        <Badge badgeContent={cardItemsCount || 0} color='primary'>
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Popover
        className='popover__card'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className='popover__card__contant'>
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={handleClose}
            aria-label='Close'
          >
            <Close />
          </IconButton>
          <h3 className='popover__card__title'>Корзина</h3>
          <CardList />
        </div>
      </Popover>
    </>
  );
}

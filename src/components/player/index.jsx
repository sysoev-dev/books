import './index.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayCircle';
import ReplayPrevIcon from '@mui/icons-material/Replay10';
import ReplayNextIcon from '@mui/icons-material/Forward10';

function valuetext(value) {
  return `${value}°C`;
}

export default function Player() {
  return (
    <div className='player'>
      <h3 className='player__track'>Гибельное влияние</h3>
      <p className='player__author'>Майк Омер</p>
      <img
        className='player__img'
        src='https://rulibra.net/uploads/covers/2023-03-21/gibelnoe-vliyanie-.jpg-205x.webp'
        alt='img'
      />
      <Box sx={{ width: 150, margin: 'auto' }}>
        <Slider
          aria-label='Temperature'
          defaultValue={30}
          getAriaValueText={valuetext}
          color='warning'
        />
      </Box>
      <IconButton aria-label='play'>
        <ReplayPrevIcon />
      </IconButton>
      <IconButton aria-label='play'>
        <PlayIcon fontSize='large' />
      </IconButton>
      <IconButton aria-label='play'>
        <ReplayNextIcon />
      </IconButton>
    </div>
  );
}

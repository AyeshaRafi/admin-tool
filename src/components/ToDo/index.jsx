import { Stack, Typography } from '@mui/material';

import tickMark from '../../assets/mobilePreviewIcons/tickMark.svg';

import './index.scss';

const Todo = () => {
  return (
    <Stack direction="row" className="to-do">
      <img src={tickMark} alt="check-mark" />
      <Typography className="text">New todo item</Typography>
    </Stack>
  );
};

export default Todo;

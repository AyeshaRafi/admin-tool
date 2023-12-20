import homeFeed from '../../assets/homeFeedIcon.svg';
import mobileIcon from '../../assets/mobileIcon.svg';
import callToAction from '../../assets/callToAction.svg';
import checkMark from '../../assets/checkMark.svg';
import AddElement from '../AddElement';

import './index.scss';
import { createHomeFeedElement } from '../../apis/homefeedApis';

import { ITEM_TYPES_TO_NUMBER } from '../../utils/constants';
import { Box, Stack, Typography } from '@mui/material';

function HomeFeedMenu({ fetchHomeFeedData }) {
  return (
    <Stack className="home-feed-menu">
      <Stack direction="row" className="top-bar">
        <img src={homeFeed} alt="home feed icon" />
        <Typography variant="h2">Homefeed</Typography>
        <AddElement addElement={addElement} />
      </Stack>
      <Stack direction="row" className="live-preview-container">
        <img src={mobileIcon} alt="mobile icon" />
        <Typography>Live Preview</Typography>
      </Stack>
      <Box className="line" />
      <Stack
        direction="row"
        className="bar"
        onClick={() => addElement(ITEM_TYPES_TO_NUMBER.CALL_TO_ACTION, 'Call to Action')}
      >
        <img src={callToAction} alt="call to action icon" className="icon" />
        <Typography> Call to Action</Typography>
      </Stack>
      <Stack direction="row" className="bar" onClick={() => addElement(ITEM_TYPES_TO_NUMBER.TO_DO, 'Todo')}>
        <img src={checkMark} alt="check mark" className="icon" />
        <Typography>Todo</Typography>
      </Stack>
    </Stack>
  );

  async function addElement(type, title) {
    const data = {
      element_type: type,
      title,
    };
    await createHomeFeedElement(data);
    await fetchHomeFeedData();
  }
}

export default HomeFeedMenu;

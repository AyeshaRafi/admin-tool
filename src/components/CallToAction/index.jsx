import { Button } from '@mui/material';
import { Stack } from '@mui/system';

import callToAction from '../../assets/mobilePreviewIcons/callToAction.png';

import './index.scss';

const CallToAction = ({ link }) => {
  return (
    <Stack className="call-to-action">
      <img src={callToAction} alt="Call to Action" />
      <Button href={link} target="_blank" className="button">
        Learn More
      </Button>
    </Stack>
  );
};

export default CallToAction;

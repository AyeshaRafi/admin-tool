import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Todo from '../ToDo';
import CallToAction from '../CallToAction';

import inbox from '../../assets/mobilePreviewIcons/inbox.svg';
import members from '../../assets/mobilePreviewIcons/members.svg';
import userIcon from '../../assets/mobilePreviewIcons/userIcon.svg';
import calendar from '../../assets/mobilePreviewIcons/calendar.svg';
import homePage from '../../assets/mobilePreviewIcons/homePage.svg';

import { ITEM_TYPES_TO_NUMBER } from '../../utils/constants';

import './index.scss';

function MobilePreview({ elements }) {
  return (
    <Stack className="preview-container">
      <Stack className="mobile-preview">
        <Stack direction="row" className="top-bar">
          <img src={userIcon} alt="user icon" />
          <img src={calendar} alt="user icon" />
        </Stack>
        <Stack alignItems={'flex-start'} mb={2} mx={2.5}>
          <Typography className="secondary-heading">NEW MESSAGES</Typography>
          <Stack direction="row" spacing={2}>
            <Box className="circle" />
            <Stack spacing={1}>
              <Box className="rectangle" />
              <Box className="long-rectangle" />
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={'flex-start'} mb={2} mx={2.5}>
          <Typography className="secondary-heading">GROUP RSVPS</Typography>
          <Stack direction="row" spacing={3}>
            <Stack spacing={1}>
              <Box className="long-rectangle" />
              <Box className="rectangle" />
            </Stack>
            <Box className="oval" />
          </Stack>
        </Stack>
        <Stack>
          {elements.map(
            (element) =>
              element.is_active &&
              (element.element_type === ITEM_TYPES_TO_NUMBER.TO_DO ? (
                <Todo key={element.uuid} />
              ) : (
                <CallToAction key={element.uuid} link={element.link_url} />
              ))
          )}
        </Stack>
        <Stack direction="row" className="footer">
          <img src={homePage} alt="user icon" />
          <img src={members} alt="user icon" />
          <img src={inbox} alt="user icon" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MobilePreview;

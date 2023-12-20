import { Box, Typography } from '@mui/material';
import { ITEM_TYPES_TO_NUMBER } from '../../utils/constants';
import callToAction from '../../assets/callToAction.svg';
import checkMark from '../../assets/checkMark.svg';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { ReactComponent as EyeIcon } from '../../assets/eyeIcon.svg';
import { ReactComponent as ClosedEyeIcon } from '../../assets/closedEyeIcon.svg';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg';
import { updateHomeFeedElement } from '../../apis/homefeedApis';

import './index.scss';

const ElementBar = ({ title, type, isActive, uuid, fetchHomeFeedData, handleItemDelete }) => {
  return (
    <Box className="elements-bar">
      <Hamburger alt="call to action" className="icon" />
      {type === ITEM_TYPES_TO_NUMBER.TO_DO ? (
        <img src={checkMark} alt="check mark" className="icon" />
      ) : (
        <img src={callToAction} alt="call to action" className="icon" />
      )}
      <Typography>{title}</Typography>
      <DeleteIcon alt="call to action" className="icon margin-auto" onClick={deleteElement} />
      {isActive ? (
        <EyeIcon className="icon" onClick={toggleHideElement} />
      ) : (
        <ClosedEyeIcon className="icon" onClick={toggleHideElement} />
      )}
    </Box>
  );

  async function toggleHideElement() {
    await updateHomeFeedElement(uuid, { is_active: !isActive });
    await fetchHomeFeedData();
  }

  async function deleteElement() {
    handleItemDelete();
  }
};

export default ElementBar;

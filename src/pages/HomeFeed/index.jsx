import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';

import MobilePreview from '../../components/MobilePreview';
import HomeFeedMenu from '../../components/HomeFeedMenu';
import ItemsList from '../../components/ItemsList';
import Sidebar from '../../components/SideBar';
import './index.scss';
import { fetchHomeFeedElements } from '../../apis/homefeedApis';

function HomeFeed() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Fetch elements from API
    fetchHomeFeedData();
  }, []);
  return (
    <Paper className="home-feed">
      <Sidebar />
      <div className="inner-content">
        <HomeFeedMenu fetchHomeFeedData={fetchHomeFeedData} />
        <ItemsList elements={elements} updateElements={updateElements} fetchHomeFeedData={fetchHomeFeedData} />
        <MobilePreview elements={elements} />
      </div>
    </Paper>
  );

  async function updateElements(data) {
    setElements(data);
  }

  async function fetchHomeFeedData() {
    const data = await fetchHomeFeedElements();
    setElements(data);
  }
}

export default HomeFeed;

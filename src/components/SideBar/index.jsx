import home from '../../assets/sideBarIcons/home.svg';
import reports from '../../assets/sideBarIcons/reports.svg';
import member from '../../assets/sideBarIcons/member.svg';
import members from '../../assets/sideBarIcons/members.svg';
import inbox from '../../assets/sideBarIcons/inbox.svg';
import homeFeed from '../../assets/sideBarIcons/homefeed.svg';
import events from '../../assets/sideBarIcons/events.svg';
import service from '../../assets/sideBarIcons/service.svg';
import resources from '../../assets/sideBarIcons/resources.svg';
import expandCollapse from '../../assets/sideBarIcons/expand-collapse.svg';

import './index.scss';

function Sidebar() {
  const icons = [
    {
      img: home,
      name: 'home icon',
    },
    {
      img: reports,
      name: 'reports icon',
    },
    {
      img: member,
      name: 'member icon',
    },
    {
      img: members,
      name: 'members icon',
    },
    {
      img: inbox,
      name: 'inbox icon',
    },
    {
      img: homeFeed,
      name: 'homeFeed icon',
    },
    {
      img: events,
      name: 'events icon',
    },
    {
      img: service,
      name: 'service icon',
    },
    {
      img: resources,
      name: 'resources icon',
    },
  ];

  return (
    <div className="sidebar">
      <img src={expandCollapse} alt="expand collapse icon" className="expand-icon" />
      <div className="sidebar-icons">
        {icons.map((icon) => (
          <img
            key={icon.name}
            src={icon.img}
            alt={icon.name}
            className={`${icon.name === 'homeFeed icon' ? 'selected' : ''} icon`}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

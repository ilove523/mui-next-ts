import { Drawer, IconButton, List } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {
  ArrowBack as ArrowBackIcon,
  HelpOutline as FAQIcon,
  Home as HomeIcon,
  LibraryBooks as LibraryIcon,
  NotificationsNone as NotificationsIcon,
  QuestionAnswer as SupportIcon,
  BorderAll as TableIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
} from '@material-ui/icons';
import clsx from 'clsx';
// context
import {
  toggleSidebar,
  useLayoutDispatch,
  useLayoutState,
} from 'context/LayoutContext';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Dot from './Dot';
// components
import SidebarLink from './SidebarLink';
// styles
import useStyles from './styles';

const SidebarArray = [
  { id: 0, label: 'Dashboard', link: '/app/dashboard', icon: <HomeIcon /> },
  {
    id: 1,
    label: 'Typography',
    link: '/app/typography',
    icon: <TypographyIcon />,
  },
  { id: 2, label: 'Tables', link: '/app/tables', icon: <TableIcon /> },
  {
    id: 3,
    label: 'Notifications',
    link: '/app/notifications',
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: 'UI Elements',
    link: '/app/ui',
    icon: <UIElementsIcon />,
    children: [
      { label: 'Icons', link: '/app/ui/icons' },
      { label: 'Charts', link: '/app/ui/charts' },
      { label: 'Maps', link: '/app/ui/maps' },
    ],
  },
  { id: 5, type: 'divider' },
  { id: 6, type: 'title', label: 'HELP' },
  { id: 7, label: 'Library', link: '', icon: <LibraryIcon /> },
  { id: 8, label: 'Support', link: '', icon: <SupportIcon /> },
  { id: 9, label: 'FAQ', link: '', icon: <FAQIcon /> },
  { id: 10, type: 'divider' },
  { id: 11, type: 'title', label: 'PROJECTS' },
  {
    id: 12,
    label: 'My recent',
    link: '',
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 13,
    label: 'Starred',
    link: '',
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: 'Background',
    link: '',
    icon: <Dot size="small" color="secondary" />,
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();

  // global
  const isSidebarOpened = useLayoutState();
  const isLayoutDispatch = useLayoutDispatch();

  // local
  const [isPermanent, setPermanent] = useState(true);

  const handleWindowWidthChange = () => {
    const windowWidth = window.innerWidth;
    const breakpointWidth = theme.breakpoints.values.md;
    const isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener('resize', handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? 'permanent' : 'temporary'}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(isLayoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: clsx(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {SidebarArray.map(item => (
          <SidebarLink
            key={item.id}
            location={{ pathname: item.link }}
            isSidebarOpened={isSidebarOpened}
            {...item}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

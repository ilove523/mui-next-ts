import { WithStyles } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Router } from 'next/router';

import { sidebarStyles } from './styles';

export interface Page {
  icon?: React.ComponentType<SvgIconProps>;
  name: string;
  to: string;
  groupName?: string;
}

export interface PageGroup {
  icon?: React.ComponentType<SvgIconProps>;
  groupName: string;
}

export interface PSidebarLink extends WithStyles<typeof sidebarStyles> {
  page: Page;
  router: Router;
  mini: boolean;
}

export interface PSidebarMenu extends WithStyles<typeof sidebarStyles> {
  mini?: boolean;
  pages: Page[];
  icon?: React.ComponentType<SvgIconProps>;
  groupName: string;
}

export interface SSidebarMenu {
  openCollapse: boolean;
  openPopover: boolean;
}

export interface PSidebar extends WithStyles<typeof sidebarStyles> {
  brand?: string;
  mini?: boolean;
  rwdOpen?: boolean;
  pages: Page[];
  pageGroups: PageGroup[];
  onToggleRwd: () => void;
}

import { Dashboard, Home, SentimentVeryDissatisfied } from '@material-ui/icons';
import { Page, PageGroup } from 'components/Sidebar/types';

export const pageGroups: Array<PageGroup> = [
  {
    icon: Dashboard,
    groupName: 'Components',
  },
];

export const pages: Array<Page> = [
  { name: 'index', to: '/', icon: Home },
  { name: 'Todo', to: '/todos', icon: Home },
  {
    name: 'Error Page',
    to: '/error',
    icon: SentimentVeryDissatisfied,
  },
  { name: 'Notifications', to: '/notifications', groupName: 'Components' },
  { name: 'Buttons', to: '/buttons', groupName: 'Components' },
  {
    name: 'Selection Controls',
    to: '/selection-controls',
    groupName: 'Components',
  },
  { name: 'Form', to: '/form', groupName: 'Components' },
  { name: 'DataTable', to: '/datatable', groupName: 'Components' },
];

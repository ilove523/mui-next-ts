import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FaceIcon from '@material-ui/icons/Face';
import AccountIcon from '@material-ui/icons/Person';
import { useAuth } from 'hooks/auth-context';
import { useUserState } from 'hooks/user-context';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const TopBar: React.FC<{ title?: string }> = props => {
  const user = useUserState();
  const { logout } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Toolbar>
      {user && (
        <>
          <IconButton
            color="inherit"
            aria-haspopup="true"
            aria-controls="profile-menu"
            data-testid="profile-menu"
            onClick={e => setAnchorEl(e.currentTarget)}
          >
            <AccountIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            disableAutoFocusItem
            keepMounted
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>
              <FaceIcon />
              <b>{user.username}</b>
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                router.push('/login');
              }}
            >
              <ExitToAppIcon />
              Logout
            </MenuItem>
          </Menu>
        </>
      )}
    </Toolbar>
  );
};
TopBar.propTypes = {
  title: PropTypes.string,
};
TopBar.defaultProps = {
  title: 'Main page',
};

export default TopBar;

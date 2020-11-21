import { makeStyles } from '@material-ui/core/styles';

import { primaryGray } from 'defaultStyleHelper';

/**
 * MUI Select's menu is a modal, which makes styling it complicated. This seems to be the only
 * way provided by the API to style the menu/modal
 */
export const useMenuStyles = makeStyles({
  list: {
    border: `0.1rem solid ${primaryGray}`,
    padding: 0,
  },
});

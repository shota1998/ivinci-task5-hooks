import React, {useMemo} from 'react';
import { Button } from '@material-ui/core';

import useStyles from './ChangeQuantityButton.style';

const ChangeQuantityButton = ({ onClick, children }) => {
  const classes = useStyles();

  return useMemo(() => {
    console.log("ChangeQuantityButton")
    return(
      <div className={classes.actions}>
        <Button  onClick={onClick} size='small' variant='outlined' color='primary'>
          {children}
        </Button>
      </div>
    )
  }, [])

};

export default ChangeQuantityButton;

import React, {useMemo} from 'react';
import { Button } from '@material-ui/core';

import useStyles from './AddCartButton.style';

const AddCartButton = ({ onClick, children }) => {
  console.log('--- AddCartButton()');

  const classes = useStyles();
  
  return useMemo(() => {
    return(
      <div className={classes.actions}>
        <Button  onClick={onClick} size='small' variant='outlined' color='primary'>
          {children}
        </Button>
      </div>
    )
  }, [])
};

export default AddCartButton;

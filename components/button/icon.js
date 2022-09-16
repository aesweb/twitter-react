import React from 'react';
import cn from 'classnames';
import Button from './index';

import styles from './style.module.css';

const IconButton = ({ children, className, ...props }) => {
  return (
    <Button className={cn(styles.IconButton, className)} {...props}>
      {children}
    </Button>
  );
};

export default IconButton;

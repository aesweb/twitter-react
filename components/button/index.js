import React from 'react';
import cn from 'classnames';
import styles from './style.module.css';
import Link from 'next/link';

function LinkButton({ href, children, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function BaseButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

function Button({ full = false, children, className, ...props }) {
  const Button = props.href ? LinkButton : BaseButton;

  return (
    <Button
      className={cn(styles.button, full && styles.fullWidth, className)}
      {...props}
    >
      {children}
    </Button>
  );
}

export default Button;

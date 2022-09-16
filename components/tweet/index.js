import React from 'react';
import styles from './style.module.css';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

import Photo from '../photo/photo';
import IconButton from '../button/icon';
import * as Icon from '../icons';

const Tweet = ({
  name,
  slug,
  photo,
  dateTime,
  text,
  reply,
  retweet,
  like,
  children
}) => {
  return (
    <article className={styles.tweet}>
      <div className="avatar">
        <Photo />
      </div>
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
          {formatDistanceToNowStrict(dateTime)}
        </header>

        <div className={styles.content}>{text}</div>

        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            <span>{reply}</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>{retweet}</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
            <span>{like}</span>
          </div>
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Tweet;

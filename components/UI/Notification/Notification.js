import ReactDOM from 'react-dom';
import classes from './Notification.module.scss';
import { Fragment } from 'react';
import Head from 'next/head';

const Backdrop = (props) => {
  const { children, onShow } = props;
  return (
    <div className={classes.backdrop} onClick={onShow}>
      <div className={classes.overlay}>{children}</div>
    </div>
  );
};

export const Notification = (props) => {
  const { onShow } = props;
  return (
    <Fragment>
      <Head>
        <title>Thank you!</title>
      </Head>
      {ReactDOM.createPortal(
        <Backdrop onShow={onShow}>
          <div className={classes.header}>
            <h1>Thank you!</h1>
          </div>
          <div className={classes.body}>
            <p className={classes.text}>
              Your form submission has been received.
            </p>
            <p className={classes.text}>
              <button onClick={onShow}>← Back to our site</button>
            </p>
          </div>
        </Backdrop>,
        document.getElementById('notifications'),
      )}
    </Fragment>
  );
};

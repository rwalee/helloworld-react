import { Button, Container, CssBaseline, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from './styles';

export default function SignMsg(props: { err: String }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {props.err === 'pending' && (
          <Typography variant="h5">가입 승인 검토중.</Typography>
        )}
        {props.err === 'denied' && (
          <Typography variant="h5">가입 승인 거부 되었습니다.</Typography>
        )}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            history.push('/');
          }}
        >
          Back
        </Button>
      </div>
    </Container>
  );
}

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
} from '@material-ui/core/';
import { common } from '@material-ui/core/colors';
import { makeStyles, Theme as AugmentedTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';
import React from 'react';
import bgi from './venezia.jpg';

const useStyles = makeStyles((theme: AugmentedTheme) => ({
  container: { background: common.white },
  cont: {
    // background: '#777777',
    // width: '100%',
    backgroundImage: `url(${bgi})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
    height: '100vh',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(8),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Material() {
  const classes = useStyles();

  return (
    <div className={classes.cont}>
      <br />
      <Container maxWidth="sm" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <br />
          <Typography variant="h3" color="primary">
            Admin Portal
          </Typography>
          <br />
          <Typography variant="h6" color="secondary">
            Manage Media Launcher Admin System
          </Typography>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Box mt={4}>
            <Typography variant="body2" color="textSecondary" align="center">
              Copyright © Samsung Electronics.
            </Typography>
            <br />
          </Box>
        </div>
      </Container>
    </div>
  );
}

{
  /* <div>
<Container maxWidth="sm" className={classes.container}>
  <Typography variant="h6" color="primary">
    Helloworld
  </Typography>
  <Grid item xs={12}>
    <Box bgcolor="info.main" color="info.contrastText" p={1}>
      11111
    </Box>
  </Grid>
</Container>
<br />
<Container fixed maxWidth="sm" className={classes.container}>
  <Typography variant="h6" color="secondary">
    What
  </Typography>
</Container>
</div>
<br />
<div>
<Grid container spacing={1}>
  <Grid item xs={12}>
    <Box bgcolor="info.main" color="info.contrastText" p={2}>
      11111
    </Box>
  </Grid>
  <Container className={classes.container}>
    <Typography variant="h6" color="secondary">
      What
    </Typography>
  </Container>
</Grid>
</div> */
}

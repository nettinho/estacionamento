import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import '../imports/accounts.js';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

import AccountLogin from './AccountLogin'

import Home from './components/Home'

const styles = {
  root: {
    flexGrow: 1,
  },
  body: {
    flex: 1,
    margin: '10px',
    padding: '5px',
  },
  flex: {
    flex: 1,
  },
  login: {
    justifyContent: 'center',
    display: 'flex'
  }
};

class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Gestão de Estacionamento
              </Typography>
              <div className={classes.login}>
                  <AccountCircle />
                  <AccountLogin />
              </div>
            </Toolbar>
          </AppBar>
          <div  className={classes.body}>
            <Route exact path='/' component={Home}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

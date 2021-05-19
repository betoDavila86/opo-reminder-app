import React, { useState, useEffect } from 'react';
import './App.sass';
import Header from './components/Header';
import MainBody from './components/commons/MainBody';
import AuthenticationComponent from './components/commons/AuthenticationComponent';
import Navbar from './components/Navbar'
import { Route, withRouter, Redirect } from 'react-router-dom';

import { isAuth, context, registerUser, authenticateUser, retrieveUser } from './logic'

function App({ history }) {

  const [feedback, setFeedback] = useState();
  const [user, setUser] = useState();
  const [view, setView] = useState('');
  const [subjects, setSubjects] = useState();

  useEffect(() => {
    if (isAuth()) {
      retrieveUser()
        .then(user => {
          setUser(user);
          history.push('/home');
        })
    } else {
      // console.log('no user retrieved');
      history.push('/sign-in');
    }
  }, []);

  const __handleFeedback__ = (message, level) => {
    setFeedback({ message, level });

    setTimeout(() => {
      setFeedback(null);
    }, 3000);
  }

  const pageHandler = page => {
    history.push(page);
  }

  const loginHandler = async (email, password) => {
    try {
      const msg = await authenticateUser(email, password);
      console.log(msg)
      history.push('/home');

    } catch ({ message }) {
      __handleFeedback__(message, 'error');
    }
  }

  const registerHandler = async (fullname, email, password) => {
    try {
      const msg = await registerUser(fullname, email, password);

      history.push('/sign-in');

    } catch ({ message }) {
      __handleFeedback__(message, 'error');
    }
  }

  const logoutHandler = () => {
    delete context.storage.token;
    setView('');
    setUser(null);

    history.push('/sign-in');
  }

  const onGoHomeHandler = () => {
    setView('');
    history.push('/home');
  }

  const screenHandler = () => {

  }

  return (
    <div className="App">
      <Header user={user} navigation={pageHandler} onLogout={logoutHandler} onGoHome={onGoHomeHandler} />
      <MainBody>
        <Route exact path="/" render={() => isAuth() ? <Redirect to="/home" /> : <Redirect to="/sign-in" />} />
        <Route path="/sign-in" render={() => isAuth() ? <Redirect to="/home" /> : <AuthenticationComponent title="Acceso" navigation={pageHandler} onLogin={loginHandler} error={feedback} />} />
        <Route path="/sign-up" render={() => isAuth() ? <Redirect to="/home" /> : <AuthenticationComponent title="Registro" navigation={pageHandler} onRegister={registerHandler} error={feedback} />} />
        {user ? <Navbar user={user} navigation={screenHandler} /> : null}
        <Route path="/home" render={() => (<>
          
          {/* Herein, we'll set all the components belonging to home */}

        </>)} />
      </MainBody>
      {/* <Footer /> */}
    </div>
  );
}

export default withRouter(App);

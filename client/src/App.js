import React, { useState, useEffect } from 'react';
import './App.sass';
import Header from './components/Header';
import Wrapper from './components/commons/Wrapper';
import AuthenticationComponent from './components/commons/AuthenticationComponent';
import Controls from './components/Controls';
import NewSubjectForm from './components/New-Subject';
import SubjectList from './components/SubjectList';
import ErrorModal from './components/commons/ErrorModal';
import Quote from './components/Quotes';
import SubjectDetail from './components/SubjectDetail';
import NotFound from './components/NotFound'
import Spinner from './components/commons/Spinner'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom';

import {
  isAuth,
  context,
  registerUser,
  authenticateUser,
  retrieveUser,
  createSubject,
  searchSubjects,
  retrieveMySubjects,
  retrieveSubjectDetail,
} from './logic'

function App({ history }) {

  const [feedback, setFeedback] = useState();
  const [user, setUser] = useState();
  // const [view, setView] = useState('quote');
  const [subjects, setSubjects] = useState();
  const [subject, setSubject] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [screen, setScreen] = useState('');

  useEffect(() => {
    setLoading(true);
    return (async () => {
      if (isAuth()) {
        const user = await retrieveUser()
        const { subjects } = await retrieveMySubjects()
        setUser(user)
        setSubjects(subjects);
        setLoading(false);
        history.push('/home');
      } else {
        history.push('/sign-in');
      }
    })();
  }, []);

  // const __handleFeedback__ = (message, level) => {
  //   setFeedback({ message, level });

  //   setTimeout(() => {
  //     setFeedback(null);
  //   }, 5000);
  // }

  const pageHandler = page => {
    history.push(page);
  }

  const loginHandler = async (email, password) => {
    try {
      await authenticateUser(email, password);
      const user = await retrieveUser()
      setUser(user);
      history.push('/home');
    } catch ({ message }) {
      setFeedback(message);
      setError(true);
    }
  }

  const registerHandler = async (fullname, email, password) => {
    try {
      await registerUser(fullname, email, password);
      history.push('/sign-in');

    } catch ({ message }) {
      setFeedback(message);
      setError(true);
    }
  }

  const logoutHandler = () => {
    try {
      delete context.storage.token;
      setUser(null);
      history.push('/sign-in');
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const onGoHomeHandler = () => {
    // setScreen('');
    history.push('/home');
  }

  // const screenHandler = (page) => {
  //   setScreen(page);
  // }

  const addNewSubjectHandler = async (number, title, knowledge, studyFrequency, setGoalDate, description) => {
    try {
      await createSubject(number, title, knowledge, studyFrequency, setGoalDate, description);
      const { subjects } = await retrieveMySubjects();
      setSubjects(subjects);
    } catch ({ message }) {
      setFeedback(message);
      setError(true)
    }
  }

  const searchSubjectsHandler = async (query) => {
    try {
      const result = await searchSubjects(query)
      console.log(result)
    } catch ({ message }) {
      setFeedback(message);
      setError(true)
    }
  }

  const subjectDetailHandler = async (id) => {
    try {
      const { subject } = await retrieveSubjectDetail(id);
      setSubject(subject);
    } catch ({ message }) {
      setError(true);
      setFeedback(message)
    }
  }

  const modalHandler = () => {
    if (error) setError(false);
  }


  return (
    <div className="App">
      <Header user={user} onSearch={searchSubjectsHandler} navigation={pageHandler} onLogout={logoutHandler} onGoHome={onGoHomeHandler} />
      <Wrapper>
        {error && <ErrorModal title="Error" message={feedback} onHideModal={modalHandler} />}
        <Route exact path="/" render={() => isAuth() ? <Redirect to="/home" /> : <Redirect to="/sign-in" />} />
        <Route path="/sign-in" render={() => isAuth() ? <Redirect to="/home" /> : <AuthenticationComponent title="Acceso" navigation={pageHandler} onLogin={loginHandler} error={feedback} />} />
        <Route path="/sign-up" render={() => isAuth() ? <Redirect to="/home" /> : <AuthenticationComponent title="Registro" navigation={pageHandler} onRegister={registerHandler} error={feedback} />} />
        {user ? <Controls user={user} /> : null}
        <Switch>
          {loading && <Spinner />}
          <Route path="/home" render={() => <Quote />} />
          <Route path="/my-subjects/:subjectId" render={() => <SubjectDetail subject={subject} />} />
          <Route path="/my-subjects">
            {subjects && subjects.length ? <SubjectList subjects={subjects} onDetail={subjectDetailHandler} /> : <p>No hay temas para mostrar</p>}
          </Route>
          <Route path="/new-subject" render={() => <NewSubjectForm error={feedback} onAddSubject={addNewSubjectHandler} />} />
          {/* <Route path="/home" render={() => (<>
            {view === 'quote' && <Quote />}
            {screen === 'my-subjects' &&
              <>
                {
                  subjects && subjects.length ? <SubjectList subjects={subjects} onDetail={subjectDetailHandler} /> : <p>No hay temas que mostrar</p>
                }
              </>
            }
            {screen === 'new-subject' && <NewSubjectForm error={feedback} onAddSubject={addNewSubjectHandler} />}
            {screen === 'subject' && <SubjectDetail subject={subject} />}
          </>)} /> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Wrapper>
      {/* <Footer /> */}
    </div >
  );
}

export default withRouter(App);

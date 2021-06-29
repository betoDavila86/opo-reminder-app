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
import Spinner from './components/commons/Spinner';
import Card from './components/commons/Card';
import EditSubjectForm from './components/EditSubjectForm';
import Feedback from './components/commons/Feedback';
import PrioritySubjectsLinks from './components/PrioritySubjects/PrioritySubjectsLinks';
import RaffleForm from './components/Raffle/RaffleForm'
import Footer from './components/Footer';
import Main from './components/commons/Main';
import Landing from './components/Landing';

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
  modifySubject,
  removeSubject,
  sortSubjects,
  raffleSubjects,
} from './logic'

function App({ history }) {

  const [feedback, setFeedback] = useState();
  const [user, setUser] = useState();
  const [subjects, setSubjects] = useState();
  const [subject, setSubject] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [foundSubject, setFoundSubject] = useState();
  const [filteredSubjects, setFilteredSubjects] = useState();
  const [raffledSubjects, setRaffledSubjects] = useState();
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    return (async () => {
      if (isAuth()) {
        setLoading(true);
        const user = await retrieveUser()
        setUser(user);
        setLoading(false);
        history.push('/home');
      } else {
        history.push('/landing');
      }
    })();
  }, []);

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
      history.push('sign-in');

    } catch ({ message }) {
      setFeedback(message);
      setError(true);
    }
  }

  const logoutHandler = () => {
    try {
      delete context.storage.token;
      setUser(null);
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const onGoHomeHandler = () => {
    history.push('/home');
  }

  const retrieveMySubjectsHandler = async () => {
    try {
      const { subjects } = await retrieveMySubjects();
      setSubjects(subjects);
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const addNewSubjectHandler = async (number, title, knowledge, studyFrequency, setGoalDate, description) => {
    try {
      await createSubject(number, title, knowledge, studyFrequency, setGoalDate, description);
      const { subjects } = await retrieveMySubjects();
      setSubjects(subjects);
      history.push('/my-subjects');
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } catch ({ message }) {
      setFeedback(message);
      setError(true)
    }
  }

  const searchSubjectsHandler = async (query) => {
    try {
      const { subjects } = await searchSubjects(query);
      setFoundSubject(subjects);
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

  const confirmEditHandler = async (subjectId, update) => {
    try {
      const { msg } = await modifySubject(subjectId, update)
      setSuccess(true);
      setFeedback(msg);
      history.replace(`/my-subjects/${subjectId}`);
      const { subject } = await retrieveSubjectDetail(subjectId);
      setSubject(subject);
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const filterSubjectsHandler = async (typeFilter) => {
    try {
      const { subjects } = await retrieveMySubjects();
      if (subjects) {
        const filtered = sortSubjects(subjects, typeFilter);
        setFilteredSubjects(filtered);
      }
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const raffleSubjectsHandler = async (totalSubjects, chosenNumberSubjects) => {
    try {
      const { subjects } = await retrieveMySubjects();
      const raffledSubjects = raffleSubjects(totalSubjects, chosenNumberSubjects, subjects);
      setRaffledSubjects(raffledSubjects);
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const removeSubjectHandler = async (subjectId) => {
    try {
      setWarning(false);
      const { msg } = await removeSubject(subjectId)
      if (!success) setSuccess(true);
      setFeedback(msg);
      history.replace('/my-subjects');
      const { subjects } = await retrieveMySubjects();
      setSubjects(subjects);
    } catch ({ message }) {
      setError(true);
      setFeedback(message);
    }
  }

  const modalHandler = () => {
    if (error) setError(false);
    if (feedback) setFeedback(null);
  }

  const feedbackHandler = () => {
    if (success) setSuccess(false);
    if (feedback) setFeedback(null);
    if (warning) setWarning(false);
  }

  const confirmationHandler = (subjectId) => {
    setWarning(true);
    history.push(`/my-subjects/confirm/${subjectId}`)
  }

  return (
    <div className="App">
      <Wrapper>
        <Header user={user} onSearch={searchSubjectsHandler} navigation={pageHandler} onLogout={logoutHandler} onGoToHome={onGoHomeHandler} />
        <Route path="/landing" render={() => isAuth() ? <Redirect to="/home" /> : <Landing />} />
        {error && <ErrorModal title="Error" message={feedback} onHideModal={modalHandler} />}
        <Route exact path="/" render={() => isAuth() ? <Redirect to="/home" /> : <Redirect to="/landing" />} />
        <Route path="/sign-in" render={() => isAuth() ? <Redirect to="/home" /> : <AuthenticationComponent title="Acceso" navigation={pageHandler} onLogin={loginHandler} error={feedback} />} />
        <Route path="/sign-up" render={() => isAuth() ? <Redirect to="/home" /> : <AuthenticationComponent title="Registro" navigation={pageHandler} onRegister={registerHandler} error={feedback} />} />
        {user ? <Controls user={user} onRetrieveMySubjects={retrieveMySubjectsHandler} onFilterSubjects={filterSubjectsHandler} onGoToHome={onGoHomeHandler} /> : null}
        {user && <Main>
          <Switch>
            {loading && <Spinner />}
            {success && <Feedback message={feedback} onHideModal={feedbackHandler} warning={warning} />}
            <Route path="/my-subjects/confirm/:subjectId">
              {warning && <Feedback message={feedback} onHideModal={feedbackHandler} onRemoveSubject={removeSubjectHandler} warning={warning} />}
            </Route>
            <Route path="/home" render={() => <Quote />} />
            <Route path="/my-subjects/:subjectId">
              {subject && <SubjectDetail subject={subject} onDelete={confirmationHandler} />}
            </Route>
            <Route path="/search">
              {foundSubject && foundSubject.length ? <SubjectList subjects={foundSubject} onDetail={subjectDetailHandler} /> : <Card className="secondary"><NotFound type="empty" /></Card>}
            </Route>
            <Route path="/my-subjects">
              {subjects && subjects.length ? <SubjectList subjects={subjects} onDetail={subjectDetailHandler} /> : <Card className="secondary"><NotFound type="empty" /></Card>}
            </Route>
            <Route path="/new-subject" render={() => <NewSubjectForm error={feedback} onAddSubject={addNewSubjectHandler} />} />
            <Route path="/subject-modify/:subjectId">
              <EditSubjectForm subject={subject} onConfirmEdit={confirmEditHandler} />
            </Route>
            <Route exact path="/priority">
              <PrioritySubjectsLinks onFilterSubjects={filterSubjectsHandler} />
              {filteredSubjects && filteredSubjects.length ? <SubjectList subjects={filteredSubjects} onDetail={subjectDetailHandler} /> : <Card className="secondary"><NotFound type="empty" /></Card>}
            </Route>
            <Route path="/bombo" render={() => <RaffleForm onRaffleSubjects={raffleSubjectsHandler} raffledSubjects={raffledSubjects} />} />
            <Route path="*">
              {user && <Card className='secondary'>
                <NotFound type='not-found' />
              </Card>}
            </Route>
          </Switch>
        </Main>}
        <Footer />
      </Wrapper>
    </div >
  );
}

export default withRouter(App);
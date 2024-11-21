import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailBox) => {
    newMailBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;



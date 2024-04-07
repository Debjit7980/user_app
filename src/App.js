import React, { useState } from 'react';
import Signup from './components/Signup';
import Hello from './components/Hello';
import CreateProfile from './components/CreateProfile';
import Verification from './components/Verification';

function App() {
  const [showHello, setShowHello] = useState(false);

  const handleClick = () => {
    setShowHello(true);
  };

  const [showProfile, setShowProfile] = useState(false);
  const onCreate = () => {
    setShowProfile(true);
  };

  const [verify, setVerify] = useState(false);
  const onVerify = () => {
    setVerify(true);
  };

  const handleReturn = () => {
    setShowHello(false);
  };

  const handleReturn2 = () => {
    setVerify(false);
  };

  return (
    <>
      {showHello ? (
        verify ? (
          showProfile ? (
            <Verification onReturn={handleReturn}/> // Pass the image preview data to the Verification component
          ) : (
            <Hello onClick={onCreate} onReturn={handleReturn2} />
          )
        ) : (
          <CreateProfile onClick={onVerify} onReturn={handleReturn} /> // Pass the function to set image preview and return to the previous component
        )
      ) : (
        <Signup onClick={handleClick} />
      )}
    </>
  );
}

export default App;

import React, { useState } from 'react';
import SignUpForm from './SignUp';

const WelcomeMessage = () => {
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  return (
    <div>
      <h1>Welcome to Our Platform!</h1>
      <p2>Please Select One User Type</p2>
      <form>
        <label>
          <input
            type="radio"
            value="community"
            checked={selectedUserType === 'community'}
            onChange={handleUserTypeChange}
          />
          Community Login
        </label>
        <label>
          <input
            type="radio"
            value="admin"
            checked={selectedUserType === 'admin'}
            onChange={handleUserTypeChange}
          />
          Admin Login
        </label>
      </form>
      {selectedUserType && <SignUpForm userType={selectedUserType} />}
    </div>
  );
};

export default WelcomeMessage;

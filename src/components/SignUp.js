// src/components/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = ({ userType }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [university, setUniversity] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  /* const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., validation, API calls, etc.)
    console.log('Form submitted:', {
      userType,
      firstName,
      lastName,
      // ... other form fields
    });
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td colSpan="2">
                <h2>Sign Up</h2>
              </td>
            </tr>
            <tr>
              <td>First Name:</td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Confirm Password:</td>
              <td>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Email Address:</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>University:</td>
              <td>
                <select
                  value={university}
                  onChange={(e) => setUniversity(e.target.value)}
                >
                  <option value="">Select University</option>
                  {/* Add university options dynamically */}
                  {/* Example: <option value="university1">University 1</option> */}
                </select>
              </td>
            </tr>
            {userType === 'admin' && (
              <tr>
                <td>Admin-specific Field:</td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Admin-specific ID"
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                  />
                </td>
              </tr>
            )}
            <tr>
              <td colSpan="2">
                <button type="submit">Sign Up</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SignUpForm;
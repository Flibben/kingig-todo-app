/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';

test('that the component renders 4 input fields for registration', () => {
  render(<RegisterForm />);
  const emailInput = screen.getByTestId('email');
  expect(emailInput).toBeInTheDocument();

  const passwordInput = screen.getByTestId('password');
  expect(passwordInput).toBeInTheDocument();

  const fullnameInput = screen.getByTestId('fullname');
  expect(fullnameInput).toBeInTheDocument();

  const displayName = screen.getByTestId('displayname');
  expect(displayName).toBeInTheDocument();
});

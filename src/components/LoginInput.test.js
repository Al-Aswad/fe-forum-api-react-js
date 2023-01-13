/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 *   - should show alert when login button is clicked and email empty
 *   - should show alert when login button is clicked and password empty
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(usernameInput, 'usernametest');
    // Assert
    expect(usernameInput).toHaveValue('usernametest');
  });

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'password');
    // Assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(usernameInput, 'usernametest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'usernametest',
      password: 'passwordtest',
    });
  });

  it('should show alert when login button is clicked and email empty', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    // const usernameInput = await screen.getByPlaceholderText('Email');
    // leave email input empty
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).not.toBeCalled();
    // expect(screen.getByText('email atau password tidak boleh kosong')).toBeInTheDocument();
    expect(window.alert).toHaveBeenCalledWith('email atau password tidak boleh kosong');
  });

  it('should show alert when login button is clicked and password empty', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const usernameInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(usernameInput, 'usernametest');

    const loginButton = await screen.getByRole('button', { name: 'Login' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockLogin).not.toBeCalled();
    // expect(screen.getByText('email atau password tidak boleh kosong')).toBeInTheDocument();
    expect(window.alert).toHaveBeenCalledWith('email atau password tidak boleh kosong');
  });
});

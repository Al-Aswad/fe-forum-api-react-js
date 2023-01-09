/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call Register function when Register button is clicked
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(usernameInput, 'nametest');
    // Assert
    expect(usernameInput).toHaveValue('nametest');
  });
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'emailtest');
    // Assert
    expect(emailInput).toHaveValue('emailtest');
  });
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'password');
    // Assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);

    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'username');

    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'budi@gmail.com');

    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const registerButton = await screen.getByRole('button', { name: 'Register' });
    // Action
    await userEvent.click(registerButton);
    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'username',
      email: 'budi@gmail.com',
      password: 'passwordtest',
    });
  });
});

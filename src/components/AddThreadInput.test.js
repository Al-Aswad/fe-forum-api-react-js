/**
 * skenario testing
 *
 * - AddThreadInput component
 *   - should handle Title typing correctly
 *   - should handle Category typing correctly
 *   - should handle Body typing correctly
 *   - should call Buat function when Register button is clicked
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddThreadInput from './AddThreadInput';

describe('AddThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<AddThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    // Action
    await userEvent.type(titleInput, 'judul');
    // Assert
    expect(titleInput).toHaveValue('judul');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<AddThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    // Action
    await userEvent.type(categoryInput, 'frontend');
    // Assert
    expect(categoryInput).toHaveValue('frontend');
  });

  it('should handle threadInputBody typing correctly', async () => {
    // Arrange
    render(<AddThreadInput addThread={() => {}} />);
    const threadInput = await screen.getByTestId('threadInputBody');

    // Action
    await userEvent.type(threadInput, 'frontend');
    // Assert
    expect(threadInput.innerHTML).toEqual('frontend');
  });

  it('should call buat function when buat button is clicked', async () => {
    // Arrange
    const mockAddThread = jest.fn();
    render(<AddThreadInput addThread={mockAddThread} />);

    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'judul');

    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'category');

    const inputBody = await screen.getByTestId('threadInputBody');
    await userEvent.type(inputBody, 'body');

    const loginButton = await screen.getByRole('button', { name: 'Buat' });
    // Action
    await userEvent.click(loginButton);
    // Assert
    expect(mockAddThread).toBeCalledWith({
      title: 'judul',
      category: 'category',
      body: 'body',
    });
  });
});

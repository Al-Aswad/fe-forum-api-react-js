/**
 * skenario testing
 *
 * - CommentInput component
 *   - should handle Title typing correctly
 *   - should handle Category typing correctly
 *   - should handle Body typing correctly
 *   - should call Buat function when Register button is clicked
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CommentInput from './CommentInput';

describe('CommentInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<CommentInput addComment={() => {}} threadId="thread-id" />);
    const commentContent = await screen.getByTestId('commentContent');

    // Action
    await userEvent.type(commentContent, 'comment');
    // Assert
    expect(commentContent.innerHTML).toEqual('comment');
  });

  it('should call buat function when buat button is clicked', async () => {
    // Arrange
    const mockAddComment = jest.fn();
    render(<CommentInput addComment={mockAddComment} threadId="thread-id" />);

    const commentContent = await screen.getByTestId('commentContent');
    await userEvent.type(commentContent, 'contentComment');

    const commentButton = await screen.getByRole('button', { name: 'Kirim' });
    // Action
    await userEvent.click(commentButton);
    // Assert
    expect(mockAddComment).toBeCalledWith({
      content: 'contentComment',
      threadId: 'thread-id',
    });
  });
});

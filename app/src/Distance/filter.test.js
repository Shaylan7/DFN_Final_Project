import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Filter from './filter';

test('renders learn react link', () => {
  const mockSetChecked = jest.fn();
  render(<Filter setCheckedProduct={mockSetChecked} />);

  fireEvent.click(screen.getByLabelText('Food'));
  expect(mockSetChecked).toBeCalledWith('1');
});
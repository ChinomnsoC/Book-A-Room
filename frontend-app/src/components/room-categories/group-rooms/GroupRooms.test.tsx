import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GroupRooms from './GroupRooms';

describe('GroupRooms Component', () => {
  test('it renders Group Rooms button correctly', () => {
    const onSelectCategory = jest.fn();
    render(<GroupRooms onSelectCategory={onSelectCategory} />);
    const buttonElement = screen.getByText('Group Rooms');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('category-button');
  });

  test('it calls onSelectCategory when the Group Rooms button is clicked', () => {
    const onSelectCategory = jest.fn();
    render(<GroupRooms onSelectCategory={onSelectCategory} />);
    const buttonElement = screen.getByText('Group Rooms');
    fireEvent.click(buttonElement);
    expect(onSelectCategory).toHaveBeenCalledTimes(1);
  });
});
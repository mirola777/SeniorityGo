import React from 'react';
import { render, screen } from '@testing-library/react';
//import UserCard, { UserCardProps } from '../components/admin/user/UserCard';
import { Developer } from '../models/Developer';
import { Admin } from '../models/Admin';
import { User } from '../models/User';

// Mock data
const mockUser: User = new User(1, 'testUser', 'testuser@example.com', 1234);
const mockDeveloper: Developer = new Developer(
  mockUser,
  'John',
  'Doe',
  'Software Developer',
  new Date(),
  'avatarUrl',
  '1234567890',
  true,
  5,
  [], // developer profiles (if any)
  [], // developer requirements (if any)
  [] // developer pokemons (if any)
);

const mockAdmin: Admin = new Admin(
  mockUser,
  'avatarUrl'
);

describe('UserCard', () => {
  /*
  const userCardProps: UserCardProps = {
    user: mockDeveloper,
  };

  it('renders developer card correctly', () => {
    render(<UserCard {...userCardProps} />);
    expect(screen.getByText(/John.+Software Developer/)).toBeInTheDocument();
  });

  it('renders admin card correctly', () => {
    const adminCardProps: UserCardProps = {
      user: mockAdmin,
    };
    render(<UserCard {...adminCardProps} />);
    expect(screen.getByText(mockAdmin.getUser().getUsername())).toBeInTheDocument();
  });
  */
});

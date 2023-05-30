import { render, screen } from '@testing-library/react';
import UserCard from '../components/common/UserCard';
import { Developer } from '../models/Developer';
import { Admin } from '../models/Admin';
import { User } from '../models/User';

describe('UserCard', () => {
  const user: User = new User(1, 'testUser', 'testuser@example.com', 12345);
  const developer: Developer = new Developer(
    user,
    'John',
    'Doe',
    'Software Developer',
    '2023-01-01',
    'avatarUrl',
    '1234567890',
    true,
    100,
    [],
    []
  );

  const adminUser: User = new User(2, 'adminUser', 'adminuser@example.com', 54321);
  const admin: Admin = new Admin(adminUser, 'adminAvatarUrl');

  it('renders developer card correctly', () => {
    render(<UserCard user={developer} />);
    expect(screen.getByText(new RegExp(developer.getFirstName()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(developer.getLastName()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(developer.getPhoneNumber()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(developer.getBirthday()))).toBeInTheDocument();
    expect(screen.getByAltText('Avatar')).toHaveAttribute('src', 'avatarUrl');
    expect(screen.getByText(new RegExp(`${developer.getScore()} points`))).toBeInTheDocument();
  });

  it('renders admin card correctly', () => {
    render(<UserCard user={admin} />);
    expect(screen.getByText(new RegExp(adminUser.getUsername()))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(adminUser.getEmail()))).toBeInTheDocument();
  });
});

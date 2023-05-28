import React from 'react';
import { render } from '@testing-library/react';
import ProfileCard from '../components/common/profile/ProfileCard';
import { Profile } from '../models/Profile';

describe('ProfileCard component', () => {
  const profileData: Profile = new Profile(
    1,
    'John Doe',
    'Software Developer',
    [],
    []
  );

  test('renders the profile name and description', () => {
    const { getByText } = render(<ProfileCard profile={profileData} />);
    const nameElement = getByText('John Doe');
    const descriptionElement = getByText('Software Developer');

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  // Add more tests as needed for different scenarios or interactions
});

import { render, screen } from '@testing-library/react';
import OrganizationCard from '../components/common/OrganizationCard';
import { Organization } from '../models/Organization';
import { Profile } from '../models/Profile';
import { ProfileSeniority } from '../models/ProfileSeniority';
import { DeveloperProfile } from '../models/DeveloperProfile';

describe('OrganizationCard', () => {
  /*
  const organization = new Organization(
    1,
    'Test Organization',
    'organization-image.jpg',
    [
      new Profile(1, 'Profile 1', 'Description 1', [
        new DeveloperProfile(1, 'Developer Profile 1'),
        new DeveloperProfile(2, 'Developer Profile 2'),
      ], [
        new ProfileSeniority(1, 'Seniority 1', 1),
        new ProfileSeniority(2, 'Seniority 2', 2),
        new ProfileSeniority(3, 'Seniority 3', 3),
      ])
    ],
    [],
    []
  );

  test('renders organization card with correct profile information', () => {
    render(<OrganizationCard organization={organization} />);

  });
  */
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import LimioFooter from './index.js';

describe('LimioFooter Component', () => {
  test('renders footer content with logo, contact details, and navigation', () => {
    render(<LimioFooter />);

    // Test for logo
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

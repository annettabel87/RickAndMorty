import { render, screen } from '@testing-library/react';
import { FormCard } from './FormCard';

const data = {
  id: '0',
  name: 'Anna',
  surname: 'Repeshko',
  birth: '12.09.1987',
  country: 'Russia',
  gender: 'Female',
  foto: null,
  agree: true,
};
test('FormCard render', () => {
  render(<FormCard {...data} />);
  expect(screen.getByText(/birth/i)).toBeInTheDocument();
  expect(screen.getByText(/country/i)).toBeInTheDocument();
  expect(screen.getByText(/gender/i)).toBeInTheDocument();
});

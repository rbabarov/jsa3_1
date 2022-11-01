import getHealthStatus from '../src/js/app';

test('should be critical', () => {
  const expected = 'critical';
  const received = getHealthStatus({ name: 'Маг', health: 12 });
  expect(received).toBe(expected);
});

test('should be wounded', () => {
  const expected = 'wounded';
  const received = getHealthStatus({ name: 'Маг', health: 30 });
  expect(received).toBe(expected);
});

test('should be healthy', () => {
  const expected = 'healthy';
  const received = getHealthStatus({ name: 'Маг', health: 80 });
  expect(received).toBe(expected);
});

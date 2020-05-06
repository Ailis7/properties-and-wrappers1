import sorting from '../app';

test('coincidence', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const results = sorting(obj, ['level', 'health']);
  expect(results).toStrictEqual([
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
  ]);
});

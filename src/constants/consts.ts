export const MAP_INDEX = [
  '10',
  '11',
  '12',
  '13',
  '20',
  '21',
  '22',
  '23',
  '24',
  '30',
  '31',
  '32',
  '40',
  '41',
  '42',
  '43',
];

export const NEXT_INDEX = {
  '10': ['11', '12', '13'],
  '11': '20',
  '12': '20',
  '13': '20',
  '20': ['21', '22', '23', '24'],
  '21': '30',
  '22': '30',
  '23': '30',
  '24': '30',
  '30': ['31', '32'],
  '31': '40',
  '32': '40',
  '40': ['41', '42', '43'],
  '41': '50',
  '42': '50',
  '43': '50',
};

export const BATTLE_BOOTH = {
  '10': ['11'],
  '20': [],
  '30': ['31', '32'],
  '40': ['43'],
};

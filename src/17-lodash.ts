import _ from 'lodash';

const data = [
  {
    username: 'Franco',
    role: 'admin',
  },
  {
    username: 'Luz',
    role: 'seller',
  },
  {
    username: 'Santiago',
    role: 'customer',
  },
  {
    username: 'Jorge',
    role: 'seller',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);

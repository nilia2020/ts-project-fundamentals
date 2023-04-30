import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); //0 = enero, 1=febrero

const rta = subDays(date, 20);

const str = format(rta, 'dd/MM/yyyy');

console.log(str);

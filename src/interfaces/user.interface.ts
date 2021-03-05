import {Address} from './address.interface';
import {Company} from './company.interface';

export interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

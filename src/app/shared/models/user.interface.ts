export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email?: string;
  phone?: string;
  gender?: 'F' | 'M';
  username: string;
  password?: string;
}

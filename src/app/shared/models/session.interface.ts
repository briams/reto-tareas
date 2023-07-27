import { IUser } from './user.interface';

export interface ISession extends IUser {
  token: Uint8Array;
}

import type { APIRequestContext } from '@playwright/test';

type User = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
};
export class Users {
  constructor(private readonly request: APIRequestContext) {}
  async createUser(user: User) {
    return await this.request.post('/users', { data: user });
  }
}

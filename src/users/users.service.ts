import { Injectable } from '@nestjs/common';

export type User = { id: string; provider: string; providerId: string; email: string };

@Injectable()
export class UsersService {
  private users: User[] = [];

  async findOrCreate(provider: string, providerId: string, email: string): Promise<User> {
    let user = this.users.find(u => u.provider === provider && u.providerId === providerId);
    if (!user) {
      user = { id: (this.users.length + 1).toString(), provider, providerId, email };
      this.users.push(user);
    }
    return user;
  }
}

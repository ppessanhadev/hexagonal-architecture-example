import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';
import { UserService } from '@domain/user/UserService';
import { tokens } from '@di/tokens';

@injectable()
export class UserController {
  constructor(
    @inject(tokens.UserService)
    private userService: UserService
  ) {}

  async getUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.userService.getUsers();
      res.status(200).send(response);
    } catch (e) {
      next(e);
    }
  }
}

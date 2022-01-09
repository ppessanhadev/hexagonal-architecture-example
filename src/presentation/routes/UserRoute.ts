import { IEnviroment } from '@config/types/IEnviroment';
import { tokens } from '@di/tokens';
import { UserController } from '@presentation/controllers/UserController';
import { Router } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserRoute {
  private router: Router;

  constructor(
    @inject(tokens.Enviroment)
    private enviroment: IEnviroment,

    @inject(tokens.UserController)
    private userController: UserController
  ) {
    this.router = Router();
    this.setRoutes();
  }

  private setRoutes() {
    const { baseAPI } = this.enviroment.gets;

    this.router.get(`${baseAPI}/user`, (req, res, next) => {
      return this.userController.getUsers(req, res, next);
    });
  }

  get get(): Router {
    return this.router;
  }
}

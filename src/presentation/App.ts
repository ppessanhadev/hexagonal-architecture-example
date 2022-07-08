import express from 'express';
import cors from 'cors';
import { inject, injectable } from 'tsyringe';
import { tokens } from '@di/tokens';
import { Enviroment } from '@config/Enviroment';
import { UserRoute } from '@presentation/routes/UserRoute';

@injectable()
export class App {
  private app = express();

  constructor(
    @inject(tokens.Enviroment)
    private enviroment: Enviroment,

    @inject(tokens.UserRoute)
    private userRoute: UserRoute
  ) {}

  private setupMiddlewares() {
    const middlewares = [express.json(), cors()];
    for (let middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  private setupRoutes() {
    this.app.use(this.userRoute.get);
  }

  private start() {
    const { port } = this.enviroment.gets;
    this.app.listen(port, () => console.log(`Server is running on port ${port}`));
  }

  public bootstrap() {
    this.setupMiddlewares();
    this.setupRoutes();
    this.start();
  }
}

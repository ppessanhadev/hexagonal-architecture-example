import { container as baseContainer } from 'tsyringe';
import { tokens } from '@di/tokens';

export const container = baseContainer.createChildContainer();

import { Enviroment } from '@config/Enviroment';
container.registerSingleton(tokens.Enviroment, Enviroment);

import { App } from '@presentation/App';
container.registerSingleton(tokens.App, App);

import { AxiosConfig } from '@shared/providers/http/AxiosConfig';
container.registerSingleton(tokens.HTTPProvider, AxiosConfig);

import { UserRoute } from '@presentation/routes/UserRoute';
import { UserController } from '@presentation/controllers/UserController';
import { UserService } from '@domain/user/UserService';
import { UserProvider } from '@shared/providers/user/UserProvider';
container.registerSingleton(tokens.UserRoute, UserRoute);
container.registerSingleton(tokens.UserController, UserController);
container.registerSingleton(tokens.UserService, UserService);
container.registerSingleton(tokens.UserProvider, UserProvider);

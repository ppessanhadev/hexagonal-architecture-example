import 'reflect-metadata';
import { App } from '@presentation/App';
import { container } from '@di/container';
import { tokens } from '@di/tokens';

const app = container.resolve(tokens.App) as App;

app.bootstrap();

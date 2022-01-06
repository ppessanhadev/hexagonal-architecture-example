import { TConfiguration } from '@config/types/TConfiguration';
import 'dotenv/config';

const config: TConfiguration = {
  port: Number(process.env.PORT) || 8004,
};

export { config };

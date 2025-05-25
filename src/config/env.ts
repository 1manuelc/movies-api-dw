import dotenv from 'dotenv';
import { EnvConfig } from '../@types/env';
dotenv.config();

const env: EnvConfig = process.env;

export default env;

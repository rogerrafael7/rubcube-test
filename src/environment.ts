import { config } from 'dotenv';
import { resolve } from 'path';

config();
export const environment = {
  get PORT() {
    return process.env.PORT;
  },
  get MONGO_DSN() {
    return process.env.MONGO_DSN;
  },
  get DATA_LOGS_PATH() {
    return resolve(process.env.DATA_LOGS_PATH);
  },
};

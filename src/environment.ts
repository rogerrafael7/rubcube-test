import { config } from 'dotenv';

config();
export const environment = {
  get PORT() {
    return process.env.PORT;
  },
  get MONGO_DSN() {
    return process.env.MONGO_DSN;
  },
};

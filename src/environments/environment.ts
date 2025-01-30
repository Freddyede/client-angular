import { IEnvironment } from "../app/shared/interfaces/environments/IProdEnvironment";

export const environment: IEnvironment = {
  roads: {
    customer: 'http://nest-backend:3000/admin/customer',
    dashboard: 'http://nest-backend:3000/admin',
    login: 'http://nest-backend:3000/auth/login',
  }
};

import { IDevEnvironment } from "../app/shared/interfaces/environments/IDevEnvironment";

export const environment: IDevEnvironment = {
  roads: {
    customers: 'http://localhost:3000/admin/customer',
    dashboard: 'http://localhost:3000/admin',
    login: 'http://localhost:3000/auth/login',
  }
};

/**
 * Contains user data model
 * @version 1.0.0
 * @author Patouillard Franck<patouillardfranck3@gmail.com>
 */
export class User {
  id?: number;
  avatar: string = '';
  username: string = '';
  created_at: Date|null = null;
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  roles: {roles: string[]}|null = null;
}

import { DefaultSession } from "next-auth";

declare module 'nex-auth'{
  interface Session{
    user: {
      id: string;
      name: string;
      email:string;
      emailVerified?: boolean;
      role:string;
      image?:string
      
    }&DefaultSession['user']
  }
}
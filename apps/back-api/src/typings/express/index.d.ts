declare namespace Express {
  export interface Request {
    session: {
      userId: string;
    };
    currentUser?: {
      id: number;
      email: string;
      password: string;
    };
  }
}

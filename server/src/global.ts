export { };

declare global {
  namespace Express {
    interface Request {
      userData: {
        userId: string;
        username: string;
      };
    }
  }
}
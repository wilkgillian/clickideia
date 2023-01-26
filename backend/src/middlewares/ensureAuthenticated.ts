import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../errors/AppErrors';
import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<string> {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }
  const [, token] = authHeader.split(' ');
  try {
    const { sub: userId } = verify(
      token,
      '6624b4d3fefc7c3cee76d3549bf858ad',
    ) as IPayload;
    const userRepository = new UsersRepository();
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }
    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }

  return token;
}

import { ParamsDictionary, Query, RequestHandler } from '@types/express-serve-static-core';
 
/**
 * @see https://www.npmjs.com/package/express-async-handler
 */
export const asyncHandler: <
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
  Locals extends Record<string, any> = Record<string, any>,
>(
  requestHandler: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>,
) => RequestHandler;

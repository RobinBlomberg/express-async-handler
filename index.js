/**
 * @see https://www.npmjs.com/package/express-async-handler
 */
export const asyncHandler = (requestHandler) => {
  const wrappedRequestHandler = (req, res, next) => {
    const result = requestHandler(req, res, next);
    return Promise.resolve(result).catch(next);
  };
  return wrappedRequestHandler;
};

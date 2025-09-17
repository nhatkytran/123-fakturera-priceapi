/** Catch async errors. */
export const catchAsync = fn => {
  return (request, reply, done) => {
    return fn(request, reply, done).catch(error => {
      throw new Error(error);
    });
  };
};

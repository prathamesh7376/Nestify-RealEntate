export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode; // Corrected spelling
  error.message = message; // Assign the message
  return error;
};

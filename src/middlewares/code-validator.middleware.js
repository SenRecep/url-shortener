const minLength = 1;
const codeValidatorMiddleware = (req, res, next) => {
  const code = req.params.code;
  if (code.length < minLength)
    return res.json({
      error: "Code length is not valid",
    });
  next();
};

export { codeValidatorMiddleware };

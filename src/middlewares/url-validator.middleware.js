import UrlValidatorService from "../services/url-validator.service.js";
const urlValidatorMiddleware = (req, res, next) => {
  const { url } = req.body;
  const isValid = UrlValidatorService.valid(url);
  if (!isValid)
    return res.json({
      error: "Url is not valid",
    });
  next();
};

export { urlValidatorMiddleware };

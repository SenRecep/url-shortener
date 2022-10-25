import UrlShorterService from "../services/url-shorter.service.js";
const concatenateWithBaseUrl = (req, url) => {
  return `${req.protocol}://${req.headers.host}/${url}`;
};

export const getRequest = async (req, res) => {
  const code = req.params.code;
  try {
    const url = await UrlShorterService.decode(code);
    return res.redirect(url);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export const postRequest = async (req, res) => {
  const { url, code } = req.body;
  try {
    const newCode = await UrlShorterService.encode(url, code);
    const returnUrl = concatenateWithBaseUrl(req, newCode);
    return res.status(201).json({ url: returnUrl });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

import { codeValidatorMiddleware } from "./code-validator.middleware.js";
import { urlValidatorMiddleware } from "./url-validator.middleware.js";

class MiddlewareFacade {
  constructor() {
    this.codeValidatorMiddleware = codeValidatorMiddleware;
    this.urlValidatorMiddleware = urlValidatorMiddleware;
  }
}

const instance = new MiddlewareFacade();

export default instance;

export { MiddlewareFacade };

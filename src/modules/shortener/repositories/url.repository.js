import Url from "../models/Url.schema.js";
class UrlRepository {
  create({ url, code }) {
    return Url.create({
      url,
      code,
    });
  }
  async ifExistCode(code) {
    const found = await this.getByCode(code);
    return found != null;
  }
  getByCode(code) {
    return Url.findOne({ code });
  }
  getAll() {
    return Url.find({});
  }
}

const instance = new UrlRepository();

export default instance;

export { instance };

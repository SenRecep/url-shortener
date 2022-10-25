import UrlRepository from "../repositories/url.repository.js";
import CodeGenerator from "../../../services/code-generator.service.js";
class UrlShorterService {
  async getUniqueCode() {
    let code = CodeGenerator.generate();
    while (true) {
      const isExist = await UrlRepository.ifExistCode(code);
      if (!isExist) break;
      code = CodeGenerator.generate();
    }
    return code;
  }
  async encode(url, code) {
    if (code) {
      const isExist = await UrlRepository.ifExistCode(code);
      if (isExist) throw new Error("Code already exist");
    }
    const newCode = code ?? (await this.getUniqueCode());
    await UrlRepository.create({ url, code: newCode });
    return newCode;
  }
  async decode(code) {
    const found = await UrlRepository.getByCode(code);
    if (found == null) throw new Error("Url not found");
    return found.url;
  }
}

const instance = new UrlShorterService();

export default instance;

export { UrlShorterService };

var pattern = new RegExp(
  "^((ft|htt)ps?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?" + // port
    "(\\/[-a-z\\d%@_.~+&:]*)*" + // path
    "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i"
); // fragment locator
class UrlValidatorService {
  valid(url) {
    return pattern.test(url);
  }
}
const instance = new UrlValidatorService();

export default instance;
export { UrlValidatorService };

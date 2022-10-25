class CodeGenerator {
  #alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  #length = 6;
  constructor({ length }) {
    this.#length = length;
  }
  #getRandomIntager(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  #getRandomChar() {
    const index = this.#getRandomIntager(0, this.#alphabet.length);
    return this.#alphabet[index];
  }
  generate() {
    const word = [];
    for (let i = 0; i < this.#length; i++) word.push(this.#getRandomChar());
    return word.join("");
  }
}

const instance = new CodeGenerator({ length: 6 });

export default instance;

export { CodeGenerator };

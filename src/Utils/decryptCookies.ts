import CryptoJS from "crypto-js";

export const decryptCookies = (cipherText: any) => {
  const SECRET_KEY = "test";
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Error decrypting data:", error);
    return null;
  }
};

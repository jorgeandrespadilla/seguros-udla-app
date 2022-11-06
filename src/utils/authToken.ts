import { storage } from "./storage";

const tokenKey = "authToken";

const authToken = {
    ...storage,
    get: () => storage.get(tokenKey),
    set: (token: string) => storage.set(tokenKey, token),
    remove: () => storage.remove(tokenKey),
}

export default authToken;
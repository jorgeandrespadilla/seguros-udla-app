import api from "utils/api";
import { LoginRequest } from "types/request";

export const authenticateUser = async (data: LoginRequest) => {
    let authToken = await api.post<string>("/auth/login", data);
    return authToken;
}
import http from "../http-commun";

class formService {
    create(data) {
        return http.post("/user/register",data);
    }
}
export default new formService();
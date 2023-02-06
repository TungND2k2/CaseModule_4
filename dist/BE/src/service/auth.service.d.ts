declare class AuthService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"Wrong User" | "Wrong Password" | {
        token: string;
        id_user: any;
        userName: any;
    }>;
}
declare const _default: AuthService;
export default _default;

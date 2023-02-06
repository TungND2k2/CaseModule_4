declare class UserService {
    private userRepository;
    constructor();
    editProfile: (id: any, newProfile: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;

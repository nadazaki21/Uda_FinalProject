import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.interface';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): User;
}
export {};

import { promises } from "dns";
import { DTO } from "./dto";

export interface Model{
    add(users_symbols: DTO): Promise<DTO>;
}
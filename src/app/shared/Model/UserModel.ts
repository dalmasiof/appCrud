import { BaseENtityVM } from "./BaseEntityVM"

export interface UserModel extends BaseENtityVM {

    Name: string
    Email: string
    PassWord: string
    ConfirmPassword: string
    
}

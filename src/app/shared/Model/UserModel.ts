import { BaseENtityVM } from "./BaseEntityVM"

export interface UserModel extends BaseENtityVM {

    name: string
    email: string
    passWord: string
    confirmPassword: string
    
}

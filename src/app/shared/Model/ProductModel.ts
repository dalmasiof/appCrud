import { BaseENtityVM } from "./BaseEntityVM";

export interface ProductModel extends BaseENtityVM {
    id:number
    name: string,
    value: number,
    imgPath: string,
    
}
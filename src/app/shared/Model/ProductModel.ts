import { BaseENtityVM } from "./BaseEntityVM";

export interface ProductModel extends BaseENtityVM{

    Name: string,
    Value: number,
    ImgPath: string,
    
}
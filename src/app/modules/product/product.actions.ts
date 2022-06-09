import { createAction, props } from "@ngrx/store";
import { ProductModel} from "src/app/shared/Model/ProductModel";

//action type must defined in this type: ([origin]description of action). Ex: ([Create Product Page]User as created a new product)
export const addToCart = createAction('[card ProdList] Add prod to cart',props<ProductModel>());

export const removeFromCart = createAction('[card ProdList; cart page]Remove prod from cart',props<ProductModel>())
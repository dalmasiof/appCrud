import { createSelector } from "@ngrx/store";
import { ProductModel } from "src/app/shared/Model/ProductModel";
import { ProductState } from "./reducers";

export const productSelector = createSelector((state:any)=>state,(products:any)=>products)

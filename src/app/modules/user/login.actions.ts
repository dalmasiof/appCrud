import { createAction, props } from "@ngrx/store";
import { UserToken } from "src/app/shared/Model/UserToken";

//action type must defined in this type: ([origin]description of action). Ex: ([Create Product Page]User as created a new product)
export const login = createAction('[Login Page] User Login',props<UserToken>());

export const logout = createAction('[navBar button LogOut]LogOut the user')
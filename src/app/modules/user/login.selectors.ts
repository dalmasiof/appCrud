import { createSelector } from "@ngrx/store";

export const isLogged = createSelector(state=>state,
(auth)=>!!auth
)

export const isLoggedOut = createSelector(
    isLogged,
    loggedin=>!loggedin
)
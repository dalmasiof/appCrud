import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
import { ToastrService } from "ngx-toastr";


@Injectable()


export class httpInterceptor implements HttpInterceptor {

    user: any = JSON.parse(localStorage.getItem(environment.UserLocalStorage)!)
    constructor(private route: Router, private toastr: ToastrService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        
        let actualRoute = req.url;
        let arrUrl = actualRoute.split('/')

        if (arrUrl[arrUrl.length - 1] == "Login" || (arrUrl[arrUrl.length - 2] == "User"
            && arrUrl[arrUrl.length - 1] == "Create")) {
            return next.handle(req).pipe(
                catchError(
                    err => {
                        if (err instanceof HttpErrorResponse) {
                            
                            if (err.status === 400) {
                                debugger
                                this.toastr.error("Error: "+err.error)
                            }

                            else if (err.status === 500) {

                                return throwError(err);
                            }

                        }
                        return new Observable<HttpEvent<any>>();
                    }
                )
            )
        }
        else {

            if (this.user == null) {
                this.route.navigateByUrl('User/login')
                return throwError("Login again pls");

            }

            const headers = new HttpHeaders({
                'Authorization': 'Bearer ' + this.user!.token,
                'Content-Type': 'application/json'
            });


            const newRequest = req.clone({ headers })

            return next.handle(newRequest).pipe(catchError(err => {
                
                if (err instanceof HttpErrorResponse) {
                    
                    if (err.status === 401) {
                        this.route.navigateByUrl('/Login/')
                        return throwError(err);


                    } else if (err.status === 500) {

                        return throwError(err);
                    }
                    // ......
                }
                return new Observable<HttpEvent<any>>();
            }));

        }


    }
}

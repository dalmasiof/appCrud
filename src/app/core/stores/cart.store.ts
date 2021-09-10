import { ProductModel } from '../../shared/Model/ProductModel';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from "rxjs/operators";

export interface State {
    productList: ProductModel[]
}
 
const state: State = {
    productList: []
};

export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value() {
        return this.subject.value;
    }

    public getProductList(): Observable<ProductModel[]> {
        return this.store
            .pipe(map(store => store.productList));
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }
}

import { Injectable } from '@angular/core';
import { ProductModel } from '../Model/ProductModel';
import { Store } from 'src/app/core/stores/cart.store';


@Injectable()
export class ProductsService {

  product: ProductModel[] = [{
    id: 1,
    nome: 'Teste',
    ativo: true,
    valor: 100,
    imagem: 'celular.jpg',
    onCart: false
  },
  {
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg',
    onCart: false
  },
  {
    id: 3,
    nome: 'Teste 3',
    ativo: true,
    valor: 300,
    imagem: 'laptop.jpg',
    onCart: false
  },
  {
    id: 4,
    nome: 'Teste 4',
    ativo: true,
    valor: 400,
    imagem: 'mouse.jpg',
    onCart: false
  },
  {
    id: 5,
    nome: 'Teste 5',
    ativo: true,
    valor: 500,
    imagem: 'teclado.jpg',
    onCart: false
  },
  {
    id: 6,
    nome: 'Teste 6',
    ativo: false,
    valor: 600,
    imagem: 'headset.jpg',
    onCart: false
  }];



  constructor(private store: Store) { }

  public getList(): ProductModel[] {
    return this.product;
  }

  fillStore() {
    this.store.set('productList', this.product)
  }

  public create(product: ProductModel): ProductModel {
    this.product.push(product);
    return product;
  }

}

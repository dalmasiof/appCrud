import { TestBed } from '@angular/core/testing';
import { Store } from 'src/app/core/stores/cart.store';
import { ProductModel} from 'src/app/shared/Model/ProductModel';


import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  let productMocks: ProductModel[] = [];

  let produtoMock:ProductModel;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers:[
        ProductsService,
        Store
      ],
      imports:[]
    });
    productMocks = [{
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

    produtoMock = {
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg',
      onCart: false
    }

    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a product list',()=>{
    expect(service.getList()).toEqual(productMocks);
  });

  it('should create a product and interate list',()=>{
    let  RowsBeforeInsert = service.getList().length;

    expect(service.create(produtoMock)).toEqual(produtoMock);
    
    productMocks.push(produtoMock);
    RowsBeforeInsert++;
    
    expect(service.getList().length).toEqual(RowsBeforeInsert)

  });




});

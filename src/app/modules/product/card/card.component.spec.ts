import { registerLocaleData } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from 'src/app/core/stores/cart.store';
import { ProductModel } from 'src/app/shared/Model/ProductModel';

import { CardComponent } from './card.component';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let mockProduct: ProductModel = {
    ativo: true,
    id: 1,
    imagem: 'teste.png',
    nome: 'testeNome',
    onCart: false,
    valor: 100
  }

  let productMocks: ProductModel[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [Store]
    })
      .compileComponents();

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
    }
    ];
  }
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call to add cart', () => {
    let idParam = 1;

    expect(component.addToCart(idParam)).toBeTruthy()

    productMocks.forEach((p) => {
      if (p.id == idParam) {
        p.onCart = true;
      }
    })

    expect(productMocks[idParam].onCart = true)


  })

  it('should call to remove cart', () => {
    let idParam = 1;
    

    expect(component.removeFromCart(idParam)).toBeTruthy()

    productMocks.forEach((prod) => {
      if (prod.id == idParam) {
        prod.onCart = false;
      }
    })

    expect(productMocks[idParam].onCart = false)
  })
});

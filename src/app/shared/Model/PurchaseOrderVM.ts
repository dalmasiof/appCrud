import { ProductModel } from './ProductModel';
import { BaseENtityVM } from './BaseEntityVM';

export interface PurchaseModelVM extends BaseENtityVM {
  idUserata: number;
  discount: number;
  total: number;
  totalToPay: number;
  statusDelivery: string;
  statusPO: string;
  products: ProductModel[];
}
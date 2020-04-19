import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from './../../models/product.model';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from './../handle-error/index.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected productcollection: string;
  protected collection: any;
  constructor(
    private firestore: AngularFirestore,
    private handle: HandleErrorService
  ) {
    console.log('product serivce');
    this.productcollection = 'products';
    this.collection = this.firestore.collection(this.productcollection);
  }

  getProductList() {
    return this.collection.snapshotChanges().pipe(
      catchError(this.handle.handleError<any>('get Products'))
    );
  }

  getProductById(id: string) {
    return this.collection.doc(id).snapshotChanges();
  }

  createProduct(data: IProduct) {
    return this.collection.add(data);
  }

  editProductById(data: IProduct) {
    return this.collection.doc(data.id).set(data);
  }

  deleteProductById(id: string) {
    return this.collection.doc(id).delete();
  }
}

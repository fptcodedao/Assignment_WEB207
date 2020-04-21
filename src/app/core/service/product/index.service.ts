import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProduct } from '../../../models/product.model';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from '../../handle-error/index.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected production: string;
  protected collection: any;
  constructor(
    private firestore: AngularFirestore,
    private handle: HandleErrorService
  ) {
    console.log('product serivce');
    this.production = 'products';
    this.collection = this.firestore.collection(this.production);
  }

  getProductList(): Observable<Array<any>> {
    return this.collection.snapshotChanges().pipe(
      catchError(this.handle.handleError<any>('get Products'))
    );
  }

  getProductById(id: string): Observable<IProduct> {
    return this.collection.doc(id).snapshotChanges();
  }

  createProduct(data: IProduct): Promise<any> {
    return this.collection.add(data);
  }

  editProductById(data: IProduct): Promise<any> {
    const product = {
      ...data
    };
    delete product.id;
    return this.collection.doc(data.id).set(product, { merge: true });
  }

  deleteProductById(id: string): Promise<any> {
    return this.collection.doc(id).delete();
  }
}

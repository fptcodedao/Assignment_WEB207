import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HandleErrorService } from '../../handle-error/index.service';
import { catchError } from 'rxjs/operators';
import { ICategories } from './../../../models/categories.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  collection: any;
  constructor(
    private firestore: AngularFirestore,
    private handle: HandleErrorService
  ) {
    this.collection = this.firestore.collection('categories');
  }

  getCategoriesList(): Observable<Array<any>> {
    return this.collection.snapshotChanges().pipe(
      catchError(this.handle.handleError<any>('get Categoriess'))
    );
  }


  getCategoriesById(id: string) {
    return this.collection.doc(id).snapshotChanges();
  }

  createCategories(data: ICategories): Promise<any> {
    return this.collection.add(data);
  }

  editCategoriesById(data: ICategories) {
    return this.collection.doc(data.id).set(data, {merge: true});
  }

  deleteCategoriesById(id: string): Promise<any> {
    return this.collection.doc(id).delete();
  }
}

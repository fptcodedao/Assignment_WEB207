import { Injectable } from '@angular/core';
import {PostModel} from '../../../models/post.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection;
  constructor(
    private afStore: AngularFirestore
  ) {
    this.postCollection = this.afStore.collection('posts');
  }

  getListPosts(): Observable<Array<any>>{
    return this.postCollection.snapshotChanges();
  }

  getPostById(id: string): Observable<any> {
    return this.postCollection.doc(id).snapshotChanges();
  }

  createPost(data: PostModel): Promise<any> {
    return this.postCollection.add(data);
  }

  deletePostById(id: string): Promise<any> | null {
    if (!id) { return; }
    return this.postCollection.doc(id).delete();
  }

  editPostById(data: PostModel): Promise<any>{
    const product = {
      ...data
    };
    delete product.id;
    return this.postCollection.doc(data.id).set(product, {merge: true});
  }
}

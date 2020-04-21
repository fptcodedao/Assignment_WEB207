import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BannerModel} from '../../../models/banner.model';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  bannerCollection: any;
  constructor(
    private firestore: AngularFirestore
  ) {
    this.bannerCollection = this.firestore.collection('banner');
  }

  getListBanner(): Observable<any>{
    return this.bannerCollection.snapshotChanges();
  }

  getBannerById(id): Observable<any> | null{
    if (!id) {return null; }
    return this.bannerCollection.doc(id).snapshotChanges();
  }

  createBanner(data: BannerModel): Promise<any>{
    return this.bannerCollection.add(data);
  }

  deleteBannerById(id: string): Promise<any> {
    return this.bannerCollection.doc(id).delete();
  }

  editBannerById(dataId: string, data: BannerModel): Promise<any>{
    return this.bannerCollection.doc(dataId).set(data, {merge: true});
  }
}

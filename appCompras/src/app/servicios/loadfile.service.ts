import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,
         AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Archivo } from '../uploads/file.modal';

@Injectable()
export class LoadfileService {

  private basePath: string = '/uploads';
  uploads: AngularFireList<Archivo[]>;

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  pushUpload(upload: Archivo) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }

  private saveFileData(upload: Archivo) {
    this.angularFireDatabase.list(`${this.basePath}/`).push(upload);
  }

  getUploads() {
    this.uploads = this.angularFireDatabase.list(this.basePath);
    return this.uploads;
  }

  deleteUpload(upload: Archivo) {
    this.deleteFileData(upload.$key)
           .then(() => {
             this.deleteFileStorage(upload.name)
           })
           .catch(error => console.log(error))
  }

  private deleteFileData(key: string){
    return this.angularFireDatabase.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name: string){
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }

}

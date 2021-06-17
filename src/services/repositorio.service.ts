import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  // constructor(private sqlLite: SQLite) { }

  // public getDB() {
  //   return this.sqlLite.create({
  //     name: 'anuncios-publicos.db',
  //     location: 'default'
  //   });
  // }

  // public createDatabase() {
  //   return this.getDB()
  //     .then((db: SQLiteObject) => {
  //       this.createTables(db);
  //     })
  // }
  private db: SQLiteObject

  constructor(
    public platform: Platform,
    public sqlite: SQLite) {
  }


  private createTables(db: SQLiteObject) {
    return db.sqlBatch(['CREATE TABLE IF NOT EXISTS anuncios (' +
      + ' id       INT    PRIMARY KEY,'
      + 'title    STRING,' +
      + 'article STRING,' +
      + 'autor    STRING );'
    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('### Erro ao criar tabelas',e));
  }


  
    createDatabase(): Promise<SQLiteObject> {
    return this.platform.ready()
      .then((readySource: string) => {
        return this.sqlite.create({ 
          name: 'anuncios-publicos.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.db = db;
          this.createTables(this.db);
          return this.db;
        }).catch((error: Error) => {
          console.log('Error on open or create database: ', error);
          return Promise.reject(error.message || error);
        });  
      });  
  }

  getDB(newOpen?:boolean): Promise<SQLiteObject>{
    if (newOpen) return this.createDatabase();
    return (this.db) ? Promise.resolve(this.db) : this.createDatabase();
  }  

}

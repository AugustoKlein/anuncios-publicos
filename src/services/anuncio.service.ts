import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Observable, of } from 'rxjs';
import { Anuncio, User } from '../models/anuncio.model';
import { ANUNCIOS,USERS } from './anuncio.mock';
import { RepositorioService } from './repositorio.service';

@Injectable()
export class AnuncioService {
    
    users: User[];
    meusAnuncios:Anuncio[];
    anuncios: Anuncio[];
    user: User;


    constructor(private repo: RepositorioService) {
        this.anuncios = ANUNCIOS;
        this.users = USERS;
        this.user = new User();
    }

    getAnuncios(): Anuncio[] {
        // this.anuncios = ANUNCIOS;
        // this.getAllAnuncios();
        return this.anuncios;
    }

    getMeusAnuncios(): Anuncio[] {
        return this.meusAnuncios;
    }

    save(anuncio: Anuncio) {
        if (anuncio.id) {
            console.log(anuncio);
            // this.insertAnuncio(anuncio);

            this.anuncios.push(anuncio);
            this.meusAnuncios.push(anuncio);
        }
    }

    setUser(usuario: User): boolean {

        var hasUser = this.containsObject(usuario);
        
        if (!hasUser) {
            return false;
        }else{
            this.user = usuario;
            this.meusAnuncios = this.anuncios.filter((a) => {
                return this.user.user === a.autor;
            });
            return true;
        }
        
    }
  
    containsObject(usuario: User) {
        var i;
        for (i = 0; i < this.users.length; i++) {
            if (this.users[i].user === usuario.user && this.users[i].senha === usuario.senha) {
                return true;
            }
        }
    
        return false;
    }

    private getAllAnuncios() {
        return this.repo.getDB().then((db: SQLiteObject) => {
            const sql = "SELECT * FROM anuncios";
            return db.executeSql(sql).then(data => {
                let anu: Anuncio;
                for (let i = 0; i < data.rows.length; i++) {
                    const row = data.rows.item(i);

                    anu = new Anuncio();
                    anu.id = row.id;
                    anu.title = row.title;
                    anu.article = row.article;
                    anu.autor = row.autor;

                    this.anuncios.push(anu);
                }
            })
        });
    }

    private insertAnuncio(anuncio: Anuncio) {
        this.repo.getDB().then((db: SQLiteObject) => {
            const query = "insert into anuncios (id,title,article,autor) values(?,?,?,?)";
            let reg = [];

            reg.push([query, [anuncio.id, anuncio.title, anuncio.article, anuncio.autor]]);

            db.sqlBatch(reg).then(() => {
                console.log('Anuncio Inserido')
            })
                .catch(e => {
                    console.error('Erro ao gravar anuncio')
                });
        });
    }
}

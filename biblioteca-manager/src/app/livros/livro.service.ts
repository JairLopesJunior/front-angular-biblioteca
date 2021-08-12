import { Livro } from './Livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LivroService{

    private livroUrl: string = 'http://localhost:3100/api/livros';

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Livro[]>{
        return this.httpClient.get<Livro[]>(this.livroUrl);
    }
}

var LIVROS: Livro[] = [
    {
        id: 1,
        nome: 'Jair',
        autor: 'Jair',
        ano: '10/10/2001',
        genero: 'sla',
        editora: 'sla',
        pagina: 154,
        status: 'DISPONIVEL',
        imagem: '/assets/images/livro.png',
    },
    {
        id: 2,
        nome: 'Jair',
        autor: 'James Gosling',
        ano: '01/05/1997',
        genero: 'sla',
        editora: 'sla',
        pagina: 548,
        status: 'DISPONIVEL',
        imagem: '/assets/images/livro.png',
    },
    {
        id: 3,
        nome: 'Jair',
        autor: 'Livia',
        ano: '05/07/1968',
        genero: 'sla',
        editora: 'sla',
        pagina: 245,
        status: 'DISPONIVEL',
        imagem: '/assets/images/livro.png',
    }
];
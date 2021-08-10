import { Livro } from './Livro';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LivroService{

    retrieveAll(): Livro[]{
        return LIVROS;
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
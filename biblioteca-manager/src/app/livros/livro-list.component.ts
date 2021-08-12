import { Component, OnInit } from '@angular/core';
import { Livro } from './Livro';
import { LivroService } from './livro.service';

@Component({
    templateUrl: './livro-list.component.html',
})
export class LivroListComponent implements OnInit{

    filteredLivros: Livro[] = [];

    imagem: string = '/assets/images/duke.png';

    _livros: Livro[] = [];

    constructor(private livroService: LivroService){}

    ngOnInit(): void{
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.livroService.retrieveAll().subscribe({
            next: livros => {
                this._livros = livros;
                
            },
            error: err => console.log('Error', err)
        })
    }

}
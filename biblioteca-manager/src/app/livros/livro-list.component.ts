import { Component, OnInit } from '@angular/core';
import { Livro } from './Livro';
import { LivroService } from './livro.service';

@Component({
    templateUrl: './livro-list.component.html',
})
export class LivroListComponent implements OnInit{

    imagem: string = '/assets/images/duke.png';

    _livros: Livro[] = [];

    constructor(private livroService: LivroService){}

    ngOnInit(): void{
        this._livros = this.livroService.retrieveAll();
    }

}
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[];

  //unico elemento
  @ViewChild(ProdutoCountComponent, { static: false }) contador: ProdutoCountComponent;
  @ViewChild('view', { static: false }) mensagemTela: ElementRef;

  //coleção
  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor(private produtoService: ProdutoService) { }
  
  ngOnInit(): void {
    this.produtos = this.produtoService.obterTodos();
  }

  ngAfterViewInit(): void {
    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto!');
      return;
    });

    console.log('Objeto do Contador: ', this.contador.produtos);

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.status);
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}

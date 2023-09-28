import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade: number = 0;

  constructor() { }

  /**
   * OnDestroy - executa quando o componente é destruído
   */
  ngOnDestroy(): void {
    console.log("component died");
  }

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }
  
  /**
   * Ordem de execução
   * 
   * checked -> content -> view
   * verifica a alteração -> checa o conteúdo -> checa a view após a construção
   */

  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit');
  }

  ngOnInit(): void {
  }

}
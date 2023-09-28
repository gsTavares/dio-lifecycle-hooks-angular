import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() name: string = '';

  constructor() {
    console.log(`construtor ${this.name}`);
  }

  /**
   * OnChange - executa sempre que uma propriedade é modificada via @Input()
   */
  ngOnChanges(): void {
    console.log(`onChange ${this.name}`);
  }

  /**
   * OnInit - dispara quando o componente nasce
   */
  ngOnInit(): void {
    console.log(`onInit ${this.name}`);
  }

}

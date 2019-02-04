import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('tabChosen') tab = new EventEmitter<string>();

  onSelect(tabName: string){
    this.tab.emit(tabName);
  }
  constructor() { }

  ngOnInit() {
  }

}

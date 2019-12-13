import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
@Input() show: boolean;
  constructor() {
console.log(this.show)
  }

  ngOnInit() {
  }

}

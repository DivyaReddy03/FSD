import { Component, OnInit } from '@angular/core';
import { CalService } from "../cal.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service : CalService) { }
  data;

  ngOnInit() {
    this.data = this.service.getData(4,11)
  }
}
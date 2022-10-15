import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor() { }

  name="Saranya"

  readValues=()=>{
    this.name="Raju"
  }

  ngOnInit(): void {
  }

}

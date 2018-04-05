import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookContainerService} from "../book-container.service";

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  id: string = '';
  bookobj : Object = {}
  constructor(private  router: Router , private route: ActivatedRoute , private container:BookContainerService) {

    this.route.params.subscribe(param=>{
      if(param['bookId']){
        this.id = param['bookId'];
             console.log(this.container.searchBook(this.id))
      }
    });

  }







  ngOnInit() {
  }

}

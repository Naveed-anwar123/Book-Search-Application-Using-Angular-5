import {Component, Injectable, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {BookSearchService} from "../book-search.service";
import  { Router , ActivatedRoute } from "@angular/router";
import {BookContainerService} from "../book-container.service";



class Book {
  title: string
  link: string
  description: string
  id: string


  constructor(title: string, link: string, description: string,id: string) {
    this.title = title
    this.link = link
    this.description = description
    this.id = id
  }

}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  private factory: Book = [];
  private term: string = ''
  private results = [];
  private loading:boolean = false;
  public page: number
  public totalItems: number
  public pageSize : number



  constructor(private book: BookSearchService , private  router: Router , private route: ActivatedRoute , private container:BookContainerService) {

      this.route.params.subscribe(param=>{
          if(param['term']){
            this.term = param['term']
            this.onSearch(param['term'])
          }
      });


  }

  onSearch(term: string){
    this.factory = []
    this.loading = true;
    this.book.getBooks(term).then(data => {
      data.json().items.forEach(d=>{
        this.factory.push(new Book(d.volumeInfo.title,d.volumeInfo.imageLinks.smallThumbnail,d.volumeInfo.description,d.id))
        this.loading = false;

      })
      this.container.setData(this.factory);
    });
  }


  doSearch(){
       this.router.navigate(['search',{term: this.term}]);
  }


  // get startIndex(){
  //     return this.page * this.pageSize;
  // }
  // get totalPages(){
  //   try {
  //     return Math.ceil(this.totalItems / this.pageSize)
  //   }
  //   catch (error){
  //     console.log(error)
  //   }
  // }
  // get page(){
  //   return this.page
  // }
  //
  //   set page(){
  //     this.page = 1
  //   }
  //   set totalItems() {
  //     this.totalItems = 0;
  //   }
  //   set pageSize() {
  //     this.pageSize = 10
  //   }










}



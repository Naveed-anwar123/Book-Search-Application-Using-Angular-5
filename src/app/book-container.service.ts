import { Injectable } from '@angular/core';

@Injectable()
export class BookContainerService {


  data: Object;
  constructor() { }

  setData(data){
          this.data = data;
  }


  searchBook(id: string){
    if(this.data){
      this.data.forEach(function (value) {
        if(id == value['id'] ){
          //console.log(value);
          return value;
        }
      });
    }

  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navBarState = false;

  navScroll(num) {
    var id = ""
    if(num == 1){
      id="body-cont"
    }else if(num == 2){
      id="products-cont"
    }else if(num == 3){
      id = "podcast-cont"
    }else{
      id = "contact-cont"
    }
    console.log("going to scroll to elm id - " + id)
   
    let elms = document.getElementsByClassName(id)
    let curElm = elms[0]
    let curElmRect = curElm.getBoundingClientRect()
    //window.scrollTo(0,curElmRect.top)
   
    elms[0].scrollIntoView({behavior:"smooth"})
  }

  log(){
    console.log("hello")
  }


  toggleNavBar(){

    let newHeight = this.navBarState ? "100px;" : "200px;"
    let elms = document.getElementsByClassName("header-cont")
    let headerCont = elms[0]
    headerCont.setAttribute("style","height:"+newHeight)
    this.navBarState = !this.navBarState
  }

}

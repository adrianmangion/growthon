import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: ['./app-side-nav.component.css']
})
export class AppSideNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuState(){
    // Grab required elements.
    let sideNav = document.querySelector('.sidenav') as HTMLElement;
    let navButtons: Element[] = Array.from(document.getElementsByClassName('nav-item-text'));
    let logoButton = document.querySelector('.logo-mini') as HTMLElement;

    navButtons.forEach((navButton:Element) => {
      navButton.classList.toggle("show-nav-item-text");
    })

    logoButton.style.alignContent = "flex-end";
    logoButton.style.flexDirection = "column";
    logoButton.style.flexWrap = "wrap";
    logoButton.style.marginRight = "1em";
    
    // Adjust width.
    if(sideNav.classList.contains("expanded")){
      sideNav.style.width = "80px";
      sideNav.classList.remove("expanded");
    }
    else{
      sideNav.style.width = "320px";
      sideNav.classList.add("expanded");
    }
    
  }

}

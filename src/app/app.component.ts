import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Hello, world!';

  textCarousel() {
    console.log("carousel func called");
    var text = ["Welcome to my online portfolio", "This website is currently under construction", "Hello, world!"];
    var count = 0;
   
    setInterval(() => {
      this.title = text[count];
      count++;
      if (count >= text.length) {
        count = 0;
      };
    }, 5000);


  }

  ngOnInit() {
    this.textCarousel();
  }


}

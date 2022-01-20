import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    /*

    Per Settare Manualmente la Data
   this.dataDiOggi.setUTCFullYear(2022);
   this.dataDiOggi.setUTCMonth(0); GENNAIO
   this.dataDiOggi.setUTCDate(20);
   
   */
   
   
   console.log(this.dataDiOggi);
  }
  title = 'angularPipes';

  dataDiOggi= new Date();
  
  

  
}

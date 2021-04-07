import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'httpmodule';

  //http get
  passdataArray: any[] = [];
  constructor(private http: HttpClient) {
    http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(result => {
      this.passdataArray = result;

      console.log(JSON.stringify(this.passdataArray));
    });
  }


}

import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Loading...';
  public data: any;

  constructor(private http: HttpClient) {
    this.getConfig().subscribe({
      next: response => {
        if (response) {
          this.title = `${response.title} app is running!`;
          this.data = response;
        }
      },
      error: (error) => {
        this.title = `ERROR: ${error.message}. STATUS: ${error.status}`;
        this.data = error;
      }});
  }

  getConfig() {
    return this.http.get<any>('http://localhost:9080/api');
  }
}

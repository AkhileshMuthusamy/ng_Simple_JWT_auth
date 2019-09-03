import { Component, OnInit } from '@angular/core';
import { detect } from 'detect-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const browser = detect();
    // handle the case where we don't detect the browser
    if (browser) {
      console.log(browser.name);
      console.log(browser.version);
      console.log(browser.os);
    }

    this.http.get('http://localhost:3000/api/posts').subscribe(data => {
      console.dir(data);
    });
  }
}

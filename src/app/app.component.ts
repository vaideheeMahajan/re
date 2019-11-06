import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;
constructor(private router: Router) {
        this.routeLinks = [
            {
                label: 'Home',
                link: './home',
                index: 0
            }, {
                label: 'Billing',
                link: './billing',
                index: 1
            }, {
                label: 'Customer Profile',
                link: './customerProfile',
                index: 2
            }
        ];
    }
ngOnInit(): void {
        this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
        });
    }
}


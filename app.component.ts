import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/general', icon: 'newspaper' },
    { title: 'Business', url: '/business', icon: 'business' },
    { title: 'Sport', url: '/sport', icon: 'basketball' },
    { title: 'Entertinment', url: '/entertinment', icon: 'videocam' },
    { title: 'Technology', url: '/technolog', icon: 'laptop' },
    { title: 'Health', url: '/health', icon: 'medkit' },
    { title: 'Science', url: '/science', icon: 'rocket' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

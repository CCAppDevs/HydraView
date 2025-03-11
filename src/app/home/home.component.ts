import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../event.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  events$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor(private events: EventService) {
    this.events$ = this.events.events$;
  }

  ngOnInit(): void {
    this.events.getAllEvents();
  }
}

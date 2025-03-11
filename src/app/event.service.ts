import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum EventType {
  None = 0,
  ApiCall = 1,
  ApiCallError = 2,
  LogFileMessage = 3
}

export interface Event {
  eventId: number;
  description: string;
  type: EventType;
  categoryId: number;
  timestamp: Date;
  hostAddress: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  constructor(private http: HttpClient) { }

  getAllEvents(): void {
    this.http.get<Event[]>('/api/events').subscribe(events => {
      this.events$.next(events);
    });
  }

}

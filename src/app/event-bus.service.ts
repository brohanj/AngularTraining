import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  constructor() { }
  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data: any) {
    console.log('emit');
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    console.log('observe');
    return this._messages$.pipe(
      filter(args => args.type === eventType),
      map(args => args.data)
    );
  }
}

export interface EventBusArgs {
  type: string;
  data: any;
}

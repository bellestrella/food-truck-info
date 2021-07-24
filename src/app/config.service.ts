import { Injectable } from '@angular/core';
// Inject HttpClient service as a dependency of an application class
import { HttpClient } from '@angular/common/http';
// The HttpClient service makes use of observables for all transactions, so
// you must import the RxJS observable and operator symbols.
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // a private HttpClient was added to the below constructor.
  constructor(private http: HttpClient) { }
}

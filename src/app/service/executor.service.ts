import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ExecutorService {

  constructor(private http: HttpClient) { }

  executeUmzugsmeldung(umzugsmeldungId: number): Observable<any[]> {
    return this.http.get<any[]>('localhost:10024//executeumzugsmeldung/' + umzugsmeldungId);
  }
}

import { Injectable } from '@angular/core';
import { Music } from '../models/music';
import { Session } from '../models/session';
import { KaraokeSession } from '../models/karaokeSession'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class MusicService{
    musicUrl : string = 'api/MyMusic.json'
    genreUrl : string = 'api/MyGenres.json'
    sessionUrl : string  = 'api/MySession.json'
    karaokeSessionUrl : string = 'api/MyKaraokeSession.json'

    constructor(private http: HttpClient){}

    getAllMusic(): Observable<Music[]>{
        return this.http.get<Music[]>(this.musicUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getAllGenres(): Observable<string[]>{
        return this.http.get<string[]>(this.genreUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getCurrentSession(): Observable<Session>{
        return this.http.get<Session>(this.sessionUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getMyKaraokeSession(): Observable<KaraokeSession>{
        return this.http.get<KaraokeSession>(this.karaokeSessionUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';

        if(err.error instanceof ErrorEvent){
            //client side erro
            errorMessage = `An error occurred:  ${err.error.message}`;
        }else{
            //backend error
            errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);

    }
}
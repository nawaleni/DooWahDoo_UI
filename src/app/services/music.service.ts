import { Injectable } from '@angular/core';
import { Music } from '../models/music';
import { Session } from '../models/session';
import { KaraokeSession } from '../models/karaokeSession'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { configFromSession } from '@ionic/core';
import { UserInfo } from '../models/UserInfo'

@Injectable({
    providedIn: 'root'
})

export class MusicService {
    musicUrl: string = 'https://webapp-191120202122.azurewebsites.net/api/getAllMusic';
    genreUrl: string = 'https://webapp-191120202122.azurewebsites.net/api/getAllGenre';
    sessionUrl: string  = 'api/MySession.json';
    artistByLetterUrl: string;
    musicbyLetterUrl: string;
    musicByGenreUrl: string;
    musicByArtistUrl: string;
    userInfoUrl: string;
    karaokeSessionUrl: string = 'api/MyKaraokeSession.json';


    private musicCatalog: Music[];
    private genreList: string[];





    constructor(private http: HttpClient) {}

    getAllMusic(): Observable<Music[]> {
        if(this.musicCatalog) {
            return of(this.musicCatalog);
        }
        return this.http.get<Music[]>(this.musicUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            tap(data => this.musicCatalog = data),
            catchError(this.handleError)
        )
    }

    getAllGenres(): Observable<string[]> {
        if(this.genreList) {
            return of(this.genreList);
        }
        return this.http.get<string[]>(this.genreUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            tap(data => this.genreList = data),
            catchError(this.handleError)
        )
    }

    getAllMusicByGenre(genre: string): Observable<Music[]> {
        this.musicByGenreUrl = 'https://webapp-191120202122.azurewebsites.net/api/getAllMusic/byGenre?Genre=';
        console.log(genre);
        this.musicByGenreUrl = this.musicByGenreUrl.concat('"', genre, '"');

        return this.http.get<Music[]>(this.musicByGenreUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getCurrentSession(): Observable<Session> {
        return this.http.get<Session>(this.sessionUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getMyKaraokeSession(): Observable<KaraokeSession> {
        return this.http.get<KaraokeSession>(this.karaokeSessionUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getAllArtistbyLetter(char: string): Observable<string[]> {
        this.artistByLetterUrl = 'https://webapp-191120202122.azurewebsites.net/api/getAllMusic/byArtistLetter?Artist='
        this.artistByLetterUrl = this.artistByLetterUrl.concat('"', char, '"');

        return this.http.get<string[]>(this.artistByLetterUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getAllMusicByLetter(char: string): Observable<Music[]> {
        this.musicbyLetterUrl = 'https://webapp-191120202122.azurewebsites.net/api/getAllMusic/byTitleLetter?Title=';
        this.musicbyLetterUrl = this.musicbyLetterUrl.concat('"', char, '"');

        return this.http.get<Music[]>(this.musicbyLetterUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    getAllMusicByArtist(artist: string): Observable<Music[]> {
        this.musicByArtistUrl = 'https://webapp-191120202122.azurewebsites.net/api/getAllMusic/byArtistName?Artist='
        this.musicByArtistUrl = this.musicByArtistUrl.concat('"', artist, '"');

        return this.http.get<Music[]>(this.musicByArtistUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getUserInfo(userId: number): Observable<UserInfo> {
        this.userInfoUrl = 'https://webapp-191120202122.azurewebsites.net/api/getUserInfo/userid/';
        this.userInfoUrl = this.userInfoUrl.concat(userId.toString());

        return this.http.get<UserInfo>(this.userInfoUrl).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }


    public setUserToQueue(user: number, music: number, gig: number) {

        this.http.post('https://webapp-191120202122.azurewebsites.net/Karaoke/createSession', {
            userId: user, musicId: music, gigId: gig
        },
        {
            responseType : 'json'
        }
        )
        .subscribe(
            data => console.log('setUserToQueueResponse ' + data),
            error => console.log('Error setUserToQueue: ' + error)
        );
    }

    public getUserQueue() {

        return this.http.get<any[]>('https://webapp-191120202122.azurewebsites.net/Karaoke/gig/1/getUserQueue').pipe(
            tap(data => console.log('JSON Data: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    public getTimeRemaining(): Observable<any> {

        return this.http.get<any>('https://webapp-191120202122.azurewebsites.net/Karaoke/gig/1/3/getTimer');

    }

    

    public getCurrentUserQueue() {

        return this.http.get<any[]>('https://webapp-191120202122.azurewebsites.net/Karaoke/gig/1/getCurrentUserQueue').pipe(
            tap(data => console.log('JSON Data: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }


    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            //client side erro
            errorMessage = `An error occurred:  ${err.error.message}`;
        } else {
            //backend error
            errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);

    }
}

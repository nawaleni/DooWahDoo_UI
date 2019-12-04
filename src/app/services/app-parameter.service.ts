import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Music } from '../models/music';

@Injectable()
export class AppParameterService{
    user: User;
    artists: string[];
    selectedArtist: string;
    letter: string;
    myMusic: Music;
    myMusicList: Music[];
    musicCatlog: Music[];
    clickedFrom: string;

    constructor(){}
}
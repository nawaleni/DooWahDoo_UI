import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { AppParameterService } from 'src/app/services/app-parameter.service';
import { Music } from 'src/app/models/music';
import { UserTransition } from 'src/app/services/user-transition';

@Component({
    selector: "app-alphabets",
    templateUrl: "./search-alphabets.component.html",
    styleUrls: ["./search-alphabets.component.scss"]
})
export class SearchByAlphabetsComponent {

    constructor(private navCtrl: NavController, private musicService: MusicService,
        private appParameterService: AppParameterService,
        private userTransition: UserTransition) { }

    errorMessage: string;
    artists: string[];
    musicList: Music[];

/*
    @Output() A = new EventEmitter();
    @Output() B = new EventEmitter();
    @Output() C = new EventEmitter();
    */


    SearchByTitle(char: string): void {
        if (this.appParameterService.clickedFrom == 'artist') {

            this.musicService.getAllArtistbyLetter(char).subscribe({
                next: list => this.artists = list,
                error: err => this.errorMessage = err,
                complete: () => this.appParameterService.artists = this.artists
            })
            setTimeout(() => {
                console.log(char);
                this.appParameterService.letter = char;
                this.userTransition.setTransition();
                this.navCtrl.navigateRoot('/search-result-artist');
            }
            );
        }
        else if (this.appParameterService.clickedFrom == 'title') {
            console.log('clicked from Title Page');
            this.musicService.getAllMusicByLetter(char).subscribe({
                next: list => this.musicList = list,
                error: err => this.errorMessage = err,
                complete: () => this.appParameterService.myMusicList = this.musicList
            })
            setTimeout(() => {
                console.log(char);
                this.appParameterService.letter = char;
                this.userTransition.setTransition();
                this.navCtrl.navigateRoot('/search-result');
            }
            );
        }

    }



    SearchByTitleA() {
        this.SearchByTitle('A');
    }

    SearchByTitleB() {
        this.SearchByTitle('B');
    }

    SearchByTitleC() {
        this.SearchByTitle('C');
    }

    SearchByTitleD() {
        this.SearchByTitle('D');
    }

    SearchByTitleE() {
        this.SearchByTitle('E');
    }

    SearchByTitleF() {
        this.SearchByTitle('F');
    }

    SearchByTitleG() {
        this.SearchByTitle('G');
    }

    SearchByTitleH() {
        this.SearchByTitle('H');
    }

    SearchByTitleI() {
        this.SearchByTitle('I');
    }

    SearchByTitleJ() {
        this.SearchByTitle('J');
    }

    SearchByTitleK() {
        this.SearchByTitle('K');
    }

    SearchByTitleL() {
        this.SearchByTitle('L');
    }

    SearchByTitleM() {
        this.SearchByTitle('M');
    }

    SearchByTitleN() {
        this.SearchByTitle('N');
    }

    SearchByTitleO() {
        this.SearchByTitle('O');
    }

    SearchByTitleP() {
        this.SearchByTitle('P');
    }

    SearchByTitleQ() {
        this.SearchByTitle('Q');
    }

    SearchByTitleR() {
        this.SearchByTitle('R');
    }

    SearchByTitleS() {
        this.SearchByTitle('S');
    }

    SearchByTitleT() {
        this.SearchByTitle('T');
    }

    SearchByTitleU() {
        this.SearchByTitle('U');
    }

    SearchByTitleV() {
        this.SearchByTitle('V');
    }

    SearchByTitleW() {
        this.SearchByTitle('W');
    }

    SearchByTitleX() {
        this.SearchByTitle('X');
    }

    SearchByTitleY() {
        this.SearchByTitle('Y');
    }

    SearchByTitleZ() {
        this.SearchByTitle('Z');
    }

    SearchByTitleHash() {
        this.SearchByTitle('');
    }

}
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  article = '';
  maintext = '';
  notes: Note[]=[];
  idnumber = 1;

  pushtext() {
  
    let note: Note = { id: this.idnumber++, name: this.article, maintext: this.maintext, date: new Date() }
    this.notes.push(note);
    console.log(this.notes);
  }
  delete(index:number) {
    this.notes.splice(index,1);
  }
}

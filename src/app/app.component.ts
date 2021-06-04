import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from './interface';
import { NoteCardComponent } from './note-card/note-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'project11';
  // article = '';
  // maintext = '';
  notes: Note[]=[];
  // idnumber = 1;
  
  
  onAddNote(e: Note) {
    this.notes.push(e);
    // console.log(this.notes);
    console.log(e);
  }
  onDeleteNote(index:number) {
    this.notes.splice(index,1);
  }
  onEditNote(){
    console.log(this.notes)    
  }
}

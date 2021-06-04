import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { timeStamp } from 'console';
import { Note } from '../interface';
import { NoteCardComponent } from '../note-card/note-card.component';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
@Output() noteAdd = new EventEmitter<Note>();

article: string = ''; 
maintext: string = '';
idnumber: number = 1;


  constructor() { }

  ngOnInit(): void {
  }
  onAddNote(){
    if(this.article == "" || this.maintext == ""){

    }
    else{
    this.noteAdd.emit({id: this.idnumber++, name: this.article, maintext: this.maintext, date: new Date()})
    this.article='';
    this.maintext='';  
    }  
  }

}

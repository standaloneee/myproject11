import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { timeStamp } from 'console';
import { Note } from '../interface';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
@Output() noteAdd = new EventEmitter<Note>();

article: string = ''; 
maintext: string = '';
idnumber: 1 = 1;
  constructor() { }

  ngOnInit(): void {
  }
  onAddNote(){
    this.noteAdd.emit({id: this.idnumber++, name: this.article, maintext: this.maintext, date: new Date()})
    this.article='';
    this.maintext='';
  }

}

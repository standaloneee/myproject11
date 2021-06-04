import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
 
  @Input() inputNote!: Note;
  @Output() noteDelete = new EventEmitter<Note>();
  @Output() noteEdit = new EventEmitter<Note>();
  @Output() noteAdd = new EventEmitter<Note>();
  condition = true;

  constructor() { }

  ngOnInit(): void {
  }
  onDeleteNote() {
    this.noteDelete.emit();
  }
  onEditNote() {
    if(this.inputNote.name == "" || this.inputNote.maintext == ""){

    }
    else{
    this.condition = !this.condition;
    if (this.condition == true)
    {
      // this.noteAdd.emit();
      if(this.inputNote.name == ""){
        console.log("it's empty name")
        this.inputNote.name = "name is empty";
             }
            
             if(this.inputNote.maintext == ""){
        console.log("it's empty maintext")
        this.inputNote.maintext = "maintext is empty";
             }
          }
    }
  }
    
    
    
}

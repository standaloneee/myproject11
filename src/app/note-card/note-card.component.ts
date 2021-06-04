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
    this.condition = !this.condition;
    // if (this.condition == false)
    // {
    //   // this.noteAdd.emit();
    // }
     
  }
}

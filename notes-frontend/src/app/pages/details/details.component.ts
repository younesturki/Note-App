import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.module';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  note: Note;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.note = new Note();
  }

  onSubmit(form: NgForm){
    this.notesService.add(form.value);
  }

}

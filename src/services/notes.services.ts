import {Injectable} from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class NotesServices  {

	constructor(public db: AngularFireDatabase){}
	notes = [
		{id:1 , title: "titulo 1", description: "Descripcion 1"},
		{id:2 , title: "titulo 2", description: "Descripcion 2"},
		{id:3 , title: "titulo 3", description: "Descripcion 3"}
	]

	public getNotes () {
		/*return this.notes;*/
		return this.db.list("notas/");
	}
	public getNote(id){
		/*return this.notes.filter(function(e,i){return e.id == id})[0] || {id:null,title:null,description:null} ;
	*/
		return this.db.object("notas/"+id);
	}
	public createNote(note){
		/*this.notes.push(note);*/
		this.db.database.ref('notas/'+ note.id).set(note);
	}
	public editNote(note){
		/*for (var i = 0; i < note.length; ++i) {
			if(this.notes[i].id == note.id){
				this.notes[i] = note ;
			}
		}*/
		this.db.database.ref('notas/'+ note.id).set(note);

	}
	public deleteNote(note){
		/*for (var i = 0; i < note.length; ++i) {
			if(this.notes[i].id == note.id){
				this.notes.splice(i, 1);
			}
		}*/
		this.db.database.ref('notas/'+ note.id).remove(note);
	}
}
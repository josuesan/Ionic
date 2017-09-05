import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ NotesServices} from '../../services/notes.services';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  note = {id: null , title: null, description: null};
  id = null;
  constructor(public navCtrl: NavController, public navParams: NavParams , public notesServices: NotesServices) {
    this.id = navParams.get('id');
    if(this.id !=0){
      notesServices.getNote(this.id)
      .subscribe(note=>{
        this.note = note;
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  public addNote(){
    if(this.id != 0){
      /*EDITAR*/
      this.notesServices.editNote(this.note);     
    }else{
      this.note.id= Date.now();
      this.notesServices.createNote(this.note);
    }
    this.navCtrl.pop();
  }
  public deleteNote(){
    this.notesServices.deleteNote(this.note);
    this.navCtrl.pop();
  }
}

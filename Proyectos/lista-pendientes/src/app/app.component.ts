import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

todoArray = [];
value: any;

guardarTarea(value:any){
  console.log(value);
}
borrarTarea(){
  console.log('Borrando tarea');
}

}

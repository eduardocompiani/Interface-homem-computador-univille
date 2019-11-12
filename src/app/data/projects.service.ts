import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(public projects: Array<any>) {
    this.projects = [
      {code: 1, name: "Projeto 1", author: "Eduardo Compiani", price: 11000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: true, description: "Proin cursus faucibus lacus, nec dignissim est ultricies ut. Nam aliquam posuere dui, ut facilisis diam lobortis non. Nunc sit amet lobortis ex. Donec a felis et sem egestas euismod."},
      {code: 2, name: "Projeto 2", author: "Eduardo Compiani", price: 22000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: false, description: "Nam imperdiet magna vel augue fringilla, a aliquet leo aliquam. Phasellus a purus nisi. Mauris varius eros arcu, quis imperdiet nunc tempor vel. Duis vehicula, lectus at cursus mattis, est erat maximus tellus, id dignissim ligula ante eu nisi."},
      {code: 3, name: "Projeto 3", author: "Eduardo Compiani", price: 33000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: false, description: "Curabitur odio elit, fermentum sit amet consectetur vitae, convallis a elit. Proin iaculis lectus nec vehicula luctus. Sed elit dolor, suscipit ac tincidunt ut, maximus non felis. Aenean vitae magna justo. Etiam vehicula sapien libero."},
      {code: 4, name: "Projeto 4", author: "Helena Laiz", price: 44000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: true, description: "Suspendisse euismod efficitur ante ut sodales. Aenean volutpat arcu nec dictum sollicitudin. Nam nec rutrum nisi. Maecenas finibus semper auctor."},
      {code: 5, name: "Projeto 5", author: "Helena Laiz", price: 55000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: false, description: "Quisque mollis auctor ornare. Sed ultricies odio sed ante sagittis, ut porttitor tortor condimentum. Suspendisse sit amet malesuada mi."},
      {code: 6, name: "Projeto 6", author: "Lucas Veiga", price: 66000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: false, description: "Nulla non tincidunt dui. Nulla justo lacus, feugiat sed turpis sed, aliquet mattis neque. Maecenas blandit vel nunc et euismod."},
      {code: 7, name: "Projeto 7", author: "Lucas Veiga", price: 77000.00, place: "Joinville - SC", projectDate: "25/05/2020", locked: false, description: "Sed pretium malesuada augue, in viverra arcu vulputate sit amet. Sed condimentum blandit tortor sit amet feugiat. Praesent et cursus nisi, in lobortis augue."},
    ];
  }


}

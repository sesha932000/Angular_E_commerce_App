import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-buttton',
  standalone: true,
  imports: [],
  template: `
  <button class=" text-black min-w-fit px-5 py-2 rounded-xl shadow-md hover:bg-slate-200" (click)="btnClicked.emit()" >{{lable()}}</button>
  `,
  styles: ``
})
export class ButttonComponent {
lable=input('')
btnClicked=output();
}

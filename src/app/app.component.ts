import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flexbox';
  layoutDirection: any = "flex-row";
  layoutHorizontal:any = "justify-content-start";
  layoutVertical:any="align-items-stretch";
  horizontalAlign: any[] = [
    { cssClass: 'justify-content-start', default:true},
    { cssClass: 'justify-content-end' , default:false},
    { cssClass: 'justify-content-center', default:false },
    { cssClass: 'justify-content-between', default:false },
    { cssClass: 'justify-content-around', default:false },
  ];
  verticalAlign:any[]=[
    { cssClass: 'align-items-start', default:false },
    { cssClass: 'align-items-end', default:false },
    { cssClass: 'align-items-center', default:false },
    { cssClass: 'align-items-baseline', default:false },
    { cssClass: 'align-items-stretch', default:true },
  ]
}

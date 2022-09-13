import { Component, OnInit } from '@angular/core';
import { InspectionAPIService } from 'src/app/services/inspection-api.service';
//importar Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.css']
})
export class ShowInspectionComponent implements OnInit {

  //signo de exclamación para una asignación definitiva: <any[]>=string
  inspectionList$!:Observable<any[]>;
  inspectionTypesList$!:Observable<any[]>;
  inspectionTypesList:any=[];

  //Matriz: Map to display associate with foreign keys
  inspectionTypesMap:Map<number,string> = new Map()
  
  //Inyectar servicio
  constructor(private srv:InspectionAPIService) { }

  
  ngOnInit(): void 
  {
    this.inspectionList$ = this.srv.getInspectionList();
    this.inspectionTypesList$ = this.srv.getInspectionTypeList();
  }

}

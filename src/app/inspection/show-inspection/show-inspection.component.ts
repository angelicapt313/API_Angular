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


  modalTitle:string="";
  activateAddEditInspectionComponent:boolean=false;
  inspection:any;

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
    this.inspectionTypesList$ = this.srv.getInspectionTypesList();
    this.refreshInspectionTypesMap();
  }

  refreshInspectionTypesMap()
  {
    this.srv.getInspectionList().subscribe(data => {
      for(let i=0; i<data.length; i++)
      {
        this.inspectionTypesMap.set(this.inspectionTypesList[i].id, this.inspectionTypesList[i].inspectionName);
      }
    })
  }

  modalAdd()
  {
    this.inspection = {
      id:0,
      status:null,
      comments:null,
      inspectionTypeId:null
    }
    this.modalTitle ="Add Inspection";
    this.activateAddEditInspectionComponent=true;
  }

  modalClose()
  {
    this.activateAddEditInspectionComponent=false;
    this.inspectionList$=this.srv.getInspectionList();
  }

}

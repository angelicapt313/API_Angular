import { Component, Input, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { InspectionAPIService } from 'src/app/services/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection',
  templateUrl: './add-edit-inspection.component.html',
  styleUrls: ['./add-edit-inspection.component.css']
})
export class AddEditInspectionComponent implements OnInit {


  inspectionList$!: Observable<any>;
  statusList$!: Observable<any>;
  inspectionTypesList$!: Observable<any>;


  constructor(private srv: InspectionAPIService) { }

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.comments = this.inspection.comments;
    this.inspectionTypeId = this.inspectionTypeId;
    this.statusList$ = this.srv.getStatusList();
    this.inspectionList$ = this.srv.getInspectionList();
    this.inspectionTypesList$ = this.srv.getInspectionTypesList();
  }


  @Input() inspection: any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  inspectionTypeId!: number;

  addInspection() {
    var inspection = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    }
    this.srv.addInspection(inspection).subscribe(res => {
      var closeModalBtn = document.getElementById("add-edit-modal-close");
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById("add-success-alert")
      if(showAddSuccess)
      {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display="none";
        }
      }, 4000);
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionAPIService {

  readonly inspectionAPIUrl="https://localhost:7112/swagger/index.html";

  constructor(private http:HttpClient) { }

  //
  getInspectionList():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspections');
  }

  addInspection(data:any)
  {
    return this.http.post(this.inspectionAPIUrl + '/inspections', data)
  }

  updateInspectioni(id:number|string, data:any)
  {
    return this.http.put(this.inspectionAPIUrl + `/inspections${id}`, data);
  }

  deleteInspection(id:number|string)
  {
    return this.http.delete(this.inspectionAPIUrl + `/inspections${id}`)
  }

  //Inspection Types
  getInspectionListTypes():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectiontypes');
  }

  addInspectionTypes(data:any)
  {
    return this.http.post(this.inspectionAPIUrl + '/inspectiontypes', data)
  }

  updateInspectioniTypes(id:number|string, data:any)
  {
    return this.http.put(this.inspectionAPIUrl + `/inspectiontypes${id}`, data);
  }

  deleteInspectionTypes(id:number|string)
  {
    return this.http.delete(this.inspectionAPIUrl + `/inspectiontypes${id}`)
  }

  //Inspection Status
  getStatusList():Observable<any[]>
  {
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data:any)
  {
    return this.http.post(this.inspectionAPIUrl + '/status', data)
  }

  updateStatus(id:number|string, data:any)
  {
    return this.http.put(this.inspectionAPIUrl + `/status${id}`, data);
  }

  deleteStatus(id:number|string)
  {
    return this.http.delete(this.inspectionAPIUrl + `/status${id}`)
  }
}

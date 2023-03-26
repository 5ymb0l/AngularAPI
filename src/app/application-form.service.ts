import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {
  appData:any
   data = [
    { id: 1, name: 'Pratik', age: 26,mobnumber:8973546277 },
    { id: 2, name: 'Swapnil', age: 25,mobnumber:8977354462 },
    { id: 3, name: 'Rahul', age: 15,mobnumber:3426746277 },
    {id: 4, name: 'Samyak', age: 8,mobnumber:3426746277}
  ];
  httpErrorMessage: any;

  // private http: HttpClient

  constructor() { }

  getData() {

    return this.data;
  }

  public async getDataUser(): Promise<boolean> {
    console.log("Entered in get data api")
    return true;
    // return await this.http
    //   .get('/get/application/data')
    //   .toPromise()
    //   .then(response => {
    //     this.data = response;
    //     return true;
    //   })
    //   .catch(error => this.errorHandler(error));
  }

  public async Login(loginId:string,passowrd:string): Promise<boolean> {
    let params = new HttpParams();
    params = params.append('login_id', loginId);
    params=params.append('password',passowrd);
    console.log("Login Data",params)
    return true;
    // return await this.http.post(
    //   'login/ApplicationFormService/form', params).toPromise()
    //   .then((response) => {
    //       return true;
    //     }
    //   ).catch((error) => this.errorHandler(error));
  }

  addData(item:any) {
    console.log("component_data_initin",item)
    this.data.push(item);
  }

  
  public async deleteData(Id: number): Promise<boolean> {
    console.log("ID for Deletion" ,Id)
    this.data = this.data.filter((data) => data.id !== Id);
    return true;
    // return await this.http.delete('delete/data/'+Id.toString)
    //   .toPromise().then((response) => {
    //       return true;
    //     }
    //   ).catch((error) => this.errorHandler(error));
  }

  errorHandler(error: HttpErrorResponse): boolean {
    console.log(error);
    if (error.status === 400) {
      // this.httpErrorMessage = error.error.message;
      this.httpErrorMessage="Eroor while executing http request"
    }
    return false;
  }
}

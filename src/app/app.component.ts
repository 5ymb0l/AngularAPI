import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApplicationFormService } from './application-form.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoginExpanded:boolean = true;

  loginForm = new FormGroup({
    loginId: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
  });
  items: any;
  displayedColumns: string[] = ['id', 'name', 'age', 'mobnumber','action'];
  dataapp:any


  constructor(private myService: ApplicationFormService) { }

  async login() {
    this.isLoginExpanded=false;
    const det = await this.myService.Login(this.loginForm.get('loginId')?.value,this.loginForm.get('password')?.value);
    if(det){
      const ret = await this.myService.getDataUser();
    if(ret){
      this.items = this.myService.getData();
      this.dataapp = new MatTableDataSource(this.items);
    }
    }
    
  }

  canSubmit(): boolean {
    return this.loginForm.valid;
  }

  async deleteItem(id: any) {
    const ret = await this.myService.deleteData(id)
    if(ret){
      this.items = this.myService.getData();
      this.dataapp = new MatTableDataSource(this.items);
    }
   
  }

}

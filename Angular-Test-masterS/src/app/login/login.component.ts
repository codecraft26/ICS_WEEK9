import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user=false;
  pass=false;
  wrong=false;
  loginData = {
    username: "",
    password: "",
  };

  data=[
    {
      username:"Mukul",
      password:"123456"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.user=true;
      return;
    }
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.pass=true;
      return;
    }

    if(this.GetIndex(this.loginData)===-1){
      this.wrong=true;
    }else alert("Succesfully logged In");

  }
  

  GetIndex(index:any) {    
    for (var i = 0; i < this.data.length; i++) {
        if (this.data[i].username == index.username && this.data[i].password == index.password) {
            return i;
        }
    }
    return -1;
}
}

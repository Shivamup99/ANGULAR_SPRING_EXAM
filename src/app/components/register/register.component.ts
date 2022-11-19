import { MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from './../../services/auth/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  invalidRPWD:boolean=false;

  public user ={
    username:'',firstName:'',lastName:'',email:'',password:'',phone:''
  }
  constructor(private userService:UserService,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    // this.registerForm = this.fb.group({
    //   firstName:[
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(3),
    //       Validators.pattern('[a-zA-Z]*')
    //     ]
    //   ],
    //   lastName:[
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(3),
    //       Validators.pattern('[a-zA-Z]*')
    //     ]
    //   ],
    //   email:[
    //     '',
    //     [Validators.required,Validators.email]
    //   ] ,
    //   password:[
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(6),
    //       Validators.maxLength(20)
    //     ]
    //   ],
    //   phone:[
    //     '',
    //     [
    //       Validators.required, Validators.minLength(10),Validators.maxLength(10)
    //     ]
    //   ]
    //   // rpwd:['',Validators.required]
    // })
  }

  // get FirstName(): FormControl{
  //   return this.registerForm.get('firstName') as FormControl;
  // }

  // get LastName(): FormControl{
  //   return this.registerForm.get('lastName') as FormControl;
  // }

  // get Email(): FormControl{
  //   return this.registerForm.get('email') as FormControl;
  // }

  // get phone(): FormControl{
  //   return this.registerForm.get('pwd') as FormControl;
  // }

  // get PWD(): FormControl{
  //   return this.registerForm.get('rpwd') as FormControl;
  // }

  formSubmit(){
    if(this.user.username===null || this.user.username===''){
      this._snackBar.open('username is required !','ok',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      })
    }
      this.userService.register(this.user).subscribe((data:any)=>{
        Swal.fire('Success','user registerd *','success')

      },(error)=>{
          this._snackBar.open('somthing went wrong sorry !' ,'ok',{duration:3000, verticalPosition:'top',
          horizontalPosition:'right'})
      })
  }

}

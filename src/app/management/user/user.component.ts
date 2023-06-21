import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent  implements OnInit{
  // User: userObj = new User();
  submitted = false;
  userList?:any;

  constructor( 
    private userService : UserService,
    private router:Router
    ){}


   
    ngOnInit(){

      this.userService.getAllUser().subscribe({
        next:res=>{
          this.userList=res;
        },
        error:console.log
        
      });
      console.log('userList ----------'+this.userList);
      
    }



    createUser(id:number){
      this.submitted = true;
      this.userService.createuser(id).subscribe(
        data => alert('User  added successfull!!'),
        error => alert('Something is wrong, please try again!!')
      );

        // this.router.navigate(['/updatelocation', id]);
    }


}

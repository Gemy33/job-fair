import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user/user-auth.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit {
  constructor(private UserAuthService:UserAuthService){}
  user : any;
  id=JSON.parse(localStorage.getItem('userinfo')!).sub;
  ngOnInit(): void {
    this.UserAuthService.getAllUsers().subscribe({
      next:(res)=>{
        
        this.user= res.find((u:IUser)=>(u.id==this.id))
        
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  
  logout()
  {

  }

}

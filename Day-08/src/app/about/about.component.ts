import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   user: { id: string, name: string }= {id:'',name:''}
  constructor (private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.paramSubscription(); // moved function definiton outside ngOnInit()
  }
  paramSubscription() {
    this.user ={
      id:this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params.subscribe((data:Params)=>{
      this.user ={
        id:data['id'],
        name:data['name']
      };
    });
    this.route.queryParams.subscribe((data =>{
      console.log(data);
    }))
    this.route.fragment.subscribe((data =>{
      console.log(data);  
    }))
  }
  getManojDetails(){
    this.router.navigate(['/About',4,'Manoj'],
      {
        queryParams:{page:2,search:'Manoj'},
        fragment:'loading',
      }
    )
  }

}

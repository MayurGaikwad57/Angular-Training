import { Component } from "@angular/core";

@Component({
    selector:'app-comp5',
    templateUrl:'./comp5.component.html'
})
export class comp5component{
 headername = "Working hard is essential in life" // Example used for data binding(Interpolatin binding)
 salary = 50000;
 pipes = "work hard to succed in life"
}
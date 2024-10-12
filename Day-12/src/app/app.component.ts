import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) viewdata !: ChildComponent
  title = 'Day-12';
  Title:string = "Parent Component";
  nameinput = ' ';
  markinput = ' ';
  ChildComponent: any;
  TransferData(name: string, mark: string) {
    this.ChildComponent.updateNameAndMark(this.nameinput, this.markinput);
  }
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  loadComponent() {
    const factory = this.resolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);
  }
}


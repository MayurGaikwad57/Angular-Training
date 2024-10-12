import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  @ViewChild("dynamic",{read:ViewContainerRef})container: any = ViewContainerRef;
  constructor(private resolver:ComponentFactoryResolver) {}

  load() {
    const factory=this.resolver.resolveComponentFactory(DynamicComponent);
    const componentRef = this.container.createComponent(factory);
  }
}

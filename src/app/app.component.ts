import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicTemplateComponent } from './dynamicTemplate/dynamicTemplate.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<DynamicTemplateComponent>;

  addComponent() {
    if (this.viewRef.length === 0) {
      this.viewRef.clear();
      this.componentRef = this.viewRef.createComponent(
        DynamicTemplateComponent
      );
    }
  }

  deleteComponent() {
    this.viewRef.clear();
    this.componentRef.destroy();
  }
}

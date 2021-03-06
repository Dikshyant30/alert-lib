import { Component } from '@angular/core';
import { NgSimpleAlertService } from 'projects/ng-simple-alert/src/public-api';

@Component({
  selector: 'app-root',
  template: `
    <lib-ng-simple-alert></lib-ng-simple-alert>
    <button class="success" (click)="createSuccessMessage()">Create success alert</button>
    <button class="danger" (click)="createDangerMessage()">Create danger alert</button>
    <button class="warning" (click)="createWarningMessage()">Create warning alert</button>
    <button class="info" (click)="createInfoMessage()">Create info alert</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private alertService: NgSimpleAlertService) {
  }

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }
}

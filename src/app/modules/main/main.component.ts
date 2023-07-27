import { Component } from '@angular/core';
import { ISession } from 'src/app/shared/models/session.interface';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  userSession!: ISession;

  constructor(private sessionSvc: SessionService) {
    this.userSession = this.sessionSvc.getSession();
  }
}

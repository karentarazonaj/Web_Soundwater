import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-backup-page',
  imports: [HeaderComponent, SidebarComponent, FooterComponent,],
  templateUrl: './backup-page.component.html',
  styleUrl: './backup-page.component.css'
})
export class BackupPageComponent {

}

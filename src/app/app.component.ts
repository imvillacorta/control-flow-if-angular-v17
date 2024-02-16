import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './components/control-flow/if/if.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

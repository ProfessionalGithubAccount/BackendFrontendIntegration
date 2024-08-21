import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { RetreiveComponent } from './retreive/retreive.component';
import { UpdateComponent } from './update/update.component';
import { TokenComponent } from './token/token.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateComponent,DeleteComponent,RetreiveComponent,UpdateComponent,TokenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}

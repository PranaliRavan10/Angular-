import { Component } from '@angular/core';

// import classes which are required for reactive forms
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
  // Inject FormBuilder service
  constructor(public fbobj : FormBuilder)
  {


  }

  Form = this.fbobj.group(
    {
      username :['Pranali'],
      passowrd : ['abcd'],
      ConfirmPass : ['abcd'],
      Class : this.fbobj.group(
        {
          batch :['Python'],
          fees : ['5000'] 
        }
      )
    }
  );
  /*
  MarvellousForm = new FormGroup(
    {
      username : new FormControl('Piyush'),
      passowrd : new FormControl(''),
      ConfirmPass : new FormControl(''),
      // Add new nes
      MarvellousClass : new FormGroup(
        {
          batch : new FormControl('Python'),
          fees : new FormControl('5000')
        }
      )
    }

  );*/

  // Method to set FormControl fields through program
  SetData()
  {
    this.Form.setValue(
      {
        username : 'Piyush',
        passowrd : 'abcd',
        ConfirmPass :  'abcd',
        MarvellousClass : 
        {
          batch : 'Python',
          fees : '5000'
        }
      }
    )
  }
}

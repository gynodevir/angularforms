// sign-up.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupform!: FormGroup;

  ngOnInit(): void {
    this.signupform = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      profilePicture: new FormControl(null)
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.signupform.patchValue({
      profilePicture: file
    });
  }

  submit() {
    if (this.signupform.valid) {
      // Perform form submission logic here
      console.log(this.signupform.value);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    name: '',
    email: '',
    phone: '',
  };
  submitted = false;
  constructor(private Service: TutorialService) {}

  ngOnInit(): void {}

  saveTutorial(): void {
    const data = {
      name: this.tutorial.name,
      email: this.tutorial.email,
      phone: this.tutorial.phone,
    };

    this.Service.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.log(e),
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      name: '',
      email: '',
      phone: '',
    };
  }
}

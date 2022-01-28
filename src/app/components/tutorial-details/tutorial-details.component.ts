import { Component, Input, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css'],
})
export class TutorialDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentTutorial: Tutorial = {
    name: '',
    email: '',
    phone: '',
  };
  message = '';
  constructor(
    private Service: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params['id']);
    }
  }

  getTutorial(id: string): void {
    this.Service.get(id).subscribe({
      next: (data) => {
        this.currentTutorial = data;
      },
      error: (e) => console.error(e),
    });
  }

  updateTutorial(): void {
    this.message = '';
    this.Service.update(
      this.currentTutorial.id,
      this.currentTutorial
    ).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ?? res.message;
      },
      error: (e) => console.error(e),
    });
  }

  deleteTutorial(): void {
    this.Service.delete(this.currentTutorial.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([`/tutorials`]);
      },
      error: (e) => console.error(e),
    });
  }
}

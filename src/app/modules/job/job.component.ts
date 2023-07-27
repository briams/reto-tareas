import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  listJobs: any[] = [];

  form: FormGroup = this.fb.group({
    jobs: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }
    const { jobs } = this.form.value;
    this.listJobs = [...this.listJobs, { name: jobs, isSelected: false }].map(
      (i, index) => {
        i.id = index + 1;
        return i;
      }
    );
    this.form.reset();
  }

  deleteJob(id: number) {
    this.listJobs = this.listJobs.filter((i) => i.id != id);
  }

  changeSelected(id: number) {
    this.listJobs.forEach((i) => {
      if (i.id == id) {
        i.isSelected = !i.isSelected;
      }
    });
  }
}

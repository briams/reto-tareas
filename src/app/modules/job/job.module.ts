import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobComponent } from './job.component';
import { JobRoutingModule } from './job-routing.module';

@NgModule({
  declarations: [JobComponent],
  imports: [CommonModule, JobRoutingModule, FormsModule, ReactiveFormsModule],
})
export class JobModule {}

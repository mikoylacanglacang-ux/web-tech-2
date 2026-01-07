import { Routes } from '@angular/router';
import { PrelimExamComponent } from './prelim-exam.component'; // ← Changed!

export const routes: Routes = [
  { path: '', component: PrelimExamComponent },
  { path: 'prelim-exam', component: PrelimExamComponent }
];

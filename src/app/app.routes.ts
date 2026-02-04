import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CreateStudentComponent } from './create-student/create-student.component';

export const routes: Routes = [
  // Default route - redirects to students page
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  },
  // Students list page
  {
    path: 'students',
    component: StudentsComponent
  },
  // Create student page
  {
    path: 'create-student',
    component: CreateStudentComponent
  },
  // Wildcard route - catches any undefined routes
  {
    path: '**',
    redirectTo: 'students'
  }
];
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent {
  student = {
    name: '',
    course: '',
    yearLevel: ''
  };

  yearLevels = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year'];

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.student.name && this.student.course && this.student.yearLevel) {
      console.log('Student created:', this.student);
      alert('Student added successfully!');
      this.router.navigate(['/students']);
    } else {
      alert('Please fill in all fields');
    }
  }

  onCancel(): void {
    this.router.navigate(['/students']);
  }
}
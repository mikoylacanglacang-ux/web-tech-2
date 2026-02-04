import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Student {
  id: number;
  name: string;
  course: string;
  yearLevel: string;
}

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  students: Student[] = [
    {
      id: 1,
      name: 'John Doe',
      course: 'Computer Science',
      yearLevel: '3rd Year'
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'Information Technology',
      yearLevel: '2nd Year'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      course: 'Software Engineering',
      yearLevel: '4th Year'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      course: 'Data Science',
      yearLevel: '1st Year'
    }
  ];

  constructor(private router: Router) {}

  navigateToCreateStudent(): void {
    this.router.navigate(['/create-student']);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    console.log(`Student with ID ${id} deleted`);
  }
}
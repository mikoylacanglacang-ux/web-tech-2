import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GetStudent } from '../../models/student.models';
import { StudentsService } from '../../services/students/students.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {
  private readonly studentsService = inject(StudentsService);

  // Store the students data, initial data is empty array
  public students = signal<GetStudent[]>([]);

  public async ngOnInit(): Promise<void> {
    await this.loadStudents();
  }

  // Load students from the API
  private async loadStudents(): Promise<void> {
    try {
      const students = await this.studentsService.getStudents();
      this.students.set(students); // Set the response from the service
    } catch (error: unknown) {
      console.error('Error loading students:', error);
    }
  }

  // Delete student functionality
  public async deleteStudent(studentId: string): Promise<void> {
    try {
      // Confirm deletion
      const confirmed = confirm('Are you sure you want to delete this student?');
      if (!confirmed) return;

      // Call service to delete
      await this.studentsService.deleteStudent(studentId);

      // After successful deletion, remove the student from the list
      this.students.set(
        this.students().filter(student => student.id !== studentId)
      );

      console.log('Student deleted successfully');
    } catch (error: unknown) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student');
    }
  }
}
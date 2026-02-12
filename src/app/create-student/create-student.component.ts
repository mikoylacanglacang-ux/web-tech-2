import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students/students.service';
import { CreateStudentPayload } from '../../models/student.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [StudentsService]
})
export class CreateStudentComponent {
  private readonly studentService = inject(StudentsService);
  private readonly router = inject(Router);

  // Form group with all validators
  public form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    year_level: new FormControl('', [Validators.required]),
    gpa: new FormControl('', [Validators.required]),
    enrollment_status: new FormControl('enrolled')
  });

  public async createStudent(): Promise<void> {
    try {
      // Check if form is valid
      if (this.form.invalid) {
        // Mark all fields as touched to show validation errors
        this.form.markAllAsTouched();
        console.log('Form is invalid');
        return;
      }

      // Create the payload
      const createStudentPayload: CreateStudentPayload = {
        first_name: this.form.value.first_name ?? '',
        last_name: this.form.value.last_name ?? '',
        email: this.form.value.email ?? '',
        age: this.form.value.age ? Number(this.form.value.age) : 0,
        course: this.form.value.course ?? '',
        year_level: this.form.value.year_level ? Number(this.form.value.year_level) : 0,
        gpa: this.form.value.gpa ? Number(this.form.value.gpa) : 0,
        enrollment_status: this.form.value.enrollment_status ?? 'enrolled'
      };

      // Call the service to create student
      await this.studentService.createStudent(createStudentPayload);

      // Success message
      console.log('Student created successfully!');
      alert('Student created successfully!');

      // Reset the form
      this.form.reset({ enrollment_status: 'enrolled' });

      // Optional: Navigate back to students list
      // this.router.navigate(['/students']);

    } catch (error: unknown) {
      console.error('Error creating student:', error);
      alert('Failed to create student. Please try again.');
    }
  }
}
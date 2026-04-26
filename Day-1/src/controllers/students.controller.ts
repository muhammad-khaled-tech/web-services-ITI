import { Request, Response } from 'express';
import { students } from '../data/students.data';
import { Student } from '../types/Student' ;
export const getAllStudents = (req: Request, res: Response): void => {
    res.status(200).json(students);
};

export const getStudentById = (req: Request, res: Response): void => {
    const studentId = parseInt(req.params.id as string);
    const student = students.find(s => s.id === studentId);

    if (!student) {
        res.status(404).json({ error: "Student not found" });
        return;
    }

    res.status(200).json(student);
};

export const createStudent = (req: Request, res: Response): void => {
    const { name, age } = req.body as { name: string; age: number };

    if (!name || !age) {
        res.status(400).json({ error: "Name and age are required" });
        return;
    }

    const newStudent: Student = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name,
        age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
};

export const deleteStudentById = (req: Request, res: Response): void => {
    const studentId = parseInt(req.params.id as string);
    const studentIndex = students.findIndex(s => s.id === studentId);
    if (studentIndex === -1) {
      res.status(404).json({ error: "Student not found" });
      return;
    }
    students.splice(studentIndex, 1);
    res.status(200).json({ message: "Student deleted successfully" });

}


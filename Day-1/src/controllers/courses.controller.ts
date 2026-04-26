import { Request, Response } from 'express';
import { Course } from '../types/Course' ;
import { courses } from '../data/courses.data';



export const getAllCourses = (req: Request, res: Response): void=>{
res.status(200).json(courses)
}


export const getCourseById = (req: Request, res: Response):void=>{

  const courseId = parseInt(req.params.id as string) ;
  const course = courses.find(course => course.id === courseId) ;

if (!course) {
  res.status(404).json({ message: 'Course not found' });
  return ;
}


res.status(200).json(course) ;

}


export const createCourse = (req: Request, res: Response):void =>{
const { title } = req.body ;
if (!title) {
  res.status(400).json({ message: 'Title is required' });
  return ;
}
    const newCourse: Course = {
        id: courses.length > 0 ? courses[courses.length - 1].id + 1 : 1,
        title ,
    };

courses.push(newCourse) ;
res.status(201).json(newCourse) ;

}

export const deleteCourseById = (req: Request, res: Response):void=>{

const courseId = parseInt(req.params.id as string) ;
const courseIndex = courses.findIndex(course => course.id === courseId) ;

if (courseIndex === -1) {
  res.status(404).json({ message: 'Course not found' });
  return ;
}

courses.splice(courseIndex, 1) ;
res.status(200).json({ message: 'Course deleted successfully' });

}


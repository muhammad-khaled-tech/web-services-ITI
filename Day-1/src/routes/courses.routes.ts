import { Router } from "express";
import { getAllCourses, getCourseById, createCourse , deleteCourseById} from '../controllers/courses.controller'
const router = Router() ;

router.get('/', getAllCourses);
router.post('/', createCourse);
router.get('/:id' , getCourseById) ;
router.delete('/:id' , deleteCourseById) ;

export default router ;

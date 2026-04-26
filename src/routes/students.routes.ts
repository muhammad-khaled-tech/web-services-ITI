import { Router } from "express";
import { getAllStudents, getStudentById, createStudent , deleteStudentById} from '../controllers/students.controller'
const router = Router() ;

router.get('/', getAllStudents);
router.post('/', createStudent);
router.get('/:id' , getStudentById) ;
router.delete('/:id' , deleteStudentById) ;

export default router ;

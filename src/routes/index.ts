import { Router } from "express";
import studentsRoutes from './students.routes' ;
import coursesRoutes from './courses.routes' ;

const router = Router() ;

router.use('/students' , studentsRoutes) ;
router.use('/courses' , coursesRoutes) ;

export default router ;



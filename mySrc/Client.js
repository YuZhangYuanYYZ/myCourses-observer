import CourseSubject from"./CourseSubject";
import StudentObserver from"./StudentObserver";
import TeacherObserver from"./TeacherObserver";

let studentObserver = new StudentObserver("student");
let teacherObserver = new TeacherObserver("teacher");
let courseSubject = new CourseSubject(["Chinese","Engliseh"]);

courseSubject.attach(studentObserver);
courseSubject.attach(teacherObserver);

courseSubject.setCourses(["math","chemistry"]);
console.log(courseSubject);


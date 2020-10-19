import CourseSubject from"./CourseSubject.js";
import StudentObserver from"./StudentObserver.js";
import TeacherObserver from"./TeacherObserver.js";

let studentObserver = new StudentObserver("student");
let teacherObserver = new TeacherObserver("teacher");
let courseSubject = new CourseSubject(["Chinese","English"]);

courseSubject.attach(studentObserver);
courseSubject.attach(teacherObserver);

courseSubject.setCourses(["math","chemistry"]);
console.log(courseSubject);


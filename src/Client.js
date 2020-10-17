const  CourseSubject = require("./CourseSubject")
const  StudentObserver = require("./StudentObserver")
const  TeacherObserver = require("./TeacherObserver")

const courseSubject = new CourseSubject(["Chines", "Math"]);
const studentObserver = new StudentObserver("student observer");
const teacherObserver = new TeacherObserver("teacher observer");

courseSubject.attach(studentObserver)
courseSubject.attach(teacherObserver)

courseSubject.setCourses(["Chines", "English"]);
console.log(courseSubject);
import students from './helpers/data/studentData';
import navbar from './components/navbar/navbar';
import list from './components/studentList/studentList';
import '../styles/main.scss';

const init = () => {
  const allStudents = students.getStudents();
  navbar.loadNavbar();
  list.createStudentList(allStudents);
};

init();

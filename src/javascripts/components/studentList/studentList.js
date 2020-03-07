import studentCard from '../studentCard/studentCard';
import utils from '../../helpers/utils';
import './studentList.scss';

const createStudentList = (students) => {
  let domString = '<ul class="student-list">';
  students.forEach((student) => {
    domString += studentCard.createStudentCard(student);
  });
  domString += '</ul>';
  utils.printToDom('student-container', domString);
};

export default { createStudentList };

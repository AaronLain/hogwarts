import './studentCard.scss';

const createStudentCard = (student) => {
  let domString = '<li class="student-card">';
  domString += '<div class="img-holder">';
  domString += `<img src=${student.picture} alt=${student.name}>`;
  domString += `<h2>${student.name}</h2>`;
  domString += '</div>';
  domString += '</li>';
  return domString;
};

export default { createStudentCard };

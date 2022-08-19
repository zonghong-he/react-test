import { data } from './data/student';
import myData from './data/student.json';

function Student() {
  return (
    <>
      <h1>Student</h1>
      <hr />
      <ul>
        {data.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
      <ul>
        {myData.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Student;

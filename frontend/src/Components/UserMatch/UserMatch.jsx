import Table from 'react-bootstrap/Table';

function SmallExample() {
    const users1 = JSON.parse(localStorage.getItem('userName'));
    const user1 = {
      name: 'User 1',
      movies: [
        { name: 'Movie 1', grade: 'A' },
        { name: 'Movie 2', grade: 'B' },
        { name: 'Movie 3', grade: 'C' }
      ]
    };
    const user2 = {
      name: 'User 2',
      movies: [
        { name: 'Movie 1', grade: 'A' },
        { name: 'Movie 2', grade: 'B' },
        { name: 'Movie 3', grade: 'C' }
      ]
    };
    return (
      <Table className='bg-white' striped bordered hover size='sm'>
          <thead>
              <tr>
                  <th>Movie</th>
                  <th>{users1}</th>
                  <th>{user2.name}</th>
              </tr>
          </thead>
          <tbody>
              {user1.movies.map((movie, index) => (
                  <tr key={index}>
                      <td>{movie.name}</td>
                      <td>{movie.grade}</td>
                      <td>{user2.movies[index].grade}</td>
                  </tr>
              ))}
          </tbody>
      </Table>
    );
  }
  
  export default SmallExample;  
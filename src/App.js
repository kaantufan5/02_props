import Person from './Person';

function App() {
  return (
    <>
      <Person 
      name="Can Bayram" 
      img="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
      tel="+90 (505) 550 05 50"
      />
      <Person 
      name="Canan Bayram"
      img="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
      tel="+90 (523) 255 23 12"
      />
      <Person 
      name="Ahmet Fevzi"
      img="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
      tel="+90 (534) 230 02 25"
      />
    </>
  );
}

export default App;

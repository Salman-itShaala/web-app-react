function SportsList({ sports }) {
  // Conditional rendering

  //  condition ? if true : if false;

  console.log(sports.length);

  return sports.length == 0 ? (
    <h1>No elements in sports array</h1>
  ) : (
    <div>
      <ul>
        {sports.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default SportsList;

import { useState, useEffect } from "react";

function App() {
  const [dataType, setDataType] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [dataType])


  // კოდის გაშვება ხდება
  // 1. კომპონენტის ჩატვირთვისას
  // 2. მდგომარეობის ცვლილება

  // useEffect კაუჭა ღებულობს 2 პარამეტრს:
  // 1. callback ფუნქცია
  // 2. dependencies მასივი



  return (
    <>
      <button onClick={() => setDataType('users')} >Users</button>
      <button onClick={() => setDataType('posts')}>Posts</button>
      <button onClick={() => setDataType('comments') }>Comments</button>
      <h2>{dataType}</h2>
      <ul>
        {data.map((item, index) => 
        <li key={index}>{JSON.stringify(item)}</li>
        )}
      </ul>
    </>
  )
}

export default App;
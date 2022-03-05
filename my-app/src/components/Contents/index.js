import {useState , useEffect} from 'react';

import './styles.css';

import List from './List';
import Form from './Form';

function Contents() {
    const [contents, setContents] = useState([
        {
            fullname: 'Mehmet',
            phone_number: '123123'
        }, {
            fullname: 'Atakan',
            phone_number: '12312369'
        }, {
            fullname: 'Arda',
            phone_number: '852963'
        }
    ]);

    useEffect(() => {
    console.log(contents);
    }, [contents]);


  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contents= {contents} />
      <Form addContact={setContents} contents ={contents} />
    </div>
  )
}

export default Contents;

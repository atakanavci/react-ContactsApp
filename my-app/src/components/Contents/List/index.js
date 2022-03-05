import {useState} from 'react'

function List({contents}) {
const [filterText, setFilterText] = useState('');
const filtered = contents.filter((item) => {
    return Object.keys(item).some((key) => 
    item[key]
    .toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    );
});

console.log("filtered" , filtered);

return (
    <div>
   
      <input placeholder='Filter content' value={filterText} onChange = {(e) => setFilterText(e.target.value)} />


      <ul className='List'>
{filtered.map((contact , i) => (
<li key={i}>
  <span>{contact.fullname}</span>
  <span>{contact.phone_number}</span>
</li>
  ))}
   </ul>
     
   <p>
     Total contantcs : {filtered.length}
   </p>
    </div>
  );
}
export default List;

import React, {useState} from "react";

const AddFriend = () => {
  const [form, setForm] = useState({
    name: '',
    age:'',
    email: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }
  console.log(form)
  return (
    <div>
      <h2>Add Friend</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input name='age' id="age" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name='email' id="email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddFriend
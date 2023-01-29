import Form from "@/components/Form"
import { useContext } from "react";

const login = ({ UserContext }) => {
  const { user, setUser } = useContext(UserContext);

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const form = document.querySelector('#login-form');
    const formData = new FormData(form);
    const urlEncoded = new URLSearchParams(formData);
    try {
      let res = await fetch('http://localhost:4001/api/user/local/signin', {
        method: 'post',
        body: urlEncoded
      }); 
      let status = res.status;
      if(status == 200) {
        let data = await res.json();
        localStorage.setItem('jwt-token', data.token);
        setUser(data.user);
        // Back to home page
        window.location.href = '/';
      }
  
      if(status == 422) {
        let data = await res.json();
        let message = data.message;
        const msg = document.querySelector('#message');
        msg.textContent = message;
      }
      
    } catch(err) {
      if(err) console.log(err);
    }
  }

  return (
    <main className="flex flex-col justify-center items-center grow">
        <Form submitFunction={handleFormSubmit}>
            <label htmlFor="first_name">First Name: </label>
            <input type="text" id="first_name" name="first_name" />

            <label htmlFor="last_name">Last Name: </label>
            <input type="text" id="last_name" name="last_name" />

            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email_address" />

            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />

            <p id="message"></p>

            <input type="submit" value="Log In" className=" bg-sky-900 px-6 py-3 rounded-full m-4 font-bold text-white inner shadow-md"/>
        </Form>
    </main>
  )
}

export default login
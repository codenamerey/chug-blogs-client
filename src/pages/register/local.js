import Form from "@/components/Form"

const register = () => {
   const handleFormSubmit = async(e) => {
        e.preventDefault();

        const form = document.querySelector('#register');
        const error = document.querySelector('#message');
        const formData = new FormData(form);
        const urlEncoded = new URLSearchParams(formData);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/user/local/signup`, {
                method: 'post',
                body: urlEncoded,
            })
            const data = await res.json();

            if(data.success) {
                document.location.href = '/login'
            } else {
                error.textContent = data.message;
            }

        } catch(err) {
            if(err) throw err;
        }
   }

  return (
    <main className="flex flex-col justify-center items-center grow">
        <Form submitFunction={handleFormSubmit} id='register'>

            <label htmlFor="first_name">First Name: </label>
            <input type="text" id="first_name" name="first_name" />

            <label htmlFor="last_name">Last Name: </label>
            <input type="text" id="last_name" name="last_name" />

            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email_address" />

            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />

            <p id="message"></p>

            <input type="submit" value="Sign Up" className=" bg-sky-900 px-6 py-3 rounded-full m-4 font-bold text-white inner shadow-md"/>
        </Form>

        <p>or sign up with <a href={`${process.env.NEXT_PUBLIC_SERVER}/api/user/google/`}>Google.</a></p>
    </main>
  )
}

export default register
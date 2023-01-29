import Form from "@/components/Form"

const login = () => {
  return (
    <main className="flex flex-col justify-center items-center grow">
        <Form>
            <label htmlFor="first_name">First Name: </label>
            <input type="text" id="first_name" name="first_name" />

            <label htmlFor="last_name">Last Name: </label>
            <input type="text" id="last_name" name="last_name" />

            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email_address" />

            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="Log In" className=" bg-sky-900 px-6 py-3 rounded-full m-4 font-bold text-white inner shadow-md"/>
        </Form>
    </main>
  )
}

export default login
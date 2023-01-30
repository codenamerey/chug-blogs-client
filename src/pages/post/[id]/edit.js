import Form from "@/components/Form"
import { Editor } from "@tinymce/tinymce-react"
import { useRef } from "react"

const edit = ({ post }) => {
  const editorRef = useRef(null);
  const {title, description, content } = post

  const handlePostSubmit = async(e) => {
    e.preventDefault();
    const form = document.querySelector('#post');
    const formData = new FormData(form);
    formData.append('content', editorRef.current.getContent());
    const urlEncoded = new URLSearchParams(formData);

    try {
      const token = localStorage.getItem('jwt-token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/`, {
        method: 'put',
        body: urlEncoded,
        headers: {
          'Authorization': token
        }
      });
      const data = await res.json();
      if(data.success) {
        window.location.href = '/';
      } else {
        const error = document.querySelector('#message');
        error.textContent = data.message;
      }

    } catch(err) {
      const error = document.querySelector('#message');
      error.textContent = err;
    }
  }

  return (
    <main className="flex flex-col justify-center items-center mt-4 gap-y-2">
      <Form submitFunction={handlePostSubmit} id="post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" value={title} />
          <Editor
           onInit={(evt, editor) => editorRef.current = editor}
           initialValue={content}
           init={{
             height: 500,
             menubar: false,
             plugins: [
               'advlist autolink lists link image charmap print preview anchor',
               'searchreplace visualblocks code fullscreen',
               'insertdatetime media table paste code help wordcount'
             ],
             toolbar: 'undo redo | formatselect | ' +
             'bold italic backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | help',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
           }}
         />
          <label htmlFor="description">Post Description: </label>
         <textarea name="description" id="description" cols="30" rows="10" className="outline-none border p-2">{description}</textarea>

         <input type="submit" value="Update Post" className=" bg-sky-900 px-6 py-3 rounded-full m-4 font-bold text-white inner shadow-md"/>
      </Form>

      <p id="message"></p>
    </main>
  )
}

export default edit

export const getServerSideProps = async(context) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/${context.params.id}`);
        const post = await res.json();
        return {
            props: {
                post
            }
        }
    } catch(err) {
        if(err) throw err;
    }
}
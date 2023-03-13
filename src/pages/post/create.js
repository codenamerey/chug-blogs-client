import Form from "@/components/Form"
import { Editor } from "@tinymce/tinymce-react"
import { useRef } from "react"

const Create = () => {
  const editorRef = useRef(null);

  const handlePostSubmit = async(e) => {
    e.preventDefault();
    const form = document.querySelector('#post');
    const formData = new FormData(form);
    formData.append('content', editorRef.current.getContent());
    const urlEncoded = new URLSearchParams(formData);

    try {
      const token = localStorage.getItem('jwt-token');
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/`, {
        method: 'post',
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

  async function example_image_upload_handler (blobInfo, success, failure, progress) {

    const fd = new FormData();
    console.log(blobInfo);
    fd.append('file', blobInfo.base64())

    const data = new URLSearchParams(fd);

    const upload = fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/image`, {
      method: 'POST',
      body: data
    });



  };

  return (
    <main className="flex flex-col justify-center items-center mt-4 gap-y-2">
      <Form submitFunction={handlePostSubmit} id="post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          <Editor
           onInit={(evt, editor) => editorRef.current = editor}
           initialValue="<p>This is the initial content of the editor.</p>"
           plugins= 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen' 
           init={{
             height: 500,
             menubar: false,
             plugins: [
               'insertdatetime media table paste code help wordcount'
             ],
             toolbar: 'undo redo | formatselect | ' +
             'bold italic backcolor | alignleft aligncenter ' +
             'alignright alignjustify | bullist numlist outdent indent | ' +
             'removeformat | help | link image',
             content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
             images_upload_handler: example_image_upload_handler
           }}
         />
          <label htmlFor="description">Post Description: </label>
         <textarea name="description" id="description" cols="30" rows="10" className="outline-none border p-2"></textarea>

         <input type="submit" value="Create Post" className=" bg-sky-900 px-6 py-3 rounded-full m-4 font-bold text-white inner shadow-md"/>
      </Form>

      <p id="message"></p>
    </main>
  )
}

export default Create
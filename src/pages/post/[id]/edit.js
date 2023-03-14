import Form from "@/components/Form"
import { Editor } from "@tinymce/tinymce-react"
import { useRef } from "react"

const Edit = ({ post }) => {
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/${post._id}`, {
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

  async function example_image_upload_handler (blobInfo, success, failure, progress) {
    try{
      const fd = new FormData();
      console.log(blobInfo);
      fd.append('file', blobInfo.base64());

      const data = new URLSearchParams(fd);
      console.log('uploading...');
      const upload = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/image`, {
        method: 'POST',
        body: data
      });
      const res = await upload.json();
      console.log(res);

      return new Promise((resolve, reject) => {
        resolve(res.image);
      })

    }

    catch(err) {
      console.log('epic fail')
      failure(err);
    }

  };

  return (
    <main className="flex flex-col justify-center items-center mt-4 gap-y-2">
      <Form submitFunction={handlePostSubmit} id="post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" defaultValue={title}/>
          <Editor
           onInit={(evt, editor) => editorRef.current = editor}
           initialValue={content}
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
         <textarea name="description" id="description" cols="30" rows="10" className="outline-none border p-2" defaultValue={description}></textarea>

         <input type="submit" value="Update Post" className=" bg-sky-900 px-6 py-3 rounded-full m-4 font-bold text-white inner shadow-md"/>
      </Form>

      <p id="message"></p>
    </main>
  )
}

export default Edit

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
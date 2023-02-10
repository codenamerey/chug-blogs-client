import { useContext, useEffect } from "react";


const Index = ({article, UserContext}) => {
  const { title, content, _id } = article;
  const user = useContext(UserContext);
  useEffect(() => {
    const contentSect = document.querySelector('#content');
    contentSect.innerHTML = content;
  }, []);

  const handleDeleteClick = async() => {
    const token = localStorage.getItem('jwt-token');
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/${_id}`, {
        method: 'delete',
        headers: {
            'Authorization': token
        }
    });
    const data = await res.json();
    if(data.success) {
        window.location.href = '/';
    } else {
        console.log(data.error);
    }
  }

  return (
    <main className=" grow flex flex-col m-10 items-center">
        <article className=" text-justify md:w-1/2 p-2 flex flex-col gap-y-2 bg-white shadow-lg">
            <h1 className="text-2xl">{title}</h1>
            <section id="content">
            </section>
            {
                (user._id == article.author._id) ? (
                    <button className="bg-red-700 text-white font-bold py-3 px-6 rounded-full" onClick={handleDeleteClick} >Delete</button>
                )
                : null
            }
        </article>
    </main>
  )
}

export default Index

export const getServerSideProps = async(context) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}
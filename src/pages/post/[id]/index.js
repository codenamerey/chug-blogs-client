import { useEffect } from "react";

const index = ({article}) => {

  const { title, content } = article;

  useEffect(() => {
    const contentSect = document.querySelector('#content');
    contentSect.innerHTML = content;
  }, []);

  return (
    <main className=" grow flex flex-col m-10 items-center">
        <article className=" text-justify md:w-1/2 p-2 flex flex-col gap-y-2 bg-white shadow-lg">
            <h1 className="text-2xl">{title}</h1>
            <section id="content">
            </section>
        </article>
    </main>
  )
}

export default index

export const getServerSideProps = async(context) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/post/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}
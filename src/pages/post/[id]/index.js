import { useEffect } from "react";

const index = ({article}) => {

  const { title, content } = article;

  useEffect(() => {
    const contentSect = document.querySelector('#content');
    contentSect.innerHTML = content;
  }, []);

  return (
    <article className="text-center p-2 flex flex-col gap-y-2">
        <h1 className="text-2xl">{title}</h1>

        <section id="content">

        </section>
    </article>
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
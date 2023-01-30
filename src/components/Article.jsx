import Link from "next/link";

const Article = ({ article }) => {
    const {title, description} = article;

  return (
    <article className='p-2 shadow w-1/4 flex flex-col aspect-video justify-center items-center bg-gradient-to-tr from-orange-700 to-orange-900 text-white text-center'>
        <Link href={`/post/${article._id}`}>
            <h1 className=' text-2xl font-bold'>{title}</h1>
            <h3 className=' text-xl'>{description}</h3>
        </Link>
    </article>
  )
}

export default Article
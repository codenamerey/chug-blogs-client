import Link from "next/link";
import { useContext } from "react";

const Article = ({ article, UserContext }) => {
    const {title, description, author} = article;
    const { _id } = useContext(UserContext);

  return (
    <article className='p-2 shadow md:w-1/4 flex flex-col aspect-video justify-center items-center bg-gradient-to-tr from-orange-700 to-orange-900 text-white text-center'>
        <Link href={`/post/${article._id}`}>
            <h1 className=' text-2xl font-bold'>{title}</h1>
            <h3 className=' text-xl'>{description}</h3>
        </Link>

        {
            (_id == author._id) ? (
                (
                    <Link href={`/post/${article._id}/edit`}>
                        Edit
                    </Link>
                )
            ) : author.first_name
        }
    </article>
  )
}

export default Article
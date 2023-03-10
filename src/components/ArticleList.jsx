import Article from "./Article"

const ArticleList = ({ articles, UserContext }) => {
  return (
    <>
        <h1 className="text-2xl">Blog Posts:</h1>
        <div className=" flex grow flex-wrap w-full gap-2 flex-col md:flex-row justify-center">
            {
                articles.map(article => {
                    return <Article article={article} UserContext={UserContext} key={article._id}></Article>
                })
            }
        </div>
    </>
  )
}

export default ArticleList
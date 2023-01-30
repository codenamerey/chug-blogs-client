import Article from "./Article"

const ArticleList = ({ articles }) => {
  return (
    <>
        <h1 className="text-2xl">Blog Posts:</h1>
        <div className=" flex grow flex-wrap w-full gap-2">
            {
                articles.map(article => {
                    return <Article article={article}></Article>
                })
            }
        </div>
    </>
  )
}

export default ArticleList
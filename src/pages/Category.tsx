import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryNewsStart } from "../redux/actions/news.action";
import { NewsState } from "../redux/reducers/news.reducer";
import NewsItem from "../components/NewsItem";

export default function Category() {
  const categoryNews = useSelector((state: NewsState) => state.categoryNews)
  
  let { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() =>{
    if(slug){
      dispatch(getCategoryNewsStart(slug))
    }else{
      navigate("/")
    }
  },[slug, dispatch, navigate])
  
  return (
    <div className="container">
      <div className="row">
      {
        categoryNews.length > 0 ? categoryNews.map((cN: any, index: number) =>(
          <NewsItem item={cN} key={index}/>
        )):<p className="text-danger display-5">No News Found</p>
      }
      </div>
    </div>
  )
}

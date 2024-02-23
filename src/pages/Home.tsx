import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../components/NewsItem";
import { useEffect } from "react";
import { getNewsStart } from "../redux/actions/news.action";

export default function Home() {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(getNewsStart());
  }, [news.length,dispatch]);
  return (
    <div className="container">
      <div className="row">
        {news.length > 0 ? (
          news.map((n: any, i: number) => <NewsItem key={i} item = {n}/>)
        ) : (
          <p className="text-danger display-5">No News Found</p>
        )}
      </div>
    </div>
  );
}

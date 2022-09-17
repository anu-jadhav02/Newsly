//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import apiKey from './data/configs';
import NewsContent from './NewsContent/NewsContent';
import axios from 'axios';
import Footer from './components/footer/Footer';


function App() {

  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResult, setnewsResult] = useState(); 
  const [loadMore, setLoadMore] = useState(20);

  console.log(process.env);

  const newsApi = async () => {
    try{

      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}`);

      setnewsArray(news.data.articles);
      setnewsResult(news.data.totalResults);
    } catch(error){
      console.log(error);
    }
  };

  //console.log(newsArray);
  useEffect(() => {
   newsApi();
  }, [newsResult, loadMore, category]);
  

  return (
    <div className="app" id="#home">
    <Nav setCategory={setCategory}/>
    {newsResult && (
        <NewsContent
          newsArray={newsArray}
          newsResult={newsResult}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          />
          )}
          <Footer />
    </div>
  );
}

export default App;

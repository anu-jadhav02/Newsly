import { Container } from '@material-ui/core';
import React from 'react';
import NewsCard from '../components/NewsCard/NewsCard';
import "./NewsContent.css";


const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResult }) => {
  return (
    <Container maxWidth="md">

        <div className='content'>
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use NEWSLY app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>

         {/* First this */}
         {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {/* Then this */}
        {loadMore <= newsResult && (
          <>
            <hr />
            <a
              href='https://www.oneindia.com/'
              className="loadMore"
              // onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </a>
          </>
        )}

        </div>
    </Container>
  )
}

export default NewsContent;
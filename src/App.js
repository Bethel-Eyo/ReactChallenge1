import React, {useState, useEffect} from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [filteredArticles, setFilteredArticles] = useState(articles)

    const mostUpvotedArticles = articles.concat().sort((a, b) => {
        if (a.upvotes > b.upvotes) {
        return -1;
        }
        if (a.upvotes < b.upvotes) {
        return 1;
        }
        return 0;
    });
  
    const mostRecentArticles = articles.concat().sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);
        if (aDate > bDate) {
        return -1;
        }
        if (aDate < bDate) {
        return 1;
        }
        return 0;
    });
  
    useEffect(() => {
        setFilteredArticles(mostUpvotedArticles)
    }, [])

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={() => setFilteredArticles(mostUpvotedArticles)} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={() => setFilteredArticles(mostRecentArticles)} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={filteredArticles} />
        </div>
    );

}

export default App;

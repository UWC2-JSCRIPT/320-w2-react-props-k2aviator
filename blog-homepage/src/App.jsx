import React from 'react'
import missedArticles from './missed-articles.json'
import yourArticles from './your-articles.json'
import Article from './Article'
import './Articles.css'

//can use same article component by providing different CSS classes
const articlesArray = missedArticles
console.log(missedArticles)
const yourArticlesArray = yourArticles
console.log(yourArticles)

function App() {
  return (
    <div>
    <h1>For you</h1>
    <div>
    <Article articles={yourArticlesArray} articlesType="yourClass"/>
    </div>
    <h1>In case you missed it</h1>
    <div>
    <Article articles={articlesArray} articlesType="missedClass"/>
    </div>
    </div>

  );
}

export default App;

import React  from 'react'
import PropTypes from 'prop-types'
import './Articles.css'

function Article({articles,articlesType}) {
    Article.propTypes = {
        articlesType: PropTypes.string,
        test: PropTypes.string
    }
    console.log("office hour", articlesType)
    let className = articlesType === 'missedClass' ? 'missedClass' : 'yourClass'
    
    //custom css
    let flexClass = `${className}`
    let flexItem = `${className}-item`
    let flexImage = `${className}-image`
    let flexTextTop = `${className}-text-top`
    let flexTextBottom = `${className}-text-bottom`
    const articleList = articles.map((article,index) =>{ //map itterates over each item in an array

        //dates

        let articleDate = new Date(article.postedDate)
        let articleMonth = articleDate.getMonth()
        let articleDay = articleDate.getDate()
  
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
         
        //bookmark
        const bookmarkImage = <img width="20px" src="https://cdn-icons-png.flaticon.com/512/494/494568.png" alt="bookmark" className='bookmark'></img>


        //audio available
        const audioImage = <img width="20px" src="https://cdn-icons-png.flaticon.com/512/59/59284.png" alt="audio" className='audio'></img>
        let audioAvailable = article.hasAudioAvailable === false ? '' : audioImage
        let audioAvailableText = article.hasAudioAvailable === false ? '' : "Audio available"
        
        //console.log(audioAvailable)
        
        //membership 
        let memberPreview;
        if (article.memberPreview){
            memberPreview = 'Member preview'
        } 

        const memberPreviewImage = <img width="20px" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" className='member-preview-image' alt="member preview"></img>
        let memberPreviewDisplay = article.memberPreview === false ? '' : memberPreviewImage
   
        
        //medium member
        let authorMember;
        if (article.author.isMediumMember){
            authorMember = "medium-member"
        } else {
            authorMember = "medium-non-member"
        }
        
       
        return (
        <div key={index} className={flexClass}>      
                <div className={flexItem}>
                    <a href={article.link} target="_blank" rel="noreferrer"><img src={article.image} className={flexImage} alt="story"></img></a>
                    <div>
                        <div className={flexTextTop}>
                            {memberPreviewDisplay}{memberPreview} {audioAvailable} {audioAvailableText}
                            <h3><a href={article.link} target="_blank" rel="noreferrer">{article.title}</a></h3>
                            <p><a href={article.link} target="_blank" rel="noreferrer">{article.description}</a></p>
                            </div>
                            <div className={flexTextBottom}>
                            <img src={article.author.image} width="50px" className={authorMember} alt="author"></img><br></br>
                            {article.author.name}<br></br>
                            {monthNames[articleMonth]} {articleDay} - {article.minutesToRead} minute read
                            {bookmarkImage}
                            </div>
                    </div>
                </div>        
        </div>
        )
    })
    return(
        <div className={flexClass}>
            {articleList}       
        </div>
    )
  }
  
  export default Article;
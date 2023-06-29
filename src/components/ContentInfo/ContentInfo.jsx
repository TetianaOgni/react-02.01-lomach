import React, {Component} from "react";
import { getNews } from "services/getNews";
class ContentInfo extends Component{
    state = {
     news: null
    }

    componentDidUpdate(prevProps, prevState){
        console.log(2, this.props)
        if(prevProps.searchText !== this.props.searchText){
           getNews(this.props.searchText)
           .then((response) => response.json())
           .then((news) => {
            console.log("fetch:", news)
            this.setState({news: news.articles})
        })
        }
    }
    render(){
        const {news} = this.state
        return(
        <ul>
          { news && news.map(el=> {
             return <li>{el.title}</li>
          })}
        </ul>
        )
    }
}
export default ContentInfo
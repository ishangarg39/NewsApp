import React, { Component } from 'react'
import Loader from './Loader'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        catgory:"general",
        pageSize:5,
        country:'in'
    }

    static propTypes={
        catgory:PropTypes.string,
        pageSize:PropTypes.number,
        country:PropTypes.string
    }

    constructor(props) {
        super(props);
        console.log("cons")
        this.page=1;
        this.state = {
            articles: [], loading:false
        }
        document.title=`${this.props.category}-NewsMonkey`
    }
    async componentDidMount(page){
        console.log("cDm");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbb549e6e5ae4165a1af71860a0e1505&page=${page}&pagesize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data=await fetch(url);
        let parsedata=await data.json();
        console.log(parsedata);
        this.setState({articles:parsedata.articles,
             totalResults:parsedata.totalResults,
            loading:false});
    }

    handlePrev=async()=>{
        console.log("prev");
        this.page=this.page-1;
        this.componentDidMount(this.page)
    }

    handleNext=async()=>{
        console.log("next");
        this.page=1+this.page;
        console.log(this.page)
        console.log(Math.ceil(this.state.totalResults/10));
        this.componentDidMount(this.page)
    }

    render() {
        return (
            <div>

                <div className="container my-3 ">
                    <h1 className='text-center'  style={{margin:"30px" }}>News Component</h1>
                    {this.state.loading&&<Loader/>}
                    <div className="row">
                        {(!this.state.loading)&&this.state.articles.map((element) => {

                            return(
                            <div className="col-md-4 mb-4"  key={element.url}>
                                <NewsItem  title={!element.title?"":element.title.slice(0,45)}
                                 desc={!element.description?"":element.description.slice(0,80)+"..."} 
                                 imageUrl={element.urlToImage} newsUrl={element.url}
                                 author={element.author} date={element.publishedAt} source={element.source.name}/>
                            </div>)
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                <button disabled={this.page===1} type="button" className="btn btn-dark" onClick={this.handlePrev}>&larr;Previous</button>
                <button disabled={this.page===Math.ceil(this.state.totalResults/10)} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>

                </div>
            </div>
        )
    }
}

export default News

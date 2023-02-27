import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl, author, date ,source} = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "5%" ,zIndex:"1"}}>
                        {source}</span>
                                        <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="text-muted">Author: {!author ? "Unknown" : author}  Date: {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-btn-sn btn-dark">Read More...</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem

import React, {Component} from 'react';
import './books.css';


class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  drawBooks(){
    var bookSection5 = <div className="singleBookContainer">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/covers/5.jpg" alt="book5" className="bookCoverImage"/>
      <h5>법대로 합시다</h5>
      <p className="bookDescription">2016.02. 지식과감성#</p>
      <ul className="list-inline">
        <li><a href="http://digital.kyobobook.co.kr/digital/ebook/ebookDetail.ink?LINK=NVE&category=001&barcode=4801159610081" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/kyobo.png" className="bookStoreIcon" alt="kyobo"/></a></li>
        <li><a href="https://book.naver.com/bookdb/book_detail.nhn?bid=10236421" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/naver.png" className="bookStoreIcon" alt="naver"/></a></li>
        <li><a href="http://www.yes24.com/Product/Goods/30660689" target="_blank"  rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/needleworm/needleworm.github.io/src/images/books/stores/yes24.png" className="bookStoreIcon" alt="yes24"/></a></li>
      </ul>
    </div>
    

    return(
      <div className="bookContainer">
        {bookSection5}
      </div>
    )
  }

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Books</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section id="books" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawBooks()}
      </section>
    );
  }
}
  
export default Books;

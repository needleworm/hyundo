import React, {Component} from 'react';
import './App.css';
import Books from "./components/books"
import Contact from "./components/contact"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latestButton:"none",
      /* 
        content
          none
          books
          contact
      */
      content:"none",
      sns:{
        email: "bhban@kakao.com",
      }
    }
    this.closeSideMenu = this._closeSideMenu.bind(this)
    this.openSideMenu = this._openSideMenu.bind(this)
  }

  
  _closeSideMenu(){
    var contentWrapper = document.querySelector('.content-wrapper')
    var panelCover = document.querySelector('.panel-cover')
    if (contentWrapper.classList.contains('showing')){
      var currentWidth = panelCover.clientWidth
      if (currentWidth < 960){
        contentWrapper.classList.remove('panel-cover--collapsed')
        panelCover.classList.remove('panel-cover--collapsed')
        panelCover.style.maxWidth = '100%'
      } else {
        contentWrapper.classList.remove('panel-cover--collapsed')
        panelCover.classList.remove('panel-cover--collapsed')
        panelCover.style.maxWidth = '100%'
        panelCover.animate(
          [ // Keyframes
            {'max-width': '530px', 'width': '40%'}, // from
            {'width': '100%'}, // to
          ], { // options
            duration: 400,
            easing: 'ease-in-out'
          } 
        )
      }
      contentWrapper.classList.remove('showing')
    }
  }

  _openSideMenu(){
    var contentWrapper = document.querySelector('.content-wrapper')
    if (contentWrapper.classList.contains('showing')){
      return
    }

    var panelCover = document.querySelector('.panel-cover')
    var currentWidth = panelCover.clientWidth
    if (currentWidth < 960){
      panelCover.classList.add('panel-cover--collapsed')
    } else {
      panelCover.style.maxWidth = currentWidth
      panelCover.animate(
        [ // Keyframes
          {'width': '100%'}, // from
          {'max-width': '530px', 'width': '40%'}, // to
        ], { // options
          duration: 400,
          easing: 'ease-in-out'
        } 
      )
      panelCover.classList.add('panel-cover--collapsed')
    }
    contentWrapper.classList.add('showing')
  }

  drawHeader(){

    var profilePicButton = <a href="#home" title="Home">
      <img src="https://cdn.jsdelivr.net/gh/needleworm/hyundo/src/images/profile_pic.jpg" className="user-image" alt="My Profile"
        onClick={
          function(e){

            this.setState({
              latestButton: "none",
              content:"none"
            })
            this.closeSideMenu()
          }.bind(this)
        }
      />
    </a>

    var books = <li className="navigation__item">
      <a href="#books" title="Books" className="panel-button projects-button"
        onClick={
          function(e){
            if (this.state.latestButton === "books"){
              this.setState({
                content: "none",
                latestButton: "none"
              })
              this.closeSideMenu()
            } else{
              this.setState({
                content: "books",
                latestButton: "books"
              })
              this.openSideMenu()
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }
      >
        <i className="fas fa-book"></i>&nbsp;Books
      </a>
    </li>

    var contact = <li className="navigation__item">
      <a href="#contact" title="Contact Me"
        onClick={
          function(e){
            if (this.state.latestButton === "contact"){
              this.setState({
                content: "none",
                latestButton: "none"
              })
              this.closeSideMenu()
            } else{
              this.setState({
                content: "contact",
                latestButton: "contact"
              })
              this.openSideMenu()
              var navigationWrapper = document.querySelector('.navigation-wrapper')
              var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
              navigationWrapper.classList.toggle('visible')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
              btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
              btnMobileMenuIcon.classList.toggle('animated')
              btnMobileMenuIcon.classList.toggle('fadeIn')
            }
          }.bind(this)
        }>
        <i className="far fa-envelope"></i>&nbsp;Contact
      </a>
    </li>

    
    var mobileButtenMenu =  <span className="mobile btn-mobile-menu"
      onClick={
        function(e){
          var navigationWrapper = document.querySelector('.navigation-wrapper')
          var btnMobileMenuIcon = document.querySelector('.btn-mobile-menu__icon')
          navigationWrapper.classList.toggle('visible')
          navigationWrapper.classList.toggle('animated')
          navigationWrapper.classList.toggle('bounceInDown')
          btnMobileMenuIcon.classList.toggle('fa-caret-square-down')
          btnMobileMenuIcon.classList.toggle('fa-caret-square-up')
          btnMobileMenuIcon.classList.toggle('animated')
          btnMobileMenuIcon.classList.toggle('fadeIn')
        }
      }
    >
      <i className="far fa-caret-square-down btn-mobile-menu__icon"></i>
      <i className="far fa-caret-square-up btn-mobile-close__icon hidden"></i>
    </span>

    return(
      <div>
        {mobileButtenMenu}
        <header className="panel-cover" style={{background_image: "https://cdn.jsdelivr.net/gh/needleworm/hyundo/src/images/background.jpg", maxWidth:'100%'}}>
          <div className="panel-main">
            <div className="panel-main__inner panel-inverted">
              <div className="panel-main__content">
                {profilePicButton}
                <h1 className="panel-cover__title panel-title">Hyundo Lee</h1>
                <hr className="panel-cover__divider"/>
                <p className="panel-cover__description">작가</p>
                <p className="panel-cover__description"><a href="https://www.mois.go.kr">행정안전부</a> 소속</p>
                <p className="panel-cover__description">고려대학교 행정전문대학원 석사과정 재학</p>
                <hr className="panel-cover__divider panel-cover__divider--secondary"/>
                <div className="navigation-wrapper">
                  <br/>
                  <nav className="cover-navigation navigation--social">
                    <ul className="navigation">
                      {books}
                      {contact}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-cover--overlay"></div>
        </header>
      </div>
    )
  }

  drawBody(){
    var footer = <div><footer className="footer">
        <span className="footer__copyright">&copy; 2022. Hyundo Lee All rights reserved.</span>
      </footer>
      </div>
    

    return (
      <div className="content-wrapper">
        <div className="content-wrapper__inner">
          {this.drawContents()}
          {footer}
        </div>
    </div>
    )
  }

  drawContents(){
    if (this.state.content === "none"){
      return (
        <div></div>
      )
    } else if (this.state.content === "books"){
        return (
          <Books/>
        )
    } else if (this.state.content === "contact"){
      return (
        <Contact/>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {this.drawHeader()}
        {this.drawBody()}
      </div>
    );
  }
}

export default App;
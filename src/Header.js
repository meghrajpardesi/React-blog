import React from 'react';

class Header extends React.Component {
    render(){
      return(
        <header className="masthead  quickfix" >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">A Blog Theme by Start Bootstrap</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      );
    }
}
export default Header;
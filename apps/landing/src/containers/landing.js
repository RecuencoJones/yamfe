import * as React from 'react';

export function Landing({ pushState }) {
  const handleClick = (event) => {
    event.preventDefault();
    pushState(event.currentTarget.attributes.href.value);
  }

  return (
    <main>
      <div id="warhammerCampaign">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <a className="bypass" href="/browse?category=warhammer" onClick={ handleClick }>
            <div className="carousel-item active">
              <img className="d-block w-100 h-100" src="/assets/0.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src="/assets/1.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src="/assets/2.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src="/assets/3.jpg" alt="Fourth slide" />
            </div>
            </a>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="p-4 text-center">
          <a className="btn btn-link btn-primary" href="/browse?category=warhammer" onClick={ handleClick }>
            Browse Warhammer products
          </a>
        </div>
      </div>
    </main>
  );
}

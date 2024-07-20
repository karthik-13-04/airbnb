/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Hero.css';

const photos1 = [
  { src: '/images/photo1.jpg', content: [<h4>GO VIP with Kevin</h4>, 'Hosted by kevin', <h4>Coming july</h4>] },
  { src: '/images/photo2.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo3.png', content: [<h4>Join a living room session with Doja</h4>, 'Hosted by Doja Cat', <h4>Coming october</h4>] },
  { src: '/images/photo4.png', content: [<h4>Train at the X-Mansion</h4>, 'Hosted by jubilee', <h4>Booking closed</h4>] },
  { src: '/images/photo5.png', content: [<h4>Drift off in the Up house</h4>,'Hosted by Carl FredricksenHosted by Carl Fredricksen' ,<h4>Sold out</h4>] },
  { src: '/images/photo6.png', content: [<h4>Drift off in the Up house</h4>,'Hosted by Carl FredricksenHosted by Carl Fredricksen' ,<h4>Sold out</h4> ] },
  { src: '/images/photo7.png', content: [<h4>Drift off in the Up house</h4>,'Hosted by Carl FredricksenHosted by Carl Fredricksen' ,<h4>Sold out</h4>] },
  { src: '/images/photo8.png', content: [<h4>Drift off in the Up house</h4>,'Hosted by Carl FredricksenHosted by Carl Fredricksen' ,<h4>Sold out</h4>] },
  { src: '/images/photo9.png', content: [<h4>Drift off in the Up house</h4>,'Hosted by Carl FredricksenHosted by Carl Fredricksen' ,<h4>Sold out</h4>] },
  { src: '/images/photo10.png', content: [<h4>Drift off in the Up house</h4>,'Hosted by Carl FredricksenHosted by Carl Fredricksen' ,<h4>Sold out</h4>] }
];

const photos2 = [
  { src: '/images/photo11.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo12.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo13.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo14.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo15.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo16.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo17.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo18.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo19.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] },
  { src: '/images/photo20.png', content: [<h4>Stay in prince,s purple rain Hous</h4>, 'Host by wendy',<h4> Coming August</h4>] }
];

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="photo-section">
        {photos1.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={`photo ${index + 1}`} />
            <div className="photo-content">
              {photo.content.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="title-section">
        <h1>Past Experiences</h1>
        <div className="photo-section">
          {photos2.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.src} alt={`photo ${index + 11}`} />
              <div className="photo-content">
                {photo.content.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

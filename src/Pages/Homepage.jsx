import './Homepage.css';
import ClosingSlider from '../Components/ClosingSlider.jsx';

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="social-wrapper">
          
          <div className="social-column">
            <a href="https://github.com/letmaplespillthetea" target="_blank" rel="noopener noreferrer">
              <img src="/social media/github.png" alt="Github" />
            </a>
            <a href="https://www.instagram.com/lemoontear/" target="_blank" rel="noopener noreferrer">
              <img src="/social media/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.behance.net/letmaplespillthetea" target="_blank" rel="noopener noreferrer">
              <img src="/social media/behance.png" alt="Behance" />
            </a>
            <a href="https://www.reddit.com/user/kohaku555/" target="_blank" rel="noopener noreferrer">
              <img src="/social media/reddit.png" alt="Reddit" />
            </a>
          </div>
        </div>

        <section className="intro-section">
          <div className="intro-left">
            <div className="image-wrapper">
              <img
                src="https://i.pinimg.com/736x/d0/71/20/d071204d492ebcc79c2c47913102ca67.jpg"
                alt="Profile"
                className="profile-image"
              />
              <div className="maple">
                <img src="gif/little star.gif" alt="maple" className="maple" />
              </div>
            </div>
          </div>

          <div className="intro-arrow">
            <img src="/arrow.svg" alt="arrow" className="arrow-img" />
          </div>

          <div className="intro-right">
            <div className="hello-text">
              Hello! I am <span className="highlight-name">Minh Tam LE</span>~
            </div>
            <p className="subtitle">A girl on a mission to become imaginative and she</p>
            <h1 className="intro-heading">
              loves to play around with <span className="highlight-pixels">pixels</span>...
            </h1>
            <p className="description">
              Whether it’s creating visually stunning art, developing games, or exploring the
              technical aspects of image manipulation, there’s a lot you can do with pixels!
            </p>
          </div>
        </section>

        <section className="work-section">
          <h2 className="work-title">Hoping to grow both creatively and technically.</h2>
          <p className="work-text">
            Currently, I'm a final year student at{' '}
            <span style={{ color: '#FF4D56'}}> UET-VNU</span>
            , <br/> and I’m actively seeking a Master’s program <br/> in
            <span style={{ color: '#FF4D56'}}> Computer Graphics </span>
             and 
            <span style={{ color: '#FF4D56'}}> Virtual Production</span>.
          </p>
        </section>

        <section className="closing-section">
          <ClosingSlider/>
          <div className="gif-container">
            <img src="/gif/star.gif" className="gif-item" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;

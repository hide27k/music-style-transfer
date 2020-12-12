import movie from './banner.mov'
import './Banner.css';

function Banner() {
  return (
    <div id="banner">
      <h1 id="title">Music Style Transfer</h1>
      <p id="name">Paul Yoo, Sherry Yang, and Hideyuki Komaki</p>
      <a href="#introduction">
        <div class="arrow"></div>
      </a>
      <video autoPlay loop muted playsInline src={movie} id="video"></video>
    </div>
  )
}

export default Banner;
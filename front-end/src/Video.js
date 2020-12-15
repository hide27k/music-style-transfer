import './Video.css'

function Video() {
  return (
    <div id="movie">
      <h2>Movie</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-7oCCaz48f4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video;
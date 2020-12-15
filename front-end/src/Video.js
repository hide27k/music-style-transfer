import './Video.css'

function Video() {
  return (
    <div id="movie">
      <h2>Video</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-7oCCaz48f4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Video;
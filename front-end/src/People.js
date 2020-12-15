import hide from './hide.jpg';
import paul from './paul.jpg';
import sherry from './sherry.jpg';

import './People.css'

function People() {
  return (
    <div id="people">
      <h2>People</h2>
      <div id="profiles">
        <div className="profile">
         <img src={paul} alt="Paul"/>
         <p>Paul Yoo</p>
        </div>
        <div className="profile">
          <img src={sherry} alt="Sherry" />
          <p>Sherry Yang</p>
        </div>
        <div className="profile">
          <img src={hide} alt="Hide" />
          <p>Hideyuki Komaki</p>
        </div>
      </div>
    </div>
  )
}

export default People;
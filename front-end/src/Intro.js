import StayWithMe from './stay_with_me.jpg';
import MyOnlyWish from './my_only_wish.jpg';
import Questionmark from './Ask_permission.svg';
import './Intro.css';

function Intro() {
  return (
    <div id="introduction">
      <h2>Summary</h2>
      <div className="description">
              <p>We present our deep learning project Music Style Transfer that takes a song as
        input, modifies it with a different style that was pre-trained with our model, and outputs a
        modified version of the song. The model takes 50 samples (values of the amplitudes)
        from the original song each time and outputs 50 values. After a series of consecutive
        sampling and generating, it concatenates all the values and thus yields a version of the
        song in a different style that still preserves the original melody, vocal, major instruments
        used in the background, etc. as much as possible.
        </p>
      </div>
      <div className="box">
        <img id="sample-img-1" src={StayWithMe} alt="my only wish"/>
        <div id="cross"><span></span></div>
        <img id="sample-img-2" src={MyOnlyWish} alt="mozart"/>
        <div id="equal"><span></span></div>
        <img id="question" src={Questionmark} alt="question mark"/>
      </div>
    </div>
  )
}

export default Intro;
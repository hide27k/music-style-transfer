import React from 'react'
import MyOnlyWish from './my_only_wish.jpg';
import TimeToLove from './time_to_love.jpg';
import StayWithMe from './stay_with_me.jpg';
import TimeToLoveNoiseless from './time_to_love_noiseless.wav';
import StayWithMeNoiseless from './stay_with_me_noiseless.wav';
import NowPlaying from './now_playing.gif';
import './Demo.css';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      music: 0,
      style: 0,
      mframe: {
        0: "image-wrapper on",
        1: "image-wrapper",
        2: "image-wrapper"
      },
      mblur: {
        0: "",
        1: "off",
        2: "off"
      },
      audio: TimeToLoveNoiseless,
      title: "My Only Wish - Britney Spears"
    }
  }

  handleClickMusic(v) {
    let titleList = ["My Only Wish - Britney Spears", "Time to Love - October", "Stay with me - Sam Smith"];
    let audioList = [TimeToLoveNoiseless, TimeToLoveNoiseless, StayWithMeNoiseless];

    let newFrame = this.state.mframe;
    newFrame[this.state.music] = "image-wrapper";
    newFrame[v] = "image-wrapper on";

    let newblur = this.state.mblur;
    newblur[this.state.music] = "off";
    newblur[v] = "";

    this.setState({
      mframe: newFrame,
      mblur: newblur,
      music: v,
      audio: audioList[v],
      title: titleList[v]
    },function(){
      this.refs.audio.pause();
      this.refs.audio.load();
    })
  }

  render() {
    return (
      <div id="demo">
        <h2>Music Style Transfer Demo</h2>
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
        <div id="music-select" >
          <div id="select-box">
            <div className="">
              <h3>Choose your music ♫</h3>
            </div>
            {/* <div className="btn">
              <h3>Upload your own music ♫</h3>
            </div> */}
            {/* <div>
              <audio controls></audio>
            </div> */}
          </div>
          <div id="music-box">
            <div id="music-0" className={this.state.mframe[0]} onClick={() =>this.handleClickMusic(0)}>
              <img className={this.state.mblur[0]} src={MyOnlyWish} alt="my only wish"/>
              <p>My Only Wish</p>
              <p>Britney Spears</p>
            </div>
            <div id="music-1" className={this.state.mframe[1]} onClick={() =>this.handleClickMusic(1)}>
              <img className={this.state.mblur[1]} src={TimeToLove} alt="my only wish"/>
              <p>Time to love</p>
              <p>October</p>
            </div>
            <div id="music-2" className={this.state.mframe[2]} onClick={() =>this.handleClickMusic(2)}>
              <img className={this.state.mblur[2]} src={StayWithMe} alt="my only wish"/>
              <p>Stay with me</p>
              <p>Sam Smith</p>
            </div>
          </div>
          <div className="cb"></div>
        </div>
        {/* <div id="cross-wrapper">
          <div id="cross2"><span></span></div>
        </div> */}
        {/* <div id="style-select" >
          <div id="select-box">
            <div className="btn select">
              <h3>Choose your style ♬</h3>
            </div>
            <div className="btn">
              <h3>Upload your own style ♬</h3>
            </div>
            <div>
              <audio controls></audio>
            </div>
          </div>
          <div id="music-box">
            <div id="style-0" className={this.state.sframe[0]} onClick={() =>this.handleClickStyle(0)}>
              <img className={this.state.sblur[0]} src={MyOnlyWish} alt="my only wish"/>
              <p>My Only Wish</p>
            </div>
            <div id="style-1" className={this.state.sfråame[1]} onClick={() =>this.handleClickStyle(1)}>
              <img className={this.state.sblur[1]} src={MyOnlyWish} alt="my only wish"/>
              <p>My Only Wish</p>
            </div>
            <div id="style-2" className={this.state.sframe[2]} onClick={() =>this.handleClickStyle(2)}>
              <img className={this.state.sblur[2]} src={MyOnlyWish} alt="my only wish"/>
              <p>My Only Wish</p>
            </div>
            <div id="style-3" className={this.state.sframe[3]} onClick={() =>this.handleClickStyle(3)}>
              <img className={this.state.sblur[3]} src={MyOnlyWish} alt="my only wish"/>
              <p>My Only Wish</p>
            </div>
          </div>
        </div> */}
        <div className="cb"></div>
        <div className="arrow-result bounce"></div>
        <div className="audio-result">
          <p>
            {this.state.title}
          </p>
          <img className="new-music" src={NowPlaying} alt="music" />
          <br></br>
          <audio controls ref="audio">
            <source src={this.state.audio} type="audio/wav" />
          </audio>
        </div>
      </div>
    )
  }
}

export default Demo;
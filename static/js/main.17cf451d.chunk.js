(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(1),a=i.n(n),o=i(7),r=i.n(o),c=(i(13),i(2)),d=i(3),l=i(5),h=i(4),u=(i(14),i.p+"static/media/architecture.1a7681c0.jpg"),m=i.p+"static/media/stay_gen.82c84366.wav",p=i.p+"static/media/stay_diret_style.1fe79057.wav";i(15);var j=function(){return Object(s.jsxs)("div",{id:"approach",children:[Object(s.jsx)("h2",{children:"Technical Approach "}),Object(s.jsxs)("div",{id:"detail",children:[Object(s.jsx)("h3",{children:"Problem Statement and the Original Goal"}),Object(s.jsx)("p",{children:"The original goal of our music style transfer was taking two inputs, one song as the one to be modified and one song to be the desired style (i.e., a pop song transferred into Beethoven\u2019s style). Such automated music generation study involves multiple complications such as learning the style, generating the music, alternating amplitudes to comply with the targeted style while preserving the melody/lyrics of the original input, etc. Not only is this study combining polyphonic songs unprecedented, but also such an operation that writes a song into a different genre is even hard for humans to imagine and might require skilled musicians to perform some fine tuning. Therefore, taking two inputs and performing a style transfer on the go turns out to be more complex than expected. Due to limited time, we decided to train the model with the style of a certain song ahead of time and only take one input song to be transferred. If we want more styles, we will need to train the model on separate songs. We believe this is a core step towards the original goal of building the music style transfer."}),Object(s.jsx)("h3",{children:"Data"}),Object(s.jsx)("p",{children:"All the audio files used are in wav format because they can then directly be interpreted as an array of amplitudes. Since we are just training to learn the style of one song, we only use one song as input but the number of values are sufficient. On average, there are 44,100 values of amplitudes in 1 second of a song and a song is over 3 minutes. In order to train the network to learn a style/genre, we also used an additional dataset consisting of 10 genres with 100 songs of each genre. All the songs are cropped to 30 seconds. More details on how this is used in the training process will be included in the training section below."}),Object(s.jsx)("h3",{children:"Top-level architecture of the model"}),Object(s.jsx)("p",{children:"Our model contains 3 components. The major model samples 50 values of amplitudes from the input and generates the next 50 predicted values. During training, to learn about the style/genre of the input, we introduce a second model that is capable of classifying 10 different genres. This model takes 40 features of an audio file and outputs the predicted classification. In order to use this model, we need to supply it with 40 features whereas our main model outputs 50 raw values of amplitudes. Hence, we introduce a third model that takes 50 values and extracts 40 features that are associated with these values, which could then be fed into the classifier. Lastly, we backpropagate from the genre classifier back to the main model. A diagram for this architecture is shown below."}),Object(s.jsx)("div",{id:"arch-wrapper",children:Object(s.jsx)("img",{id:"architecture",src:u})}),Object(s.jsx)("h3",{children:"Detailed Architecture Design and Training"}),Object(s.jsx)("h4",{children:"1. Genre Classifier"}),Object(s.jsx)("p",{children:"This component takes 40 features of an audio file and classifies them into a genre. The dataset of 10 genres each with 100 songs is used to train this. Each song is cropped to 30 seconds. To extract the 40 features, we used the TorchAudio API. It has 2 hidden layers with RELU as activation function. The loss function is cross entropy loss. This component is trained for about 30 minutes."}),Object(s.jsx)("h4",{children:"2. Feature Extractor"}),Object(s.jsx)("p",{children:"This component takes 50 values of amplitudes and extracts 40 features. It allows the generator component to use the genre classifier. The same dataset of 10 genres is used for this component so we could reuse the features generated by the API as labels during the training. It has 2 fully connected layers with RELU as activation function. The loss function is MSE. This component is trained for about 20 minutes."}),Object(s.jsx)("h4",{children:"3. Generator"}),Object(s.jsx)("p",{children:"This component samples 50 amplitudes at a time from the input, and uses LSTM to output predictions of the next 50 amplitudes. Normally, the range of amplitudes is [-32728, 32728] and this would lead to big values when calculating losses and long computation time. So, before feeding the audio file into the network, the values are all normalized to be within [-1, 1]. Then, we denormalize the output by adding a fully connected layer after LSTM to restore to the common range of  amplitudes. The denormalization is necessary in order to feed the 50 values to the feature extractor. The total time taken to train this component is around 20 minutes."}),Object(s.jsx)("h3",{children:"Additional Attempts and Considerations"}),Object(s.jsx)("p",{children:"1. Instead of using LSTM to predict 3 values, an initial attempt was to predict 1 value based on 50 samples. However, this strategy was too inefficient, not only it takes a long time, but also the generated output was very noisy. An illustration of the failed output is included below:"}),Object(s.jsx)("audio",{controls:!0,children:Object(s.jsx)("source",{src:m})}),Object(s.jsx)("p",{children:"2. A more bold attempt was to just change the input directly by comparing its features with those of the style audio. However, simply comparing and altering the input song based on the differences in the features would not produce harmony but noises. Therefore, the conclusion is that the model needs a more sophisticated extraction of the features corresponding to a style. An illustration of the failed output is included below:"}),Object(s.jsx)("audio",{controls:!0,children:Object(s.jsx)("source",{src:p})}),Object(s.jsx)("h3",{children:"Evaluations and Result"}),Object(s.jsx)("p",{children:"The evaluation of the output can be subjective, but our standard is to not produce output with unpleasant noises and most original elements of the input should be preserved while changes exist. In particular, the output should still be able to be identified as the input song."}),Object(s.jsx)("p",{children:"Our results are included in the previous demo section. The style song is \u201cMy Only Wish\u201d and we first experimented with \u201cStay With Me\u201d. We are aware that both songs are in pop style, but \u201cMy Only Wish\u201d is very representative of a Christmas/Holiday uplifting tone whereas \u201cStay with Me\u201d is more of a smooth and melancholic style. While the final output does not have a clear Holiday vibe added to it, we think this is an acceptable outcome as the melody, vocals, and major background music is preserved. Same applies for the other output generated for \u201cTime To Love\u201d. As mentioned before, superimposing a song with a different style might require a lot more fine tuning that could even require a nontrivial amount of work by a skilled musician. Hence, we think our model is a good starting point for a more sophisticated and powerful model in further development."}),Object(s.jsx)("h3",{children:"Related Work and Future Direction"}),Object(s.jsx)("p",{children:"As mentioned before, music style transfer from one song to another arbitrarily is not a precedent study. We think it is more feasible to adopt a narrower range of music. For example, use piano-only music and transfer input from jazz to classical. However, there are some existing works in music and audio generation that could be applied to advance our project."}),Object(s.jsx)("p",{children:"WaveNet by Oord et al. generates raw audio waveforms as synthetic utterances with input sequences recorded from human speakers using a model based on PixelCNNs [4]. Hadjeres et al. has presented DeepBach that generates chorales in the style of Johann Sebastian Bach using Keras [1]. However, unlike our approach that composes music sequentially, DeepBach uses pseudo-Gibbs sampling coupled with an adapted representation of musical data. MusicNet by Thickstun et al. presents a largely labeled dataset for classical music that consists of 34 hours of human-verified aligned recordings, and 1, 299, 329 individual labels on segments of these recordings (such as the composers, instruments used, length of each instrument playing, etc.) [3]. This could be used if we decide to focus on just transferring input into the style of classical music in a more refined manner such as adding/removing instruments during the generation."}),Object(s.jsx)("p",{children:"The work described by Hadjeres et al. for developing a style imitator with successful experiments on Bach Chorales could be relevant for the future development of our model. Their model learns about neighboring note events in a given corpus, invents new chords, and harmonizes unknown melodies. It is based on the idea that \u201cchord progressions can be generated by replicating the occurrences of pairs of neighboring notes'', and thus capturing the local \u201ctexture\u201d of the chord sequences. When it comes to style imitation, they aimed to reproduce pairwise correlations of the training set among the notes and capture higher-order interactions suitable for style imitation [2]. Hence, we could apply similar concepts to \u201csuperimpose\u201d the input after learning some stronger correlations among the specific notes."}),Object(s.jsx)("h3",{children:"Conclusion"}),Object(s.jsx)("p",{children:"Our music style transfer model consists of 3 components that learns the style of a song, takes another song as input, and outputs an altered version in correspondence to the trained style. Our experiments show that this is feasible, and our output is very close to the original version by reproducing the rhythm, melody, verses and main background sounds. We hope to extend our work to develop a more complete model that reforms a song with a new style in an artistic way while preserving its original melody."}),Object(s.jsx)("h3",{children:"References"}),Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:"[1] Gaetan Hadjeres and Fran\xe7ois Pachet. DeepBach: a \xa8 steerable model for Bach chorales generation. arXiv preprint arXiv:1612.01010, 2016"})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:"[2] Hadjeres, G., Sakellariou, J., Pachet, F.: Style imitation and chord invention in polyphonic music with exponential families. CoRR abs/1609.05152 (2016)"})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:"[3] John Thickstun, Zaid Harchaoui, and Sham Kakade, \u201cLearning features of music from scratch,\u201d arXiv preprint arXiv:1611.09827, 2016."})}),Object(s.jsx)("li",{children:Object(s.jsx)("p",{children:"[4] Oord, A\xe4ron Van den, and Sander Dieleman. \u201cWaveNet: A Generative Model for Raw Audio.\u201d Deepmind, 8 Sept. 2016, deepmind.com/blog/article/wavenet-generative-model-raw-audio."})})]})]})]})},b=i.p+"static/media/banner.38dfe302.mov";i(16);var f=function(){return Object(s.jsxs)("div",{id:"banner",children:[Object(s.jsx)("h1",{id:"title",children:"Music Style Transfer"}),Object(s.jsx)("p",{id:"name",children:"Paul Yoo, Sherry Yang, and Hideyuki Komaki"}),Object(s.jsx)("a",{href:"#introduction",children:Object(s.jsx)("div",{className:"arrow"})}),Object(s.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:b,id:"video"})]})};i(17);var g=function(){return Object(s.jsx)("div",{id:"code",children:Object(s.jsx)("h2",{children:"Source Code"})})},v=i.p+"static/media/my_only_wish.b360aec5.jpg",x=i.p+"static/media/time_to_love.2df2f403.jpg",y=i.p+"static/media/stay_with_me.ac784d37.jpg",O=i.p+"static/media/time_to_love_noiseless.8076c863.wav",w=i.p+"static/media/stay_with_me_noiseless.20619b81.wav",k=i.p+"static/media/now_playing.6d9f77a2.gif",T=(i(18),function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var s;return Object(c.a)(this,i),(s=t.call(this,e)).state={music:0,style:0,mframe:{0:"image-wrapper on",1:"image-wrapper",2:"image-wrapper"},mblur:{0:"",1:"off",2:"off"},audio:O,title:"My Only Wish - Britney Spears"},s}return Object(d.a)(i,[{key:"handleClickMusic",value:function(e){var t=[O,w],i=this.state.mframe;i[this.state.music]="image-wrapper",i[e]="image-wrapper on";var s=this.state.mblur;s[this.state.music]="off",s[e]="",this.setState({mframe:i,mblur:s,music:e,audio:t[e],title:["Time to Love - October","Stay with me - Sam Smith"][e]},(function(){this.refs.audio.pause(),this.refs.audio.load()}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{id:"demo",children:[Object(s.jsx)("h2",{children:"Music Style Transfer Demo"}),Object(s.jsx)("div",{className:"description",children:Object(s.jsx)("p",{children:"The song used for training the style is \u201cMy Only Wish\u201d by Britney Spears. The altered songs are Stay with Me\u201d by Sam Smith and \u201cTime To Love\u201d by October. It takes around 5 seconds to generate an output song that is over 2 minutes. In order to remove undesirable noises, some simple post processing was used (i.e., removing sounds that are abnormal to the range of values in the original input). A demo below shows our result."})}),Object(s.jsxs)("div",{id:"music-select",children:[Object(s.jsx)("div",{id:"select-box",children:Object(s.jsx)("div",{className:"",children:Object(s.jsx)("h3",{children:"Choose your music \u266b"})})}),Object(s.jsxs)("div",{id:"music-box",children:[Object(s.jsxs)("div",{id:"music-0",className:this.state.mframe[0],onClick:function(){return e.handleClickMusic(0)},children:[Object(s.jsx)("img",{className:this.state.mblur[0],src:x,alt:"my only wish"}),Object(s.jsx)("p",{children:"Time to love"}),Object(s.jsx)("p",{children:"October"})]}),Object(s.jsxs)("div",{id:"music-1",className:this.state.mframe[1],onClick:function(){return e.handleClickMusic(1)},children:[Object(s.jsx)("img",{className:this.state.mblur[1],src:y,alt:"my only wish"}),Object(s.jsx)("p",{children:"Stay with me"}),Object(s.jsx)("p",{children:"Sam Smith"})]})]}),Object(s.jsx)("div",{className:"cb"})]}),Object(s.jsx)("div",{id:"cross-wrapper",children:Object(s.jsx)("div",{id:"cross2",children:Object(s.jsx)("span",{})})}),Object(s.jsxs)("div",{id:"style-select",children:[Object(s.jsx)("div",{id:"select-box",children:Object(s.jsx)("div",{className:"",children:Object(s.jsx)("h3",{children:"Style music \u266c"})})}),Object(s.jsx)("div",{id:"music-box",children:Object(s.jsxs)("div",{className:"image-wrapper",children:[Object(s.jsx)("img",{src:v,alt:"my only wish"}),Object(s.jsx)("p",{children:"My Only Wish"}),Object(s.jsx)("p",{children:"Britney Spears"})]})})]}),Object(s.jsx)("div",{className:"cb"}),Object(s.jsx)("div",{className:"arrow-result bounce"}),Object(s.jsxs)("div",{className:"audio-result",children:[Object(s.jsx)("p",{children:this.state.title}),Object(s.jsx)("img",{className:"new-music",src:k,alt:"music"}),Object(s.jsx)("br",{}),Object(s.jsx)("audio",{controls:!0,ref:"audio",children:Object(s.jsx)("source",{src:this.state.audio,type:"audio/wav"})})]})]})}}]),i}(a.a.Component)),S=i.p+"static/media/mozart.2e8b7602.jpg",N=i.p+"static/media/Ask_permission.ac51a1e0.svg";i(19);var C=function(){return Object(s.jsxs)("div",{id:"introduction",children:[Object(s.jsx)("h2",{children:"Summary"}),Object(s.jsx)("div",{className:"description",children:Object(s.jsx)("p",{children:"We present our deep learning project Music Style Transfer that takes a song as input, modifies it with a different style that was pre-trained with our model, and outputs a modified version of the song. The model takes 50 samples (values of the amplitudes) from the original song each time and outputs 50 values. After a series of consecutive sampling and generating, it concatenates all the values and thus yields a version of the song in a different style that still preserves the original melody, vocal, major instruments used in the background, etc. as much as possible."})}),Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("img",{id:"sample-img-1",src:v,alt:"my only wish"}),Object(s.jsx)("div",{id:"cross",children:Object(s.jsx)("span",{})}),Object(s.jsx)("img",{id:"sample-img-2",src:S,alt:"mozart"}),Object(s.jsx)("div",{id:"equal",children:Object(s.jsx)("span",{})}),Object(s.jsx)("img",{id:"question",src:N,alt:"question mark"})]})]})},M=i.p+"static/media/hide.f1e760f5.jpg",A=i.p+"static/media/paul.2a636bd1.jpg",H=i.p+"static/media/sherry.0ed285cf.jpg";i(20);var W=function(){return Object(s.jsxs)("div",{id:"people",children:[Object(s.jsx)("h2",{children:"People"}),Object(s.jsxs)("div",{id:"profiles",children:[Object(s.jsxs)("div",{className:"profile",children:[Object(s.jsx)("img",{src:A,alt:"Paul"}),Object(s.jsx)("p",{children:"Paul Yoo"})]}),Object(s.jsxs)("div",{className:"profile",children:[Object(s.jsx)("img",{src:H,alt:"Sherry"}),Object(s.jsx)("p",{children:"Sherry Yang"})]}),Object(s.jsxs)("div",{className:"profile",children:[Object(s.jsx)("img",{src:M,alt:"Hide"}),Object(s.jsx)("p",{children:"Hideyuki Komaki"})]})]})]})};i(21);var _=function(){return Object(s.jsxs)("div",{id:"movie",children:[Object(s.jsx)("h2",{children:"Movie"}),Object(s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-7oCCaz48f4",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})};i(22);var I=function(){return Object(s.jsxs)("footer",{children:[Object(s.jsx)("p",{id:"contact",children:"Contact: hide27k@uw.edu"}),Object(s.jsx)("p",{id:"right",children:"CSE 490g1 Final Project | University of Washington | Autumn 2020"})]})},P=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)(f,{}),Object(s.jsx)(C,{}),Object(s.jsx)(T,{}),Object(s.jsx)(j,{}),Object(s.jsx)(_,{}),Object(s.jsx)(g,{}),Object(s.jsx)(W,{}),Object(s.jsx)(I,{})]})}}]),i}(n.Component),B=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;i(e),s(e),n(e),a(e),o(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(P,{})}),document.getElementById("root")),B()}],[[23,1,2]]]);
//# sourceMappingURL=main.17cf451d.chunk.js.map
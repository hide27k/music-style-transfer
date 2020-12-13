(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],[,,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var i=t(0),c=t(1),n=t.n(c),a=t(7),r=t.n(a),l=(t(13),t(2)),d=t(3),o=t(5),j=t(4),h=(t(14),t.p+"static/media/banner.38dfe302.mov");t(15);var m=function(){return Object(i.jsxs)("div",{id:"banner",children:[Object(i.jsx)("h1",{id:"title",children:"Music Style Transfer"}),Object(i.jsx)("p",{id:"name",children:"Paul Yoo, Sherry Yang, and Hideyuki Komaki"}),Object(i.jsx)("a",{href:"#introduction",children:Object(i.jsx)("div",{className:"arrow"})}),Object(i.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:h,id:"video"})]})},u=t.p+"static/media/my_only_wish.b360aec5.jpg",b=(t(16),function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(e){var i;return Object(l.a)(this,t),(i=s.call(this,e)).state={music:0,style:0,mframe:{0:"image-wrapper on",1:"image-wrapper",2:"image-wrapper",3:"image-wrapper"},mblur:{0:"",1:"off",2:"off",3:"off"},sframe:{0:"image-wrapper on",1:"image-wrapper",2:"image-wrapper",3:"image-wrapper"},sblur:{0:"",1:"off",2:"off",3:"off"}},i}return Object(d.a)(t,[{key:"handleClickMusic",value:function(e){var s=this.state.mframe;s[this.state.music]="image-wrapper",s[e]="image-wrapper on";var t=this.state.mblur;t[this.state.music]="off",t[e]="",this.setState({mframe:s,mblur:t,music:e})}},{key:"handleClickStyle",value:function(e){var s=this.state.sframe;s[this.state.style]="image-wrapper",s[e]="image-wrapper on";var t=this.state.sblur;t[this.state.style]="off",t[e]="",this.setState({sframe:s,sblur:t,style:e})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{id:"demo",children:[Object(i.jsx)("h2",{children:"Music Style Transfer Demo"}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:"We present our deep learning project Music Style Transfer that takes a song as input, modifies it with a different style that was pre-trained with our model, and outputs a modified version of the song. The model takes 50 samples (values of the amplitudes) from the original song each time and outputs 50 values. After a series of consecutive sampling and generating, it concatenates all the values and thus yields a version of the song in a different style that still preserves the original melody, vocal, major instruments used in the background, etc. as much as possible."})}),Object(i.jsxs)("div",{id:"music-select",children:[Object(i.jsxs)("div",{id:"select-box",children:[Object(i.jsx)("div",{className:"btn select",children:Object(i.jsx)("h3",{children:"Choose your music \u266b"})}),Object(i.jsx)("div",{className:"btn",children:Object(i.jsx)("h3",{children:"Upload your own music \u266b"})}),Object(i.jsx)("div",{children:Object(i.jsx)("audio",{controls:!0})})]}),Object(i.jsxs)("div",{id:"music-box",children:[Object(i.jsxs)("div",{id:"music-0",className:this.state.mframe[0],onClick:function(){return e.handleClickMusic(0)},children:[Object(i.jsx)("img",{className:this.state.mblur[0],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]}),Object(i.jsxs)("div",{id:"music-1",className:this.state.mframe[1],onClick:function(){return e.handleClickMusic(1)},children:[Object(i.jsx)("img",{className:this.state.mblur[1],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]}),Object(i.jsxs)("div",{id:"music-2",className:this.state.mframe[2],onClick:function(){return e.handleClickMusic(2)},children:[Object(i.jsx)("img",{className:this.state.mblur[2],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]}),Object(i.jsxs)("div",{id:"music-3",className:this.state.mframe[3],onClick:function(){return e.handleClickMusic(3)},children:[Object(i.jsx)("img",{className:this.state.mblur[3],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]})]}),Object(i.jsx)("div",{className:"cb"})]}),Object(i.jsx)("div",{id:"cross-wrapper",children:Object(i.jsx)("div",{id:"cross2",children:Object(i.jsx)("span",{})})}),Object(i.jsxs)("div",{id:"style-select",children:[Object(i.jsxs)("div",{id:"select-box",children:[Object(i.jsx)("div",{className:"btn select",children:Object(i.jsx)("h3",{children:"Choose your style \u266c"})}),Object(i.jsx)("div",{className:"btn",children:Object(i.jsx)("h3",{children:"Upload your own style \u266c"})}),Object(i.jsx)("div",{children:Object(i.jsx)("audio",{controls:!0})})]}),Object(i.jsxs)("div",{id:"music-box",children:[Object(i.jsxs)("div",{id:"style-0",className:this.state.sframe[0],onClick:function(){return e.handleClickStyle(0)},children:[Object(i.jsx)("img",{className:this.state.sblur[0],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]}),Object(i.jsxs)("div",{id:"style-1",className:this.state.sframe[1],onClick:function(){return e.handleClickStyle(1)},children:[Object(i.jsx)("img",{className:this.state.sblur[1],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]}),Object(i.jsxs)("div",{id:"style-2",className:this.state.sframe[2],onClick:function(){return e.handleClickStyle(2)},children:[Object(i.jsx)("img",{className:this.state.sblur[2],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]}),Object(i.jsxs)("div",{id:"style-3",className:this.state.sframe[3],onClick:function(){return e.handleClickStyle(3)},children:[Object(i.jsx)("img",{className:this.state.sblur[3],src:u,alt:"my only wish"}),Object(i.jsx)("p",{children:"My Only Wish"})]})]}),Object(i.jsx)("div",{className:"cb"})]})]})}}]),t}(n.a.Component)),O=t.p+"static/media/mozart.2e8b7602.jpg",f=t.p+"static/media/Ask_permission.ac51a1e0.svg";t(17);var p=function(){return Object(i.jsxs)("div",{id:"introduction",children:[Object(i.jsx)("h2",{children:"Summary"}),Object(i.jsx)("div",{className:"description",children:Object(i.jsx)("p",{children:"We present our deep learning project Music Style Transfer that takes a song as input, modifies it with a different style that was pre-trained with our model, and outputs a modified version of the song. The model takes 50 samples (values of the amplitudes) from the original song each time and outputs 50 values. After a series of consecutive sampling and generating, it concatenates all the values and thus yields a version of the song in a different style that still preserves the original melody, vocal, major instruments used in the background, etc. as much as possible."})}),Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("img",{id:"sample-img-1",src:u,alt:"my only wish"}),Object(i.jsx)("div",{id:"cross",children:Object(i.jsx)("span",{})}),Object(i.jsx)("img",{id:"sample-img-2",src:O,alt:"mozart"}),Object(i.jsx)("div",{id:"equal",children:Object(i.jsx)("span",{})}),Object(i.jsx)("img",{id:"question",src:f,alt:"question mark"})]})]})};t(18);var x=function(){return Object(i.jsxs)("footer",{children:[Object(i.jsx)("p",{id:"contact",children:"Contact: hide27k@uw.edu"}),Object(i.jsx)("p",{id:"right",children:"CSE 490g1 Final Project | University of Washington | Autumn 2020"})]})},y=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(l.a)(this,t),s.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(b,{}),Object(i.jsx)(x,{})]})}}]),t}(c.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(s){var t=s.getCLS,i=s.getFID,c=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),i(e),c(e),n(e),a(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),v()}],[[19,1,2]]]);
//# sourceMappingURL=main.791209a4.chunk.js.map
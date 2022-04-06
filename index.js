/*! For license information please see index.js.LICENSE.txt */ ! function() {
	"use strict";
	var e, n, t, r, o = {
			406: function(e, n, t) {
				t.r(n), n.default = ""
			},
			104: function(e, n, t) {
				t.r(n), n.default = ".Captions .active{\n   position: absolute;\n   background: #f00;\n   width: 20px;\n   height: 2px;\n   bottom: -2px;\n   border-radius: 2px;\n   left: 3px;\n}"
			},
			370: function(e, n, t) {
				t.r(n), n.default = ".Duration {\n  font-size: small;\n  color: var(--accent);\n  display: none;\n}\n\n.Duration .time-to-consume {\n  display: none;\n}\n"
			},
			683: function(e, n, t) {
				t.r(n), n.default = ""
			},
			431: function(e, n, t) {
				t.r(n), n.default = ""
			},
			694: function(e, n, t) {
				t.r(n), n.default = ""
			},
			623: function(e, n, t) {
				t.r(n), n.default = ""
			},
			491: function(e, n, t) {
				t.r(n), n.default = ".Setting .badge {\n  position: absolute;\n  background: #000000c5;\n  color: #fff;\n  padding: 5px 0 5px 0;\n  border-radius: 4px;\n  width: 200px;\n  font-size: 14px;\n  z-index: 2;\n  overflow: auto;\n}\n\n.Setting .badge .panel {\n  /* height: 33px; */\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 15px;\n}\n\n.Setting .badge .panel .label {\n  font-weight: bold;\n}\n\n.Setting .badge .panel:hover {\n  background: #fff3;\n  cursor: pointer;\n}\n\n.Setting .badge .panel-header {\n  /* height: 40px; */\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 10px 25px;\n  border-bottom: 1px solid #fff5;\n  cursor: pointer;\n}\n\n.Setting .badge .panel-back {\n  position: absolute;\n  left: 5px;\n  height: 12px;\n  width: 12px;\n  cursor: pointer;\n}\n\n.Setting .badge .panel-content {\n  padding: 10px 25px;\n}\n\n.badge-open-animation {\n  transform: rotate(45deg);\n  transform-origin: center;\n}\n"
			},
			605: function(e, n, t) {
				t.r(n), n.default = ".container {\n  width: 100%;\n  height: 100%;\n  height: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */\n  height: fill-available;\n  display: flex;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n}\n\n.container:hover .thumb {\n  width: 12px;\n  height: 12px;\n  cursor: grab;\n}\n\n@media (pointer: coarse) {\n  .container .thumb {\n    width: 35px;\n    height: 35px;\n    background-color: transparent;\n  }\n  .container .thumb-display {\n    pointer-events: none;\n    background-color: var(--primary);\n    --thumb-display-width: 15px;\n    width: var(--thumb-display-width);\n    height: var(--thumb-display-width);\n    border-radius: calc(var(--thumb-display-width) / 2);\n    position: relative;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n\n.bar {\n  background-color: var(--primary);\n  height: 3px;\n  width: 0;\n  border-radius: 6px;\n  transition: none;\n  z-index: 2;\n}\n\n.buffer-bar {\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  border-radius: 6px;\n  /* background: #a2a2a2; /* var(--accent); */\n  /* opacity: 0.4;  */\n  z-index: 1;\n  overflow: hidden;\n}\n\n.ref-bar {\n  position: absolute;\n  width: 100%;\n  height: 3px;\n  border-radius: 6px;\n  background: var(--accent);\n  /* opacity: 0.3; */\n  z-index: 0;\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n.thumb {\n  position: absolute;\n  display: block;\n  background-color: var(--primary);\n  transition: none;\n  cursor: pointer;\n  transform: translateX(-50%);\n  border-radius: 40px;\n  z-index: 3;\n}\n\n.anchor {\n  position: absolute;\n  display: none;\n  left: 100%;\n  border-radius: 4px;\n  transform: translateX(-50%);\n  transition: none 0s ease 0s;\n  top: -22.5px;\n  color: var(--accent);\n  background: rgba(0, 0, 0, 0.3);\n  padding: 2px 6px;\n}\n\n.anchor-visible {\n  display: block !important;\n}\n\n.thumb-animation {\n  transition-property: all;\n  transition-duration: 0.2s;\n  transition-timing-function: linear;\n  transition-delay: 0s;\n}\n\n.both-side-time {\n  display: none;\n  color: var(--accent);\n}\n\n.both-side-time:nth-child(odd) {\n  margin-right: 5px;\n}\n\n.both-side-time:nth-child(even) {\n  margin-left: 5px;\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n.left-side-time {\n  display: none;\n  color: var(--accent);\n  margin-left: 5px;\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n.buffer-bar .buffer-fragment {\n  position: absolute;\n  background: #ababab;\n  height: 100%;\n}\n"
			},
			91: function(e, n, t) {
				t.r(n), n.default = ".Volume .wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.Volume .Volume-Time {\n  font-size: small;\n  color: var(--accent);\n  margin-left: 5px;\n  display: none;\n}\n\n.Volume .wrapper .icon {\n  /* width: 25%; */\n  height: 100%;\n}\n\n.vdo-volume-range {\n  -webkit-appearance: none;\n  width: 70%;\n  height: 3px;\n  background: var(--accent);\n  border-radius: 2px;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: 0.2s;\n  transition: opacity 0.2s;\n  cursor: pointer;\n}\n\n.vdo-volume-range:hover {\n  opacity: 1;\n}\n\n.vdo-volume-range::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: var(--primary);\n  cursor: pointer;\n  border: none;\n}\n\n.vdo-volume-range::-moz-range-thumb {\n  width: 10px;\n  height: 10px;\n  background: var(--primary);\n  cursor: pointer;\n  border: none;\n}\n"
			},
			315: function(e, n, t) {
				t.r(n), n.default = ".Caption-Container {\n  position: absolute;\n  left: 0px;\n  bottom: 60px;\n  height: calc(100% - 60px);\n  width: 100%;\n  color: white;\n  pointer-events: none;\n  font-size: larger;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.Caption-Container .cue {\n  padding: 4px 6px;\n  border-radius: 4px;\n}\n\n.Caption-Container .cue > span {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 2px 6px;\n  border-radius: 2px;\n}\n\nvideo .caption-box {\n  visibility: hidden;\n}\n"
			},
			462: function(e, n, t) {
				t.r(n), n.default = ".error-layer{\n    background: rgba(0,0,0,0.5); \n    color:white; \n    display:table; \n}\n\n.error-layer .container{\n    display:table-cell;\n    vertical-align: middle; \n    text-align: center;\n}"
			},
			618: function(e, n, t) {
				t.r(n), n.default = ".GradientLayer {\n  display: none;\n  z-index: -5;\n}\n\n.GradientLayer[top] {\n  display: none;\n  /* source: Old-player: like youtube */\n  background-repeat: repeat-x;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n}\n\n.GradientLayer[bottom] {\n  display: none;\n  /* source: Old-player: like youtube */\n  background-repeat: repeat-x;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);\n  transform: rotate(180deg);\n}\n\n.GradientLayer[right] {\n  display: none;\n}\n\n.GradientLayer[left] {\n  display: none;\n}\n"
			},
			640: function(e, n, t) {
				t.r(n), n.default = ".spinner-container{\n  height: 100%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-area: 3 / 5 / span 1 /span 1;\n}\n.spinner-container .spinner {\n   height: 0;\n   width: 0;\n   padding: 15px;\n   border: 4px solid var(--accent);\n   border-right-color: var(--primary);\n   border-radius: 22px;\n   -webkit-animation: rotate 1s infinite linear;\n    animation: rotate 1s infinite linear;\n }\n \n @-webkit-keyframes rotate {\n   100% {\n     -webkit-transform: rotate(360deg);\n   }\n }\n\n @keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}"
			},
			900: function(e, n, t) {
				t.r(n), n.default = ".Overlay {\n  background: transparent !important;\n}\n\n.Overlay > .Play > svg {\n  background: rgba(93, 93, 93, 0.7);\n  border-radius: 100%;\n  max-height: 50px !important;\n}\n\n.Player.Overlay:hover {\n  cursor: pointer;\n}\n\n.Player.Overlay:hover svg {\n  background: var(--primary);\n  box-shadow: 0 2px 20px 7px rgb(0 0 0 / 5%);\n}\n"
			},
			320: function(e, n, t) {
				t.r(n), n.default = ".vdo-poster{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -6;\n}\n\n.vdo-poster img{\n    width: 100%;\n    object-fit: contain;\n    height: 100%;\n}"
			},
			154: function(e, n, t) {
				t.r(n), n.default = ".setting-layer{\n   grid-area: 1 / 1 / -1 / -1;\n   opacity: 0.6;\n   pointer-events: none;\n}\n\n.pointer-layer{\n   height: 100%;\n   width: 100%;\n   pointer-events: none;\n}"
			},
			649: function(e, n, t) {
				t.r(n), n.default = ".TopLink {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 10px;\n}\n\n.TopLink a:link {\n  text-decoration: none;\n}\n\na:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\na:active {\n  text-decoration: underline;\n}\n\n.TopLink a p {\n  background: rgba(0, 0, 0, 0.5);\n  padding: 16px 24px;\n  font-size: xx-large;\n  color: var(--accent);\n  border-radius: 4px;\n  width: 16rem;\n}\n\n.TopLink a p:hover {\n  background: var(--primary);\n  color: var(--accent);\n  border-radius: 2px;\n}\n"
			},
			651: function(e, n, t) {
				t.r(n), n.default = ".vdo-full {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.vdo-full * {\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, Helvetica, Arial, 'Helvetica Neue',\n    sans-serif;\n}\n.vdo-layer {\n  background: #0003;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.controller-icon {\n  cursor: pointer;\n  height: 100%;\n  max-height: 25px;\n  /*[Commented: Samsung-Bug] (Source) : Instagram*/\n  /* filter: drop-shadow(0 0 .75px rgba(0,0,0,.42)) drop-shadow(0 1px .5px rgba(0,0,0,.18)) drop-shadow(0 2px 3px rgba(0,0,0,.2)) */\n}\n\n/*\n* Source: https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting\n*/\n.vdo-full .no-select {\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Old versions of Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n"
			},
			558: function(e, n, t) {
				t.r(n), n.default = ".Player {\n  padding: 10px;\n  box-sizing: border-box;\n  display: grid;\n  height: 100%;\n  grid-template-columns: 35px 35px 35px 1fr 2fr 1fr 35px 35px 35px;\n  grid-template-rows: 35px 35px auto 35px 35px;\n  background: rgba(0, 0, 0, 0.45);\n}\n\n@media (orientation: portrait) {\n  .On-Fullscreen {\n    padding: 40px 20px !important;\n  }\n}\n\n@media (orientation: landscape) {\n  .On-Fullscreen {\n    padding: 20px 30px !important;\n  }\n}\n\n.Play,\n.Pause {\n  position: relative;\n  grid-area: 3 / 5 / span 1 / span 1;\n}\n\n.Play .controller-icon {\n  position: absolute;\n  height: 60%;\n  max-height: 100px;\n  top: 50%;\n  left: 50%;\n}\n\n.Pause .controller-icon {\n  position: absolute;\n  height: 60%;\n  max-height: 100px;\n  top: 50%;\n  left: 50%;\n}\n\n.Play .controller-icon {\n  transform: translate(-50%, -50%) scale(1.7);\n}\n\n.Pause .controller-icon {\n  transform: translate(-50%, -50%) scale(1.5);\n}\n\n.Forward {\n  grid-area: 3 / 6 / span 1 / span 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.Backward {\n  grid-area: 3 / 4 / span 1 / span 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.Forward .controller-icon,\n.Backward .controller-icon {\n  height: 15%;\n  max-height: 50px;\n  flex: 1; /*[ BugFix (Safari <14.0)]: forward and backward button not visible */\n  transform: scale(1.5);\n  max-width: 35px;\n  margin: 0 auto;\n}\n\n.Volume {\n  grid-area: 5 / 1 / span 1 / span 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n\n/* .Volume:hover input{\n   width: 100px;\n} */\n\n.Volume .controller-icon {\n  padding: 2px;\n  box-sizing: border-box;\n}\n\n.Captions {\n  grid-area: 5 / 7 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Airplay {\n  grid-area: 1 / 9 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting {\n  grid-area: 5 / 8 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.Setting .badge {\n  bottom: 45px;\n  right: 20px;\n}\n\n.Setting .controller-icon {\n  transform: scale(1.4);\n}\n\n.Setting .panel-list .controller-icon {\n  transform: scale(1.2);\n}\n\n.FullScreen {\n  grid-area: 5 / 9 / span 1 / span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.FullScreen .controller-icon {\n  transform: scale(1.8);\n}\n\n.VideoProgress {\n  grid-area: 4 / 1 / auto / -1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n}\n\n@media (pointer: fine) {\n  .VideoProgress {\n    padding: 10px 10px;\n  }\n}\n\n.VideoProgress .both-side-time {\n  display: block;\n}\n\n@vdo-responsive only screen and (max-width: 600px) {\n  .Overlay > .Play > svg {\n    max-height: 40px !important;\n  }\n\n  .Player {\n    padding: 5px;\n    box-sizing: border-box;\n    display: grid;\n    height: 100%;\n    grid-template-columns: 20px 35px 1fr 2fr 1fr 35px 20px;\n    grid-template-rows: 20px auto 20px 20px;\n  }\n\n  .Play {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-area: 2 / 4 / span 1 / span 1;\n  }\n\n  .Play .controller-icon {\n    max-height: 60px;\n  }\n\n  .Pause {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    grid-area: 2 / 4 / span 1 / span 1;\n  }\n\n  .Pause .controller-icon {\n    max-height: 60px;\n  }\n\n  .Backward {\n    grid-area: 2 / 3 / span 1 / span 1;\n    justify-content: flex-end;\n    padding: 5px;\n  }\n\n  .Forward {\n    grid-area: 2 / 5 / span 1 / span 1;\n    justify-content: flex-start;\n    padding: 5px;\n  }\n\n  .Captions {\n    grid-area: 1 / 6 / span 1 / span 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .Airplay {\n    grid-area: 1 / 1 / span 1 / span 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .Setting {\n    grid-area: 1 / 7 / span 1 / span 1;\n    padding: 0;\n  }\n\n  .Setting .controller-icon {\n    transform: scale(1) !important;\n  }\n\n  .Setting .badge {\n    right: 5px;\n    overflow: auto;\n    top: 25px;\n    height: fit-content;\n    bottom: auto;\n  }\n\n  .Volume {\n    grid-area: 3 / 1 / span 1 / span 1;\n    padding: 0;\n  }\n\n  .Volume .controller-icon {\n    transform: scale(1.4);\n  }\n\n  .Volume .vdo-volume-range {\n    display: none;\n  }\n\n  .FullScreen {\n    grid-area: 3 / 7 / span 1 / span 1;\n    padding: 0;\n  }\n\n  .FullScreen .controller-icon {\n    transform: scale(1.4) !important;\n  }\n\n  .VideoProgress {\n    grid-area: 4 / 1 / auto / -1;\n    padding: 5px 0 0;\n    font-size: 14px;\n  }\n  .VideoProgress .left-side-time {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time {\n    display: block;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 350px) {\n  .Overlay > .Play > svg {\n    max-height: 30px !important;\n  }\n\n  .Player {\n    padding: 3px;\n    grid-template-columns: 18px 10px 18px auto 18px 10px 18px;\n    grid-template-rows: 18px auto 18px 18px;\n  }\n  .Play {\n    grid-area: 1 / 4 / 4 / span 1;\n  }\n  .Pause {\n    grid-area: 1 / 4 / 4 / span 1;\n  }\n\n  .Volume {\n    grid-area: 1 / 1 / span 1 / span 1;\n  }\n\n  .Setting {\n    grid-area: 1 / 5 / span 1 / span 1;\n  }\n\n  .FullScreen {\n    grid-area: 1 / 7 / span 1 / span 1;\n  }\n\n  .VideoProgress {\n    padding: 0;\n    font-size: 12px;\n  }\n\n  .VideoProgress .anchor {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time:nth-child(odd) {\n    margin-right: 6px;\n  }\n\n  .VideoProgress .both-side-time:nth-child(even) {\n    margin-left: 6px;\n  }\n\n  .Forward {\n    display: none;\n  }\n  .Backward {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Airplay {\n    display: none;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 250px) {\n  .Setting {\n    display: none;\n  }\n  .Overlay > .Play > svg {\n    background: rgba(93, 93, 93, 0.7);\n    border-radius: 100%;\n    max-height: 25px !important;\n  }\n}\n"
			},
			754: function(e, n, t) {
				t.r(n), n.default = ".Player {\n  display: grid;\n  height: 100%;\n  padding: 10px;\n  grid-template-columns: 35px 35px 35px 105px auto 35px 35px 35px 35px;\n  grid-template-rows: 25px auto 25px 25px;\n}\n\n.GradientLayer[bottom] {\n  display: block;\n  bottom: 0px;\n  position: absolute;\n  height: 98px;\n  left: 0px;\n  width: 100%;\n}\n\n@media (orientation: portrait) {\n  .On-Fullscreen {\n    padding: 40px 20px !important;\n  }\n}\n\n@media (orientation: landscape) {\n  .On-Fullscreen {\n    padding: 20px 30px !important;\n  }\n}\n\n.controller-icon {\n  max-height: 20px;\n}\n\n.Overlay.Player {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Overlay.Player > .Play {\n  width: 100px;\n  height: 100px;\n}\n\n.Overlay.Player > .Play > .controller-icon {\n  max-height: 100px;\n}\n\n.Volume {\n  grid-area: 4 / 4 / span 1 / span 4;\n  max-width: 150px;\n  height: 100%;\n}\n\n.Volume .Volume-Time {\n  display: block;\n}\n\n.Volume > .wrapper {\n  justify-content: flex-start;\n}\n\n.Volume > .wrapper > input {\n  width: 0%;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.Volume:hover > .wrapper > input {\n  transform: none;\n  width: 32%;\n}\n\n.Volume > .wrapper > input::-moz-range-thumb {\n  display: none;\n  opacity: 0;\n}\n\n.Volume:hover > .wrapper > input::-moz-range-thumb {\n  display: block;\n  opacity: 1;\n}\n\n.Volume > .wrapper > input::-webkit-slider-thumb {\n  display: none;\n}\n\n.Volume:hover > .wrapper > input::-webkit-slider-thumb {\n  display: block;\n}\n\n.Backward {\n  grid-area: 4 / 1 / auto / auto;\n}\n\n.Forward {\n  grid-area: 4 / 3 / auto / auto;\n}\n\n.Forward,\n.Backward {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.Forward > svg,\n.Backward > svg {\n  transform: scale(1.2);\n}\n\n/* @media (pointer: fine) {\n  .VideoProgress {\n    padding: 10px 10px;\n  }\n} */\n\n.VideoProgress {\n  grid-area: 3 / 1 / 3 / 10;\n}\n\n.Play,\n.Pause {\n  grid-area: 4 / 2 / auto / auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.spinner-container.Pause {\n  transform: scale(0.7);\n}\n\n.Play svg,\n.Pause svg {\n  transform: scale(1.7);\n}\n\n.Setting {\n  grid-area: 4 / 8 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.Setting .badge {\n  right: 5px;\n  overflow: auto;\n  bottom: 40px;\n  height: fit-content;\n}\n\n.Captions {\n  grid-area: 4 / 7 / auto / auto;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.Captions svg {\n  transform: scale(1.2);\n}\n\n.FullScreen {\n  grid-area: 4 / 9 / auto / auto;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.FullScreen svg {\n  transform: scale(1.5);\n}\n\n/* Responsive Breakout : 650px */\n@vdo-responsive only screen and (max-width: 600px) {\n  .GradientLayer[top] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 98px;\n    width: 100%;\n    display: block;\n  }\n  .Overlay > .Play > svg {\n    max-height: 40px !important;\n  }\n  .Captions {\n    grid-area: 1 / 8 / auto / auto;\n  }\n  .Setting {\n    grid-area: 1 / 9 / auto / auto;\n  }\n  .Setting .badge {\n    bottom: auto;\n    top: 40px;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 400px) {\n  .Overlay > .Play > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 25px auto 25px 25px 25px;\n    grid-template-columns: 35px 40px auto 35px 35px 35px auto 40px 35px;\n  }\n  .Play {\n    grid-area: 5 / 5 / auto / auto;\n  }\n  .Pause {\n    grid-area: 5 / 5 / auto / auto;\n  }\n  .Backward {\n    grid-area: 5 / 4 / auto / auto;\n  }\n  .Forward {\n    grid-area: 5 / 6 / auto / auto;\n  }\n  .VideoProgress {\n    grid-area: 4 / 1 / 4 / 10;\n  }\n  .Volume {\n    grid-area: 1 / 1 / span 1 / auto;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Duration {\n    grid-area: 5 / 1 / 6 / 10;\n    display: block;\n    font-size: small;\n    color: var(--accent);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .Duration .divider {\n    display: none;\n  }\n  .FullScreen {\n    grid-area: 1 / 8 / auto / auto;\n    justify-content: center;\n  }\n  .Setting {\n    grid-area: 1 / 9 / auto / auto;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 300px) {\n  .Overlay > .Play > svg {\n    max-height: 30px !important;\n  }\n  .Player {\n    grid-template-rows: 25px auto 25px 25px;\n    grid-template-columns: 35px 40px auto 35px;\n  }\n\n  .Play {\n    grid-area: 4 / 1 / auto / auto;\n    justify-content: flex-start;\n  }\n\n  .Overlay.Player .Play {\n    justify-content: center;\n  }\n\n  .Pause {\n    grid-area: 4 / 1 / auto / auto;\n    justify-content: flex-start;\n  }\n  .Backward {\n    display: none;\n  }\n  .Forward {\n    display: none;\n  }\n  .VideoProgress {\n    grid-area: 3 / 1 / 3 / 5;\n  }\n  .Volume {\n    grid-area: 4 / 2 / span 1 / auto;\n  }\n  .Volume > .wrapper {\n    justify-content: center;\n  }\n  .Volume .wrapper > input {\n    display: none;\n  }\n  .Volume .Volume-Time {\n    display: none;\n  }\n  .Captions {\n    display: none;\n  }\n  .Duration {\n    grid-area: 4 / 3 / 5 / 5;\n    justify-content: end;\n  }\n  .Duration .divider {\n    display: block;\n  }\n  .FullScreen {\n    grid-area: 1 / 1 / auto / auto;\n  }\n  .Setting {\n    grid-area: 1 / 4 / auto / auto;\n  }\n}\n\n@vdo-responsive only screen and (max-width: 200px) {\n  .Overlay > .Play > svg {\n    background: rgba(93, 93, 93, 0.7);\n    border-radius: 100%;\n    max-height: 25px !important;\n  }\n  .Duration {\n    display: none;\n  }\n  .Volume {\n    grid-area: 4 / 4 / span 1 / span 1;\n    justify-content: flex-end;\n  }\n  .Volume > .wrapper {\n    justify-content: flex-end;\n  }\n  .VideoProgress {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    font-size: 12px;\n  }\n  .VideoProgress .both-side-time {\n    display: block;\n  }\n  .VideoProgress .anchor {\n    display: none;\n  }\n\n  .VideoProgress .both-side-time:nth-child(odd) {\n    margin-right: 6px;\n  }\n\n  .VideoProgress .both-side-time:nth-child(even) {\n    margin-left: 6px;\n  }\n}\n"
			}
		},
		a = {};

	function i(e) {
		var n = a[e];
		if (void 0 !== n) return n.exports;
		var t = a[e] = {
			exports: {}
		};
		return o[e](t, t.exports, i), t.exports
	}
	i.d = function(e, n) {
			for (var t in n) i.o(n, t) && !i.o(e, t) && Object.defineProperty(e, t, {
				enumerable: !0,
				get: n[t]
			})
		}, i.o = function(e, n) {
			return Object.prototype.hasOwnProperty.call(e, n)
		}, i.r = function(e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}, Object.assign || Object.defineProperty(Object, "assign", {
			enumerable: !1,
			configurable: !0,
			writable: !0,
			value: function(e) {
				if (null == e) throw new TypeError("Cannot convert first argument to object");
				for (var n = Object(e), t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					if (null != r) {
						r = Object(r);
						for (var o = Object.keys(Object(r)), a = 0, i = o.length; a < i; a++) {
							var s = o[a],
								c = Object.getOwnPropertyDescriptor(r, s);
							void 0 !== c && c.enumerable && (n[s] = r[s])
						}
					}
				}
				return n
			}
		}), Array.from || (Array.from = (e = Object.prototype.toString, n = function(n) {
			return "function" == typeof n || "[object Function]" === e.call(n)
		}, t = Math.pow(2, 53) - 1, r = function(e) {
			var n = function(e) {
				var n = Number(e);
				return isNaN(n) ? 0 : 0 !== n && isFinite(n) ? (n > 0 ? 1 : -1) * Math.floor(Math.abs(n)) : n
			}(e);
			return Math.min(Math.max(n, 0), t)
		}, function(e) {
			var t = this,
				o = Object(e);
			if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
			var a, i = arguments.length > 1 ? arguments[1] : void 0;
			if (void 0 !== i) {
				if (!n(i)) throw new TypeError("Array.from: when provided, the second argument must be a function");
				arguments.length > 2 && (a = arguments[2])
			}
			for (var s, c = r(o.length), u = n(t) ? Object(new t(c)) : new Array(c), l = 0; l < c;) s = o[l], u[l] = i ? void 0 === a ? i(s, l) : i.call(a, s, l) : s, l += 1;
			return u.length = c, u
		})), Array.prototype.find = Array.prototype.find || function(e) {
			if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
			if ("function" != typeof e) throw new TypeError("callback must be a function");
			for (var n = Object(this), t = n.length >>> 0, r = arguments[1], o = 0; o < t; o++) {
				var a = n[o];
				if (e.call(r, a, o, n)) return a
			}
		},
		function() {
			var e = {};
			i.r(e), i.d(e, {
				JsonPatchError: function() {
					return Vn
				},
				_areEquals: function() {
					return Kn
				},
				applyOperation: function() {
					return Un
				},
				applyPatch: function() {
					return Hn
				},
				applyReducer: function() {
					return zn
				},
				deepClone: function() {
					return Bn
				},
				getValueByPointer: function() {
					return Fn
				},
				validate: function() {
					return Gn
				},
				validator: function() {
					return Wn
				}
			});
			var n, t, r, o = {};
			i.r(o), i.d(o, {
				compare: function() {
					return et
				},
				generate: function() {
					return Zn
				},
				observe: function() {
					return Xn
				},
				unobserve: function() {
					return Yn
				}
			}), window.vdoErrorHandler = (n = 0, t = [], r = [], window.onerror = function(e, o, a, i, s) {
				var c = {
						message: "string" == typeof e && e.length > 0 ? e : "NA",
						source: o || "NA",
						lineno: a,
						colno: i,
						occurredIndex: n,
						count: 1,
						error: s instanceof Error ? s.toString() : "NA"
					},
					u = function(e) {
						return t.findIndex((function(n) {
							return n.message === e.message && n.source === e.source && n.lineno === e.lineno && n.colno === e.colno
						}))
					}(c); - 1 === u ? (t.push(c), n += 1) : t[u].count = t[u].count + 1, r.forEach((function(e) {
					return e(c, t)
				}))
			}, {
				stack: t,
				hasError: function() {
					return Boolean(t.length)
				},
				onError: function(e) {
					"function" == typeof e && r.push(e)
				},
				clear: function() {
					return t.length = 0
				}
			});
			var a, s, c, u, l, d, f, p = {},
				v = [],
				h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

			function g(e, n) {
				for (var t in n) e[t] = n[t];
				return e
			}

			function m(e) {
				var n = e.parentNode;
				n && n.removeChild(e)
			}

			function y(e, n, t) {
				var r, o, i, s = {};
				for (i in n) "key" == i ? r = n[i] : "ref" == i ? o = n[i] : s[i] = n[i];
				if (arguments.length > 2 && (s.children = arguments.length > 3 ? a.call(arguments, 2) : t), "function" == typeof e && null != e.defaultProps)
					for (i in e.defaultProps) void 0 === s[i] && (s[i] = e.defaultProps[i]);
				return b(e, s, r, o, null)
			}

			function b(e, n, t, r, o) {
				var a = {
					type: e,
					props: n,
					key: t,
					ref: r,
					__k: null,
					__: null,
					__b: 0,
					__e: null,
					__d: void 0,
					__c: null,
					__h: null,
					constructor: void 0,
					__v: null == o ? ++c : o
				};
				return null != s.vnode && s.vnode(a), a
			}

			function w(e) {
				return e.children
			}

			function _(e, n) {
				this.props = e, this.context = n
			}

			function x(e, n) {
				if (null == n) return e.__ ? x(e.__, e.__.__k.indexOf(e) + 1) : null;
				for (var t; n < e.__k.length; n++)
					if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
				return "function" == typeof e.type ? x(e) : null
			}

			function E(e) {
				var n, t;
				if (null != (e = e.__) && null != e.__c) {
					for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
						if (null != (t = e.__k[n]) && null != t.__e) {
							e.__e = e.__c.base = t.__e;
							break
						} return E(e)
				}
			}

			function k(e) {
				(!e.__d && (e.__d = !0) && u.push(e) && !A.__r++ || d !== s.debounceRendering) && ((d = s.debounceRendering) || l)(A)
			}

			function A() {
				for (var e; A.__r = u.length;) e = u.sort((function(e, n) {
					return e.__v.__b - n.__v.__b
				})), u = [], e.some((function(e) {
					var n, t, r, o, a, i;
					e.__d && (a = (o = (n = e).__v).__e, (i = n.__P) && (t = [], (r = g({}, o)).__v = o.__v + 1, I(i, o, r, n.__n, void 0 !== i.ownerSVGElement, null != o.__h ? [a] : null, t, null == a ? x(o) : a, o.__h), D(t, o), o.__e != a && E(o)))
				}))
			}

			function T(e, n, t, r, o, a, i, s, c, u) {
				var l, d, f, h, g, m, y, _ = r && r.__k || v,
					E = _.length;
				for (t.__k = [], l = 0; l < n.length; l++)
					if (null != (h = t.__k[l] = null == (h = n[l]) || "boolean" == typeof h ? null : "string" == typeof h || "number" == typeof h || "bigint" == typeof h ? b(null, h, null, null, h) : Array.isArray(h) ? b(w, {
							children: h
						}, null, null, null) : h.__b > 0 ? b(h.type, h.props, h.key, null, h.__v) : h)) {
						if (h.__ = t, h.__b = t.__b + 1, null === (f = _[l]) || f && h.key == f.key && h.type === f.type) _[l] = void 0;
						else
							for (d = 0; d < E; d++) {
								if ((f = _[d]) && h.key == f.key && h.type === f.type) {
									_[d] = void 0;
									break
								}
								f = null
							}
						I(e, h, f = f || p, o, a, i, s, c, u), g = h.__e, (d = h.ref) && f.ref != d && (y || (y = []), f.ref && y.push(f.ref, null, h), y.push(d, h.__c || g, h)), null != g ? (null == m && (m = g), "function" == typeof h.type && null != h.__k && h.__k === f.__k ? h.__d = c = S(h, c, e) : c = P(e, h, f, _, g, c), u || "option" !== t.type ? "function" == typeof t.type && (t.__d = c) : e.value = "") : c && f.__e == c && c.parentNode != e && (c = x(f))
					} for (t.__e = m, l = E; l--;) null != _[l] && ("function" == typeof t.type && null != _[l].__e && _[l].__e == t.__d && (t.__d = x(r, l + 1)), B(_[l], _[l]));
				if (y)
					for (l = 0; l < y.length; l++) V(y[l], y[++l], y[++l])
			}

			function S(e, n, t) {
				var r, o;
				for (r = 0; r < e.__k.length; r++)(o = e.__k[r]) && (o.__ = e, n = "function" == typeof o.type ? S(o, n, t) : P(t, o, o, e.__k, o.__e, n));
				return n
			}

			function P(e, n, t, r, o, a) {
				var i, s, c;
				if (void 0 !== n.__d) i = n.__d, n.__d = void 0;
				else if (null == t || o != a || null == o.parentNode) e: if (null == a || a.parentNode !== e) e.appendChild(o), i = null;
					else {
						for (s = a, c = 0;
							(s = s.nextSibling) && c < r.length; c += 2)
							if (s == o) break e;
						e.insertBefore(o, a), i = a
					} return void 0 !== i ? i : o.nextSibling
			}

			function C(e, n, t) {
				"-" === n[0] ? e.setProperty(n, t) : e[n] = null == t ? "" : "number" != typeof t || h.test(n) ? t : t + "px"
			}

			function L(e, n, t, r, o) {
				var a;
				e: if ("style" === n)
					if ("string" == typeof t) e.style.cssText = t;
					else {
						if ("string" == typeof r && (e.style.cssText = r = ""), r)
							for (n in r) t && n in t || C(e.style, n, "");
						if (t)
							for (n in t) r && t[n] === r[n] || C(e.style, n, t[n])
					}
				else if ("o" === n[0] && "n" === n[1]) a = n !== (n = n.replace(/Capture$/, "")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + a] = t, t ? r || e.addEventListener(n, a ? N : O, a) : e.removeEventListener(n, a ? N : O, a);
				else if ("dangerouslySetInnerHTML" !== n) {
					if (o) n = n.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
					else if ("href" !== n && "list" !== n && "form" !== n && "tabIndex" !== n && "download" !== n && n in e) try {
						e[n] = null == t ? "" : t;
						break e
					} catch (e) {}
					"function" == typeof t || (null != t && (!1 !== t || "a" === n[0] && "r" === n[1]) ? e.setAttribute(n, t) : e.removeAttribute(n))
				}
			}

			function O(e) {
				this.l[e.type + !1](s.event ? s.event(e) : e)
			}

			function N(e) {
				this.l[e.type + !0](s.event ? s.event(e) : e)
			}

			function I(e, n, t, r, o, a, i, c, u) {
				var l, d, f, p, v, h, m, y, b, x, E, k = n.type;
				if (void 0 !== n.constructor) return null;
				null != t.__h && (u = t.__h, c = n.__e = t.__e, n.__h = null, a = [c]), (l = s.__b) && l(n);
				try {
					e: if ("function" == typeof k) {
						if (y = n.props, b = (l = k.contextType) && r[l.__c], x = l ? b ? b.props.value : l.__ : r, t.__c ? m = (d = n.__c = t.__c).__ = d.__E : ("prototype" in k && k.prototype.render ? n.__c = d = new k(y, x) : (n.__c = d = new _(y, x), d.constructor = k, d.render = R), b && b.sub(d), d.props = y, d.state || (d.state = {}), d.context = x, d.__n = r, f = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != k.getDerivedStateFromProps && (d.__s == d.state && (d.__s = g({}, d.__s)), g(d.__s, k.getDerivedStateFromProps(y, d.__s))), p = d.props, v = d.state, f) null == k.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
						else {
							if (null == k.getDerivedStateFromProps && y !== p && null != d.componentWillReceiveProps && d.componentWillReceiveProps(y, x), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(y, d.__s, x) || n.__v === t.__v) {
								d.props = y, d.state = d.__s, n.__v !== t.__v && (d.__d = !1), d.__v = n, n.__e = t.__e, n.__k = t.__k, n.__k.forEach((function(e) {
									e && (e.__ = n)
								})), d.__h.length && i.push(d);
								break e
							}
							null != d.componentWillUpdate && d.componentWillUpdate(y, d.__s, x), null != d.componentDidUpdate && d.__h.push((function() {
								d.componentDidUpdate(p, v, h)
							}))
						}
						d.context = x, d.props = y, d.state = d.__s, (l = s.__r) && l(n), d.__d = !1, d.__v = n, d.__P = e, l = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = g(g({}, r), d.getChildContext())), f || null == d.getSnapshotBeforeUpdate || (h = d.getSnapshotBeforeUpdate(p, v)), E = null != l && l.type === w && null == l.key ? l.props.children : l, T(e, Array.isArray(E) ? E : [E], n, t, r, o, a, i, c, u), d.base = n.__e, n.__h = null, d.__h.length && i.push(d), m && (d.__E = d.__ = null), d.__e = !1
					} else null == a && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = M(t.__e, n, t, r, o, a, i, u);
					(l = s.diffed) && l(n)
				}
				catch (e) {
					n.__v = null, (u || null != a) && (n.__e = c, n.__h = !!u, a[a.indexOf(c)] = null), s.__e(e, n, t)
				}
			}

			function D(e, n) {
				s.__c && s.__c(n, e), e.some((function(n) {
					try {
						e = n.__h, n.__h = [], e.some((function(e) {
							e.call(n)
						}))
					} catch (e) {
						s.__e(e, n.__v)
					}
				}))
			}

			function M(e, n, t, r, o, i, s, c) {
				var u, l, d, f = t.props,
					v = n.props,
					h = n.type,
					g = 0;
				if ("svg" === h && (o = !0), null != i)
					for (; g < i.length; g++)
						if ((u = i[g]) && (u === e || (h ? u.localName == h : 3 == u.nodeType))) {
							e = u, i[g] = null;
							break
						} if (null == e) {
					if (null === h) return document.createTextNode(v);
					e = o ? document.createElementNS("http://www.w3.org/2000/svg", h) : document.createElement(h, v.is && v), i = null, c = !1
				}
				if (null === h) f === v || c && e.data === v || (e.data = v);
				else {
					if (i = i && a.call(e.childNodes), l = (f = t.props || p).dangerouslySetInnerHTML, d = v.dangerouslySetInnerHTML, !c) {
						if (null != i)
							for (f = {}, g = 0; g < e.attributes.length; g++) f[e.attributes[g].name] = e.attributes[g].value;
						(d || l) && (d && (l && d.__html == l.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""))
					}
					if (function(e, n, t, r, o) {
							var a;
							for (a in t) "children" === a || "key" === a || a in n || L(e, a, null, t[a], r);
							for (a in n) o && "function" != typeof n[a] || "children" === a || "key" === a || "value" === a || "checked" === a || t[a] === n[a] || L(e, a, n[a], t[a], r)
						}(e, v, f, o, c), d) n.__k = [];
					else if (g = n.props.children, T(e, Array.isArray(g) ? g : [g], n, t, r, o && "foreignObject" !== h, i, s, i ? i[0] : t.__k && x(t, 0), c), null != i)
						for (g = i.length; g--;) null != i[g] && m(i[g]);
					c || ("value" in v && void 0 !== (g = v.value) && (g !== e.value || "progress" === h && !g) && L(e, "value", g, f.value, !1), "checked" in v && void 0 !== (g = v.checked) && g !== e.checked && L(e, "checked", g, f.checked, !1))
				}
				return e
			}

			function V(e, n, t) {
				try {
					"function" == typeof e ? e(n) : e.current = n
				} catch (e) {
					s.__e(e, t)
				}
			}

			function B(e, n, t) {
				var r, o;
				if (s.unmount && s.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || V(r, null, n)), null != (r = e.__c)) {
					if (r.componentWillUnmount) try {
						r.componentWillUnmount()
					} catch (e) {
						s.__e(e, n)
					}
					r.base = r.__P = null
				}
				if (r = e.__k)
					for (o = 0; o < r.length; o++) r[o] && B(r[o], n, "function" != typeof e.type);
				t || null == e.__e || m(e.__e), e.__e = e.__d = void 0
			}

			function R(e, n, t) {
				return this.constructor(e, t)
			}
			a = v.slice, s = {
				__e: function(e, n) {
					for (var t, r, o; n = n.__;)
						if ((t = n.__c) && !t.__) try {
							if ((r = t.constructor) && null != r.getDerivedStateFromError && (t.setState(r.getDerivedStateFromError(e)), o = t.__d), null != t.componentDidCatch && (t.componentDidCatch(e), o = t.__d), o) return t.__E = t
						} catch (n) {
							e = n
						}
					throw e
				}
			}, c = 0, _.prototype.setState = function(e, n) {
				var t;
				t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = g({}, this.state), "function" == typeof e && (e = e(g({}, t), this.props)), e && g(t, e), null != e && this.__v && (n && this.__h.push(n), k(this))
			}, _.prototype.forceUpdate = function(e) {
				this.__v && (this.__e = !0, e && this.__h.push(e), k(this))
			}, _.prototype.render = w, u = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, A.__r = 0, f = 0;
			var j, F, U, H = 0,
				z = [],
				W = s.__b,
				G = s.__r,
				K = s.diffed,
				Q = s.__c,
				J = s.unmount;

			function q(e, n) {
				s.__h && s.__h(F, e, H || n), H = 0;
				var t = F.__H || (F.__H = {
					__: [],
					__h: []
				});
				return e >= t.__.length && t.__.push({}), t.__[e]
			}

			function Y(e) {
				return H = 1, X(ue, e)
			}

			function X(e, n, t) {
				var r = q(j++, 2);
				return r.t = e, r.__c || (r.__ = [t ? t(n) : ue(void 0, n), function(e) {
					var n = r.t(r.__[0], e);
					r.__[0] !== n && (r.__ = [n, r.__[1]], r.__c.setState({}))
				}], r.__c = F), r.__
			}

			function Z(e, n) {
				var t = q(j++, 3);
				!s.__s && ce(t.__H, n) && (t.__ = e, t.__H = n, F.__H.__h.push(t))
			}

			function $(e, n) {
				var t = q(j++, 4);
				!s.__s && ce(t.__H, n) && (t.__ = e, t.__H = n, F.__h.push(t))
			}

			function ee(e) {
				return H = 5, ne((function() {
					return {
						current: e
					}
				}), [])
			}

			function ne(e, n) {
				var t = q(j++, 7);
				return ce(t.__H, n) && (t.__ = e(), t.__H = n, t.__h = e), t.__
			}

			function te(e, n) {
				return H = 8, ne((function() {
					return e
				}), n)
			}

			function re(e) {
				var n = F.context[e.__c],
					t = q(j++, 9);
				return t.c = e, n ? (null == t.__ && (t.__ = !0, n.sub(F)), n.props.value) : e.__
			}

			function oe() {
				z.forEach((function(e) {
					if (e.__P) try {
						e.__H.__h.forEach(ie), e.__H.__h.forEach(se), e.__H.__h = []
					} catch (n) {
						e.__H.__h = [], s.__e(n, e.__v)
					}
				})), z = []
			}
			s.__b = function(e) {
				F = null, W && W(e)
			}, s.__r = function(e) {
				G && G(e), j = 0;
				var n = (F = e.__c).__H;
				n && (n.__h.forEach(ie), n.__h.forEach(se), n.__h = [])
			}, s.diffed = function(e) {
				K && K(e);
				var n = e.__c;
				n && n.__H && n.__H.__h.length && (1 !== z.push(n) && U === s.requestAnimationFrame || ((U = s.requestAnimationFrame) || function(e) {
					var n, t = function() {
							clearTimeout(r), ae && cancelAnimationFrame(n), setTimeout(e)
						},
						r = setTimeout(t, 100);
					ae && (n = requestAnimationFrame(t))
				})(oe)), F = void 0
			}, s.__c = function(e, n) {
				n.some((function(e) {
					try {
						e.__h.forEach(ie), e.__h = e.__h.filter((function(e) {
							return !e.__ || se(e)
						}))
					} catch (t) {
						n.some((function(e) {
							e.__h && (e.__h = [])
						})), n = [], s.__e(t, e.__v)
					}
				})), Q && Q(e, n)
			}, s.unmount = function(e) {
				J && J(e);
				var n = e.__c;
				if (n && n.__H) try {
					n.__H.__.forEach(ie)
				} catch (e) {
					s.__e(e, n.__v)
				}
			};
			var ae = "function" == typeof requestAnimationFrame;

			function ie(e) {
				var n = F;
				"function" == typeof e.__c && e.__c(), F = n
			}

			function se(e) {
				var n = F;
				e.__c = e.__(), F = n
			}

			function ce(e, n) {
				return !e || e.length !== n.length || n.some((function(n, t) {
					return n !== e[t]
				}))
			}

			function ue(e, n) {
				return "function" == typeof n ? n(e) : n
			}

			function le(e) {
				var n = document.getElementsByTagName("video");
				Array.from(n).forEach((function(n) {
					n.addEventListener("@vdo/error", (function(t) {
						var r = t.detail;
						n.controls = !1;
						var o = r.message || "Please try another browser",
							a = document.createElement("div");
						a.id = "vdo-ui-error", a.innerHTML = '<div style="display:flex; flex-direction:column; justify-content: center; align-items: center;"><div style="font-size:155%;">Error</div><div style="margin-top:10px">' + o + "</div></div></div>";
						var i = document.createElement("style");
						i.innerHTML = '#vdo-ui-error {width: 100%; height: 100%;  position: absolute; z-index: 3; top: 0px; left: 0px;background: rgba(0,0,0,0.5); color:white; display:flex; justify-content: center; align-content: center; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica,Arial,"Helvetica Neue",sans-serif;}', e.appendChild(i), e.appendChild(a)
					}))
				}))
			}
			var de = "" === document.createElement("div").style.grid,
				fe = "attachShadow" in document.createElement("div"),
				pe = function() {
					try {
						return !0
					} catch (e) {
						return !1
					}
				}(),
				ve = function() {
					try {
						return new Function("foo(...params);"), !0
					} catch (e) {
						return !1
					}
				}(),
				he = function(e) {
					if (isNaN(e)) return "0:00";
					var n = new Date(1e3 * e),
						t = function(e) {
							return e < 10 ? "0" + e : e.toString()
						};
					return n.getUTCHours() > 0 ? t(n.getUTCHours()) + ":" + t(n.getUTCMinutes()) + ":" + t(n.getUTCSeconds()) : t(n.getUTCMinutes()) + ":" + t(n.getUTCSeconds())
				},
				ge = {
					allNode: [],
					topLevel: [],
					add: function(e, n) {
						n ? this.topLevel.push(e) : this.allNode.push(e)
					},
					inject: function(e) {
						var n = this.allNode.reverse().join("") + this.topLevel.reverse().join(""),
							t = document.createElement("STYLE");
						t.innerHTML = n, e.append(t)
					}
				},
				me = function(e, n) {
					return void 0 === n && (n = !1), "string" == typeof e ? ge.add(e, n) : ge.add(e.default, n)
				},
				ye = function(e) {
					return Boolean(e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen)
				};

			function be(e, n) {
				(null == n || n > e.length) && (n = e.length);
				for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
				return r
			}

			function we(e, n) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, n) {
					if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
						var t = [],
							r = !0,
							o = !1,
							a = void 0;
						try {
							for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (t.push(i.value), !n || t.length !== n); r = !0);
						} catch (e) {
							o = !0, a = e
						} finally {
							try {
								r || null == s.return || s.return()
							} finally {
								if (o) throw a
							}
						}
						return t
					}
				}(e, n) || function(e, n) {
					if (e) {
						if ("string" == typeof e) return be(e, n);
						var t = Object.prototype.toString.call(e).slice(8, -1);
						return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? be(e, n) : void 0
					}
				}(e, n) || function() {
					throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function _e() {
				return y("div", {
					className: "vdo-layer"
				}, y("div", {
					className: "spinner-container"
				}, y("div", {
					className: "spinner"
				})))
			}
			me(i(640));
			var xe = {
				play: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						className: "controller-icon",
						xmlns: "http://www.w3.org/2000/svg",
						fill: t,
						onClick: void 0 === r ? function() {} : r,
						viewBox: "0 0 24 24"
					}, y("path", {
						d: "M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"
					}))
				},
				forward: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						className: "controller-icon",
						onClick: void 0 === r ? function() {} : r,
						viewBox: "0 0 24 24",
						fill: t,
						xmlns: "http://www.w3.org/2000/svg"
					}, y("path", {
						d: "m 19.246531,13 c -0.5,0 -0.779388,0.37 -0.849388,0.86 -0.48,3.37 -4.227143,6.493061 -7.877143,5.613061 -2.25,-0.54 -4.2691837,-2.69449 -4.7491837,-4.95449 C 5.3501217,12.508586 5.7140523,10.283139 6.9975191,8.7965647 8.1852229,7.4209074 10.207273,6.5102041 12,6.5102041 v 2.6267347 c 0,0.45 0.54,0.67 0.85,0.35 l 3.79,-3.3328572 c 0.212399,-0.1867797 0.205234,-0.515375 0,-0.71 L 12.85,1.85 C 12.531887,1.5483312 12,1.76 12,2.21 V 5 c -4.94,0 -8.84,4.48 -7.84,9.6 0.6,3.11 2.9,5.5 5.99,6.19 4.83,1.08 9.15,-2.2 9.77,-6.67 C 20.01,13.53 19.846531,13 19.246531,13 Z"
					}))
				},
				backward: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						className: "controller-icon",
						onClick: void 0 === r ? function() {} : r,
						viewBox: "0 0 24 24",
						fill: t,
						xmlns: "http://www.w3.org/2000/svg"
					}, y("path", {
						d: "m 4.4616024,13 c 0.5110868,0 0.7966722,0.37 0.8682264,0.86 0.4906446,3.37 4.3208955,6.493061 8.0518522,5.613061 2.299902,-0.54 4.363868,-2.69449 4.854517,-4.95449 0.430023,-2.009985 0.05802,-4.235432 -1.253913,-5.7220063 C 15.76824,7.4209074 13.701342,6.5102041 11.868854,6.5102041 v 2.6267347 c 0,0.45 -0.551974,0.67 -0.868854,0.35 L 7.1259435,6.1540816 c -0.2170946,-0.1867797 -0.2097924,-0.515375 0,-0.71 L 11,1.85 c 0.325171,-0.3016688 0.868854,-0.09 0.868854,0.36 V 5 c 5.049566,0 9.036062,4.48 8.013883,9.6 -0.613307,3.11 -2.964317,5.5 -6.122852,6.19 C 8.8227587,21.87 4.4069459,18.59 3.7731968,14.12 3.6812002,13.53 3.8482955,13 4.4616024,13 Z"
					}))
				},
				pause: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						className: "controller-icon",
						viewBox: "-0 0 24 24",
						fill: t,
						onClick: void 0 === r ? function() {} : r,
						xmlns: "http://www.w3.org/2000/svg"
					}, y("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					}), y("path", {
						d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
					}))
				},
				mute: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						onClick: void 0 === r ? function() {} : r,
						className: "controller-icon",
						fill: t
					}, y("path", {
						d: "M3.63 3.63c-.39.39-.39 1.02 0 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z"
					}))
				},
				lowVolume: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						className: "controller-icon",
						viewBox: "0 0 24 24",
						onClick: void 0 === r ? function() {} : r,
						fill: t
					}, y("path", {
						d: "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L9 9H6c-.55 0-1 .45-1 1z"
					}))
				},
				setting: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.className;
					return y("svg", {
						className: void 0 === r ? "controller-icon" : r,
						viewBox: "0 0 24 24",
						xmlns: "http://www.w3.org/2000/svg",
						fill: t
					}, y("path", {
						d: "M0 0h24v24H0V0z",
						fill: "none"
					}), y("path", {
						d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
					}))
				},
				volume: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						className: "controller-icon",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						onClick: void 0 === r ? function() {} : r,
						fill: t
					}, y("path", {
						d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z"
					}))
				},
				captions: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick,
						o = void 0 === r ? function() {} : r;
					return e.isActive ? y("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						className: "controller-icon",
						viewBox: "0 0 24 24",
						onClick: o
					}, y("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					}), y("path", {
						fill: t,
						d: "M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"
					})) : y("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						className: "controller-icon",
						viewBox: "0 0 24 24",
						onClick: o
					}, y("rect", {
						fill: "none",
						height: "100%",
						width: "100%"
					}), y("path", {
						fill: t,
						d: "M6.83,4H19c1.1,0,2,0.9,2,2v12c0,0.05-0.01,0.1-0.02,0.16l-3.38-3.38C17.84,14.59,18,14.32,18,14v-1h-1.5v0.5h-0.17 l-1.83-1.83V10.5h2V11H18v-1c0-0.55-0.45-1-1-1h-3c-0.55,0-1,0.45-1,1v0.17L6.83,4z M19.78,22.61L17.17,20H5c-1.11,0-2-0.9-2-2V6 c0-0.05,0.02-0.1,0.02-0.15L1.39,4.22l1.41-1.41l18.38,18.38L19.78,22.61z M11,13.83L10.17,13H9.5v0.5h-2v-3h0.17L6.4,9.22 C6.16,9.41,6,9.68,6,10v4c0,0.55,0.45,1,1,1h3c0.55,0,1-0.45,1-1V13.83z"
					}))
				},
				backArrow: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.className,
						o = void 0 === r ? " " : r,
						a = e.onClick;
					return y("svg", {
						fill: t,
						onClick: void 0 === a ? function() {} : a,
						className: "controller-icon ".concat(o),
						version: "1.1",
						viewBox: "0 0 24 24"
					}, y("rect", {
						fill: "none"
					}), y("g", null, y("polygon", {
						points: "17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
					})))
				},
				tick: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.className,
						o = void 0 === r ? " " : r,
						a = e.onClick;
					return y("svg", {
						fill: t,
						onClick: void 0 === a ? function() {} : a,
						className: "controller-icon ".concat(o),
						viewBox: "0 0 24 24",
						xmlns: "http://www.w3.org/2000/svg"
					}, y("path", {
						d: "M0 0h24v24H0z",
						fill: "none"
					}), y("path", {
						d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
					}))
				},
				fullScreen: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						version: "1.1",
						className: "controller-icon",
						onClick: void 0 === r ? function() {} : r,
						viewBox: "0 0 24 24",
						fill: t
					}, y("path", {
						d: "M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1H7v-2c0-.55-.45-1-1-1zm0-4c.55 0 1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm11 7h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v2zM14 6c0 .55.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"
					}))
				},
				airPlay: function(e) {
					var n = e.color,
						t = void 0 === n ? "var(--icon-color)" : n,
						r = e.onClick;
					return y("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 24 24",
						className: "controller-icon",
						fill: t,
						onClick: void 0 === r ? function() {} : r
					}, y("path", {
						d: "M8.41 22h7.17c.89 0 1.34-1.08.71-1.71L12.7 16.7c-.39-.39-1.02-.39-1.41 0L7.7 20.29c-.62.63-.18 1.71.71 1.71zM21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-2c-.55 0-1 .45-1 1s.45 1 1 1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
					}))
				}
			};

			function Ee(e, n, t) {
				return n in e ? Object.defineProperty(e, n, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[n] = t, e
			}

			function ke(e) {
				return (ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}
			var Ae = function(e, n) {
				return {
					play: function() {
						var n = e.videoEl,
							t = e.status;
						n && t >= 0 && n.play()
					},
					pause: function() {
						var n = e.videoEl,
							t = e.status;
						n && t >= 0 && n.pause()
					},
					togglePlay: function() {
						var n = e.videoEl,
							t = e.status;
						n && t >= 0 && (1 === t ? n.pause() : n.play())
					},
					seek: function(t) {
						return new Promise((function(r, o) {
							var a = e.videoEl;
							if (null === a) return o(new Error("Video Not Ready"));
							a.currentTime = t, n({
								type: "UPDATE_CURRENT-TIME",
								value: a.currentTime
							}), n({
								type: "SEEKING",
								value: t
							}), a.addEventListener("seeked", (function e() {
								r(!0), n({
									type: "SEEKED",
									value: t
								}), a.removeEventListener("seeked", e)
							}))
						}))
					},
					setVolume: function(t) {
						var r = e.videoEl;
						r && (r.volume = t, n({
							type: "UPDATE_VOLUME",
							value: t
						}))
					},
					mute: function() {
						var t = e.videoEl;
						t && (t.muted = !0, n({
							type: "MUTE",
							value: !0
						}))
					},
					unmute: function() {
						var t = e.videoEl;
						t && (t.muted = !1, n({
							type: "MUTE",
							value: !1
						}))
					},
					setPlaybackRate: function(t) {
						var r = e.videoEl;
						r && (r.playbackRate = t, n({
							type: "UPDATE_PLAYBACK_RATE",
							value: t
						}))
					},
					setCaptionVisibility: function(e) {
						n({
							type: "SET_CAPTION_VISIBILITY",
							value: e
						})
					},
					disableLiteMode: function() {
						var n = e.eventBus;
						n && n.emit("setLiteMode", !1)
					},
					attachEventListener: function(t, r) {
						var o = this;
						e.eventBus || (n({
							type: "ADD_EVENT_EMITTER",
							value: r
						}), r.on("error", (function(e) {
							n({
								type: "UPDATE_ERROR_STATUS",
								value: e
							}), t.addEventListener("playing", (function() {
								n({
									type: "REMOVE_ERROR"
								})
							}))
						})), r.on("setLiteMode", (function(e) {
							n({
								type: "SET_LITE_MODE",
								value: e
							})
						})), r.on("waitingForPlayback", (function(e) {
							n({
								type: "WAITING_FOR_PLAYBACK",
								value: e
							})
						})), r.on("updatePlayerConfig", (function(e) {
							n({
								type: "UPDATE_PLAYER_CONFIGURATION",
								value: e
							})
						})), r.on("setCaptionVisibility", (function(e) {
							o.setCaptionVisibility(e)
						})), r.on("setAbrStatus", (function(e) {
							n({
								type: "SET_ABR_STATUS",
								value: e
							})
						})), r.on("setActiveQuality", (function(e) {
							n({
								type: "SET_ACTIVE_QUALITIES",
								value: e
							})
						})), r.on("setCaptionLang", (function(e) {
							o.updateActiveCaptionLang(e)
						})), r.on("_metaDataLoadSuccess", (function(e) {
							n({
								type: "ADD_META_DATA",
								value: e
							})
						})), r.on("zenObject", (function(e) {
							n({
								type: "ADD_ZEN_OBJECT",
								value: e
							})
						})), r.on("availableQualities", (function(e) {
							var t = e.filter((function(e) {
								return e.active
							}))[0];
							n({
								type: "SET_ACTIVE_QUALITIES",
								value: t.id
							}), n({
								type: "SET_AVAILABLE_QUALITIES",
								value: e
							})
						})))
					},
					updateActiveCaptionLang: function(e) {
						n({
							type: "UPDATE_ACTIVE_CAPTIONS",
							value: e
						})
					},
					selectQualityTrack: function(n) {
						var t = e.eventBus;
						t && t.emit("selectQualityTrack", n)
					},
					updateFullscreenStatus: function(e) {
						n({
							type: "UPDATE_FULLSCREEN_STATUS",
							value: e
						})
					},
					calculateBufferLength: function(e) {
						if (0 === e.buffered.length) n({
							type: "UPDATE_BUFFER_LENGTH",
							value: 0
						});
						else {
							var t = Math.min(e.duration, e.buffered.end(0));
							n({
								type: "UPDATE_BUFFER_LENGTH",
								value: t
							})
						}
					},
					addCaptionTrack: function(n, t) {
						var r;
						if (n.textTracks.length) {
							Array.from(n.textTracks).forEach((function(e) {
								return e.mode = "hidden"
							}));
							var o = function(e, n, t) {
								if (Array.isArray(t) && t.length > 0) {
									var r = t.find((function(e) {
										return e.isDefault
									}));
									if (r && r.lang) {
										var o = Array.from(e).filter((function(e) {
											return e.language === r.lang
										}));
										if (o.length) return o[0]
									}
								}
								var a = n || window.navigator.language;
								a.includes("-") && (a = a.split("-")[0]);
								var i = Array.from(e).filter((function(e) {
									return e.language === a
								}));
								return i.length ? i[0] : e[0]
							}(n.textTracks, t.ccLanguage, null === (r = e.metaData) || void 0 === r ? void 0 : r.captions);
							this.updateActiveCaptionLang(o.language)
						}
					},
					dispatchInitData: function(e) {
						n({
							type: "ADD_INIT_DATA",
							value: {
								duration: e.duration,
								posterLink: e.poster,
								status: 0,
								muted: e.muted,
								captions: e.textTracks,
								volume: e.volume
							}
						})
					},
					init: function(t) {
						var r = this,
							o = t.videoEl,
							a = t.shadowDOMRef,
							i = t.optionalParam,
							s = t.themeId,
							c = t.hostEl;
						e.videoEl || (s && n({
							type: "ADD_THEME_ID",
							value: s
						}), o.readyState < 2 ? o.addEventListener("loadedmetadata", (function() {
							o.readyState < 2 && -1 !== e.status || r.dispatchInitData(o)
						})) : this.dispatchInitData(o), n({
							type: "ADD_ELEMENTS",
							value: {
								videoEl: o,
								shadowDOMRef: a,
								hostEl: c
							}
						}), this.addCaptionTrack(o, i), o.addEventListener("ratechange", (function() {
							n({
								type: "UPDATE_PLAYBACK_RATE",
								value: o.playbackRate
							})
						})), o.addEventListener("timeupdate", (function() {
							n({
								type: "UPDATE_CURRENT-TIME",
								value: o.currentTime
							})
						})), o.textTracks.addEventListener("addtrack", (function() {
							return r.addCaptionTrack(o, i)
						})), o.addEventListener("waiting", (function() {
							n({
								type: "UPDATE_IS-BUFFERING",
								value: !0
							})
						})), o.addEventListener("canplay", (function() {
							e.isBuffering && (n({
								type: "UPDATE_IS-BUFFERING",
								value: !1
							}), r.calculateBufferLength(o))
						})), o.addEventListener("play", (function() {
							n({
								type: "UPDATE_STATUS",
								value: 1
							})
						})), o.addEventListener("pause", (function() {
							n({
								type: "UPDATE_STATUS",
								value: 2
							})
						})), o.addEventListener("ended", (function() {
							n({
								type: "UPDATE_STATUS",
								value: 3
							})
						})))
					}
				}
			};

			function Te(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), t.push.apply(t, r)
				}
				return t
			}

			function Se(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2 ? Te(Object(t), !0).forEach((function(n) {
						Ee(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Te(Object(t)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
				}
				return e
			}
			var Pe = {
					videoEl: null,
					status: -1,
					currentTime: 0,
					seeking: !1,
					playbackRate: 1,
					isFullscreen: !1,
					themeId: "theme01",
					isBuffering: !0,
					captionVisibility: !1,
					bufferLength: 0,
					isLiteMode: !1,
					playerConfig: {},
					availablePlaybackRates: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
				},
				Ce = Ae(Pe, (function() {})),
				Le = function(e, n) {
					var t = {
						__c: n = "__cC" + f++,
						__: e,
						Consumer: function(e, n) {
							return e.children(n)
						},
						Provider: function(e) {
							var t, r;
							return this.getChildContext || (t = [], (r = {})[n] = this, this.getChildContext = function() {
								return r
							}, this.shouldComponentUpdate = function(e) {
								this.props.value !== e.value && t.some(k)
							}, this.sub = function(e) {
								t.push(e);
								var n = e.componentWillUnmount;
								e.componentWillUnmount = function() {
									t.splice(t.indexOf(e), 1), n && n.call(e)
								}
							}), e.children
						}
					};
					return t.Provider.__ = t.Consumer.contextType = t
				}({
					state: Pe,
					method: Ce,
					dispatch: function() {}
				}),
				Oe = function(e) {
					var n = e.children,
						t = we(X((function(e, n) {
							var t, r = n.type,
								o = n.value;
							switch (r) {
								case "ADD_ELEMENTS":
									"object" === ke(o) && (t = Se(Se({}, e), o));
									break;
								case "UPDATE_STATUS":
									t = Se(Se({}, e), {
										status: o
									});
									break;
								case "UPDATE_IS-BUFFERING":
									t = Se(Se({}, e), {
										isBuffering: o
									});
									break;
								case "UPDATE_CURRENT-TIME":
									return Se(Se({}, e), {
										currentTime: o
									});
								case "SEEKING":
									t = Se(Se({}, e), {
										seeking: !0
									});
									break;
								case "SEEKED":
									t = Se(Se({}, e), {
										seeking: !1
									});
									break;
								case "ADD_INIT_DATA":
									"object" === ke(o) && (t = Se(Se({}, e), o));
									break;
								case "UPDATE_VOLUME":
									t = Se(Se({}, e), {
										volume: o
									});
									break;
								case "MUTE":
									t = Se(Se({}, e), {
										muted: o
									});
									break;
								case "UPDATE_PLAYBACK_RATE":
									t = Se(Se({}, e), {
										playbackRate: o
									});
									break;
								case "SET_AVAILABLE_QUALITIES":
									t = Se(Se({}, e), {
										availableQualities: o
									});
									break;
								case "SET_ACTIVE_QUALITIES":
									t = Se(Se({}, e), {
										activeQualityTrackId: o
									});
									break;
								case "ADD_EVENT_EMITTER":
									t = Se(Se({}, e), {
										eventBus: o
									});
									break;
								case "UPDATE_FULLSCREEN_STATUS":
									t = Se(Se({}, e), {
										isFullscreen: o
									});
									break;
								case "ADD_META_DATA":
									t = Se(Se({}, e), {
										metaData: o
									});
									break;
								case "UPDATE_ACTIVE_CAPTIONS":
									t = Se(Se({}, e), {
										activeCaptionLang: o
									});
									break;
								case "UPDATE_BUFFER_LENGTH":
									t = Se(Se({}, e), {
										bufferLength: o
									});
									break;
								case "UPDATE_ERROR_STATUS":
									t = Se(Se({}, e), {
										hasError: !0,
										error: o
									});
									break;
								case "SET_CAPTION_VISIBILITY":
									t = Se(Se({}, e), {
										captionVisibility: o
									});
									break;
								case "SET_ABR_STATUS":
									t = Se(Se({}, e), {
										abrStatus: o
									});
									break;
								case "REMOVE_ERROR":
									t = Se(Se({}, e), {
										hasError: !1,
										error: null
									});
									break;
								case "UPDATE_PLAYER_CONFIGURATION":
									t = Se(Se({}, e), {
										playerConfig: o
									});
									break;
								case "ADD_THEME_ID":
									t = Se(Se({}, e), {
										themeId: o
									});
									break;
								case "SET_LITE_MODE":
									t = Se(Se({}, e), {
										isLiteMode: o
									});
									break;
								case "WAITING_FOR_PLAYBACK":
									t = Se(Se({}, e), {
										waitingForPlayback: o
									});
									break;
								case "ADD_ZEN_OBJECT":
									t = Se(Se({}, e), Se({
										showTopLink: !0
									}, o));
									break;
								default:
									t = e
							}
							return t
						}), Pe), 2),
						r = t[0],
						o = t[1],
						a = Ae(r, o);
					return y(Le.Provider, {
						value: {
							method: a,
							state: r,
							dispatch: o
						}
					}, n)
				};

			function Ne() {
				var e, n = re(Le).state,
					t = n.posterLink,
					r = void 0 === t ? null : t,
					o = n.metaData,
					a = r || (void 0 === (e = null == o ? void 0 : o.posters) && (e = []), e.length > 0 && Array.from(e).sort((function(e, n) {
						return n.height - e.height
					}))[0].url || "");
				return a ? y("div", {
					class: "vdo-poster"
				}, y("img", {
					src: a,
					alt: "Video"
				})) : null
			}

			function Ie(e) {
				var n = e.isLiteMode,
					t = re(Le).method;
				return y("div", {
					className: "vdo-full"
				}, y("div", {
					className: "Player Overlay",
					onClick: function() {
						n ? t.disableLiteMode() : t.play()
					}
				}, n && y(Ne, null), y("div", {
					className: "Play"
				}, y(xe.play, null))))
			}

			function De() {
				var e = re(Le),
					n = e.method,
					t = e.state,
					r = t.playerConfig,
					o = r.showBackward,
					a = void 0 === o || o,
					i = r.skipDuration,
					s = void 0 === i ? 10 : i;
				return a ? y("div", {
					className: "Backward"
				}, y(xe.backward, {
					onClick: function() {
						return n.seek(t.currentTime - s)
					}
				})) : null
			}

			function Me() {
				var e = re(Le),
					n = e.method,
					t = e.state,
					r = t.isBuffering,
					o = t.playerConfig.showPlayPauseBtn,
					a = void 0 === o || o;
				return r ? y("div", {
					className: "spinner-container Pause"
				}, y("div", {
					className: "spinner"
				})) : a ? y("div", {
					className: "Pause"
				}, y(xe.pause, {
					onClick: function() {
						return n.pause()
					}
				})) : null
			}

			function Ve() {
				var e = re(Le),
					n = e.method,
					t = e.state,
					r = t.playerConfig,
					o = r.showForward,
					a = void 0 === o || o,
					i = r.skipDuration,
					s = void 0 === i ? 10 : i;
				return a ? y("div", {
					className: "Forward"
				}, y(xe.forward, {
					onClick: function() {
						return n.seek(t.currentTime + s)
					}
				})) : null
			}

			function Be() {
				var e = re(Le),
					n = e.state,
					t = e.method,
					r = n.playerConfig.showPlayPauseBtn;
				return void 0 === r || r ? y("div", {
					className: "Play"
				}, y(xe.play, {
					onClick: function() {
						return t.play()
					}
				})) : null
			}

			function Re(e) {
				var n = e.setIsProgressBarDragging,
					t = e.resetPlayerVisibilityCounter,
					r = re(Le).state,
					o = r.duration,
					a = void 0 === o ? NaN : o,
					i = ee(null),
					s = ee(null),
					c = ee(null),
					u = ee(null),
					l = ee(null),
					d = function(e) {
						var n = e.thumb,
							t = e.bar,
							r = e.anchor,
							o = e.container,
							a = e.resetPlayerVisibilityCounter,
							i = re(Le),
							s = i.state,
							c = i.method,
							u = Y(!1),
							l = u[0],
							d = u[1],
							f = Y(!1),
							p = f[0],
							v = f[1],
							h = ee(null);
						$((function() {
							if (t.current && o.current && n.current && r.current && !0 !== l) {
								var e = s.currentTime / (s.duration || NaN) * 100;
								t.current.style.width = e + "%", n.current.style.left = e + "%", r.current.innerText = he(e / 100 * (s.duration || NaN))
							}
						}), [r, t, l, s.currentTime, s.seeking, s.duration, n, o]);
						var g = te((function(e) {
								if (!o.current) return {
									position: NaN,
									percentage: NaN
								};
								var n = function(e) {
										for (var n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) n += e.offsetLeft - e.scrollLeft, e = e.offsetParent;
										return n
									}(o.current),
									t = o.current.offsetWidth + n,
									r = e > t ? t - n : e - n >= 0 ? e - n : 0;
								return {
									percentage: e - n >= t ? 100 : e - n > 0 ? (e - n) / o.current.offsetWidth * 100 > 100 ? 100 : (e - n) / o.current.offsetWidth * 100 : 0,
									position: r
								}
							}), [o]),
							m = te((function(e) {
								var n = e.clientX,
									t = g(n).percentage;
								r.current && (r.current.innerText = he(t / 100 * (s.duration || NaN)), r.current.style.left = t + "%", r.current.classList.add("anchor-visible"))
							}), [r, g, s.duration]),
							y = te((function() {
								r.current && r.current.classList.remove("anchor-visible")
							}), [r]),
							b = te((function(e) {
								var o = "clientX" in e ? e.clientX : e.touches[0].clientX;
								if (n.current && t.current && r.current && !0 !== s.seeking) {
									n.current.classList.remove("thumb-animation"), t.current.classList.remove("thumb-animation");
									var a = g(o),
										i = a.position,
										c = a.percentage;
									n.current.style.left = i + "px", r.current.style.left = c + "%", t.current.style.width = c + "%", r.current.innerText = he(c / 100 * (s.duration || NaN)), h.current = c
								}
							}), [r, t, g, s.duration, s.seeking, n]),
							w = te((function(e) {
								if (n.current && t.current && r.current && !0 !== s.seeking) {
									var o = "clientX" in e ? e.clientX : (e.touches[0] || {}).pageX,
										i = g(o),
										u = i.position,
										l = i.percentage;
									n.current.style.left = u + "px", t.current.style.width = l + "%", r.current.style.left = l + "%", r.current.innerText = he(l / 100 * (s.duration || NaN));
									var d = l / 100 * (s.duration || NaN);
									c.seek(d).catch((function() {})), a()
								}
							}), [r, t, g, c, a, s.duration, s.seeking, n]),
							_ = te((function() {
								if (null !== h.current) {
									var e = h.current / 100 * (s.duration || NaN);
									c.seek(e).then((function() {
										d(!1), h.current = null
									})).catch((function() {
										d(!1), h.current = null
									}))
								} else d(!1);
								n.current && t.current && (n.current.classList.add("thumb-animation"), t.current.classList.add("thumb-animation"), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", _), document.removeEventListener("touchend", _), document.removeEventListener("touchmove", b))
							}), [t, b, c, s.duration, n]),
							x = te((function(e) {
								if (!(e instanceof MouseEvent && 2 === e.button)) {
									if (e.preventDefault(), e.target !== n.current) return w(e);
									d(!0), document.addEventListener("mousemove", b), document.addEventListener("mouseup", _), document.addEventListener("touchend", _), document.addEventListener("touchmove", b)
								}
							}), [_, b, n, w]);
						return Z((function() {
							n.current && (p || (v(!0), o.current && (o.current.addEventListener("mousemove", m), o.current.addEventListener("mouseout", y), o.current.addEventListener("mousedown", x), o.current.addEventListener("touchstart", x))))
						}), [o, y, m, p, x, n]), {
							isDragging: l
						}
					}({
						thumb: s,
						bar: i,
						container: l,
						anchor: c,
						resetPlayerVisibilityCounter: t
					}).isDragging;
				Z((function() {
					n(d)
				}), [d, n]);
				var f = r.playerConfig.showProgressBar,
					p = void 0 === f || f;
				return function(e, n) {
					var t = ee(document.createElement("div"));
					Z((function() {
						var e;
						t.current && t.current.parentElement !== n.current && (t.current.className = "buffer-fragment", null === (e = n.current) || void 0 === e || e.append(t.current))
					}), [n]);
					var r = te((function(e, n) {
							t.current.style.width = n - e + "px", t.current.style.left = e + "px"
						}), []),
						o = te((function() {
							if (n.current && e)
								for (var t = n.current.offsetWidth / e.duration, o = 0; o < e.buffered.length; o++) {
									var a = e.buffered.start(o) * t,
										i = e.buffered.end(o) * t;
									r(a, i)
								}
						}), [r, n, e]);
					Z((function() {
						if (e) return e.addEventListener("seeked", o), e.addEventListener("progress", o),
							function() {
								e.removeEventListener("seeked", o), e.removeEventListener("progress", o)
							}
					}), [o, e])
				}(r.videoEl, u), p ? y("div", {
					className: "VideoProgress",
					noTogglePlay: !0
				}, y("span", {
					className: "both-side-time"
				}, he(r.currentTime)), y("div", {
					className: "container",
					ref: l
				}, y("div", {
					className: "ref-bar"
				}), y("div", {
					className: "buffer-bar",
					ref: u
				}), y("div", {
					className: "bar thumb-animation",
					ref: i
				}), y("div", {
					className: d ? "anchor anchor-visible" : "anchor",
					ref: c
				}), y("div", {
					class: "thumb thumb-animation",
					ref: s
				}, y("div", {
					className: "thumb-display"
				}))), y("span", {
					className: "left-side-time"
				}, he(a - r.currentTime)), y("span", {
					className: "both-side-time"
				}, he(a))) : null
			}

			function je() {
				var e = re(Le),
					n = e.state,
					t = e.method,
					r = n.captions,
					o = n.captionVisibility,
					a = n.activeCaptionLang,
					i = n.videoEl,
					s = ne((function() {
						return null === i ? null : i.textTracks
					}), [i]);
				Z((function() {
					a && null !== s && Array.from(s).forEach((function(e) {
						e.language === a && o ? e.mode = "showing" : e.mode = "hidden"
					}))
				}), [o, a, s]);
				var c = Array.from(r || []).filter((function(e) {
						var n = e.language;
						return Boolean(n)
					})).length > 0,
					u = n.playerConfig.showCaptionsControl;
				return c && (void 0 === u || u) ? y("div", {
					className: "Captions"
				}, y(xe.captions, {
					onClick: function() {
						return t.setCaptionVisibility(!o)
					},
					isActive: o
				})) : null
			}
			me(i(320)), me(i(900)), me(i(406)), me(i(694)), me(i(683)), me(i(623)), me(i(605)), me(i(104));
			var Fe = function(e) {
					var n = e.state,
						t = e.method,
						r = e.handleBack,
						o = n.captions,
						a = n.activeCaptionLang,
						i = n.captionVisibility;
					return y("div", {
						className: "panel-list"
					}, y("div", {
						className: "panel-header",
						onClick: r
					}, y(xe.backArrow, {
						className: "panel-back"
					}), " Captions"), Array.from(o || []).map((function(e) {
						var n = e.language,
							r = e.label;
						return n && y("div", {
							className: "panel panel-content",
							onClick: function(e) {
								return function(e, n) {
									e.stopImmediatePropagation(), n === a ? t.setCaptionVisibility(!1) : (t.updateActiveCaptionLang(n), t.setCaptionVisibility(!0))
								}(e, n)
							}
						}, a === n && i && y(xe.tick, {
							className: "panel-back"
						}), r, "   (", n, ")")
					})))
				},
				Ue = function(e) {
					var n = e.state,
						t = e.method,
						r = e.handleBack,
						o = n.availablePlaybackRates,
						a = n.playbackRate,
						i = n.playerConfig.playbackSpeedOptions || o;
					return i ? y("div", {
						className: "panel-list"
					}, y("div", {
						className: "panel-header",
						onClick: r
					}, y(xe.backArrow, {
						className: "panel-back"
					}), "   Playback Speed"), i.map((function(e) {
						return y("div", {
							className: "panel panel-content",
							key: e,
							onClick: function(n) {
								return function(e, n) {
									e.stopImmediatePropagation(), t.setPlaybackRate(n), r(e)
								}(n, e)
							}
						}, a === e && y(xe.tick, {
							className: "panel-back"
						}), 1 !== e ? e : "Normal")
					}))) : null
				},
				He = function(e) {
					var n = e.state,
						t = e.method,
						r = e.handleBack,
						o = n.availableQualities,
						a = n.activeQualityTrackId,
						i = n.abrStatus,
						s = function(e, n) {
							e.stopImmediatePropagation(), t.selectQualityTrack(n), r(e)
						};
					if (!o) return null;
					var c = o.filter((function(e) {
						return e.id === a
					}))[0];
					return y("div", {
						className: "panel-list"
					}, y("div", {
						className: "panel-header",
						onClick: r
					}, y(xe.backArrow, {
						className: "panel-back"
					}), " Quality"), y("div", {
						className: "panel panel-content",
						onClick: function(e) {
							return s(e, -1)
						}
					}, i && y(xe.tick, {
						className: "panel-back"
					}), "Auto"), o.map((function(e) {
						var n = e.label,
							t = e.id;
						return y("div", {
							className: "panel panel-content",
							onClick: function(e) {
								return s(e, t)
							},
							key: t
						}, c && c.id === t && !i && y(xe.tick, {
							className: "panel-back"
						}), n)
					})))
				};

			function ze(e) {
				var n, t = e.settingEL,
					r = we(Y(!1), 2),
					o = r[0],
					a = r[1],
					i = re(Le),
					s = i.state,
					c = i.method,
					u = s.videoEl,
					l = s.playbackRate,
					d = s.availableQualities,
					f = s.abrStatus,
					p = s.activeCaptionLang,
					v = s.captions,
					h = s.activeQualityTrackId,
					g = s.playerConfig,
					m = g.showCaptionsControl,
					b = void 0 === m || m,
					w = g.showQualityControl,
					_ = void 0 === w || w,
					x = g.showSpeedControl,
					E = void 0 === x || x,
					k = d && "number" == typeof h && d.filter((function(e) {
						return e.id === h
					}))[0],
					A = p || "",
					T = Array.from(v || []).filter((function(e) {
						var n = e.language;
						return Boolean(n)
					})).length > 0,
					S = function(e, n) {
						e.stopImmediatePropagation(), a(n)
					},
					P = function(e) {
						e.stopImmediatePropagation(), a(!1)
					};
				return y("div", {
					className: "badge",
					style: {
						maxHeight: function() {
							if (null !== u && t.current) {
								var e = u.clientHeight;
								return t.current.offsetTop / e > .5 ? t.current.offsetTop - 32 : e - (t.current.offsetTop + t.current.offsetHeight + 20)
							}
						}(),
						maxWidth: t.current ? t.current.offsetLeft + t.current.offsetWidth : NaN
					}
				}, "playback speed" === o ? y(Ue, {
					state: s,
					method: c,
					handleBack: P
				}) : "quality" === o ? y(He, {
					state: s,
					method: c,
					handleBack: P
				}) : "captions" === o && T ? y(Fe, {
					state: s,
					method: c,
					handleBack: P
				}) : y("div", {
					className: "panel-list"
				}, E && y("div", {
					className: "panel",
					onClick: function(e) {
						return S(e, "playback speed")
					}
				}, y("span", {
					className: "label"
				}, "Speed"), y("span", null, 1 === l ? "Normal" : l)), k && d && _ && y("div", {
					className: "panel",
					onClick: function(e) {
						return S(e, "quality")
					}
				}, y("span", {
					className: "label"
				}, "Quality "), y("span", null, f ? "Auto (".concat(k.label, ")") : "".concat(k.label))), T && b && y("div", {
					className: "panel",
					onClick: function(e) {
						return S(e, "captions")
					}
				}, y("span", {
					className: "label"
				}, "Captions "), y("span", null, (n = A, Array.from(v || []).map((function(e) {
					return e.language === n && e.label
				})).filter(Boolean)[0])))))
			}

			function We(e) {
				var n = e.setSettingLayer,
					t = e.isSettingLayerOpen,
					r = we(Y(!1), 2),
					o = r[0],
					a = r[1],
					i = ee(null),
					s = re(Le).state.playerConfig,
					c = s.showCaptionsControl,
					u = void 0 === c || c,
					l = s.showQualityControl,
					d = void 0 === l || l,
					f = s.showSpeedControl,
					p = void 0 === f || f;
				return Z((function() {
					!t && o && a(!1)
				}), [o, t]), u || d || p ? y("div", {
					className: "Setting",
					ref: i,
					onClick: function(e) {
						a(!o), o || (e.stopPropagation(), n(!0))
					}
				}, o && y(ze, {
					settingEL: i
				}), y(xe.setting, {
					className: o ? "controller-icon badge-open-animation" : "controller-icon"
				})) : null
			}

			function Ge() {
				var e = function() {
						var e = re(Le),
							n = e.state,
							t = e.method,
							r = n.hostEl,
							o = n.shadowDOMRef,
							a = n.isFullscreen,
							i = n.videoEl,
							s = n.activeCaptionLang,
							c = function(e) {
								var n = ee(null),
									t = ee(),
									r = ee(),
									o = ee();
								Z((function() {
									n.current = document.createElement("style"), n.current.innerHTML = "* { cursor: none !important; }"
								}), []);
								var a = te((function(e) {
										t.current = e
									}), []),
									i = te((function() {
										"function" == typeof t.current && t.current(o.current)
									}), []),
									s = te((function(t) {
										e && n.current && (t || o.current ? (n.current.remove(), o.current = !1, i()) : (e.appendChild(n.current), o.current = !0, i()))
									}), [e, i]),
									c = te((function() {
										o.current && (r.current && clearInterval(r.current), r.current = setTimeout((function() {
											return s(!1)
										}), 2e3), s(!0))
									}), [s]);
								return {
									show: te((function() {
										e && (r.current && clearInterval(r.current), e.removeEventListener("mousemove", c), s(!0))
									}), [c, s, e]),
									hide: te((function() {
										e && setTimeout((function() {
											e.addEventListener("mousemove", c), s(!1)
										}), 2e3)
									}), [c, s, e]),
									onChange: a
								}
							}(o),
							u = c.show,
							l = c.hide;

						function d(e) {
							if (null !== i) {
								var n = i,
									o = !0 === e;
								ye(i) ? function(e) {
									if (r) {
										var n, t = r,
											o = (n = t).requestFullscreen || n.webkitRequestFullscreen || n.mozRequestFullScreen || n.msRequestFullscreen;
										if (e) o.call(t), t.className += " vdo-full-screen-player", f();
										else {
											var a = window.document;
											a.exitFullscreen ? a.exitFullscreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.webkitExitFullscreen && a.webkitExitFullscreen(), t.className = t.className.replace(" vdo-full-screen-player", "")
										}
									}
								}(o) : o ? (n.webkitEnterFullscreen(), f(n)) : (n.webkitExitFullscreen(), v(n)), t.updateFullscreenStatus(o)
							}
						}

						function f(e) {
							void 0 === e && (e = document), e.addEventListener("webkitfullscreenchange", p), e.addEventListener("mozfullscreenchange", p), e.addEventListener("fullscreenchange", p), e.addEventListener("MSFullscreenChange", p)
						}

						function p() {
							var e = window.document;
							if (void 0 === (e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement) && r && (r.className = r.className.replace(" vdo-full-screen-player", ""), v(), t.updateFullscreenStatus(!1)), i) {
								var n = Array.from(null == i ? void 0 : i.textTracks).find((function(e) {
									return "showing" === e.mode
								}));
								if (!n) return;
								n.language !== s && t.updateActiveCaptionLang(n.language)
							}
						}

						function v(e) {
							void 0 === e && (e = document), e.removeEventListener("webkitfullscreenchange", p), e.removeEventListener("mozfullscreenchange", p), e.removeEventListener("fullscreenchange", p), e.removeEventListener("MSFullscreenChange", p)
						}
						return Z((function() {
							a ? l() : u()
						}), [l, a, u]), {
							toggle: function() {
								return d(!a)
							},
							setFullscreen: function(e) {
								return d(e)
							}
						}
					}().toggle,
					n = re(Le).state.playerConfig.showFullScreen;
				return void 0 === n || n ? y("div", {
					className: "FullScreen"
				}, y(xe.fullScreen, {
					onClick: e
				})) : null
			}

			function Ke() {
				var e = ee(null),
					n = re(Le),
					t = n.state,
					r = n.method,
					o = we(Y(100 * (t.volume || 1)), 2),
					a = o[0],
					i = o[1];
				! function(e, n, t) {
					void 0 === t && (t = "0");
					var r = Y(t),
						o = r[0],
						a = (r[1], te((function(e) {
							return "linear-gradient(to right, " + n + " 0%, " + n + " " + e + "%, var(--accent) " + e + "%, var(--accent) 100%)"
						}), [n]));
					Z((function() {
						if (null !== e.current) {
							var n = (parseInt(o, 10) / parseInt(e.current.max, 10) * 100).toFixed(2);
							e.current.style.background = a(n)
						}
					}), [a, e, o]), $((function() {
						null !== e.current && (e.current.oninput = function() {
							var n = e.current,
								t = (parseInt(n.value, 10) / parseInt(n.max, 10) * 100).toFixed(2);
							n.style.background = a(t)
						}.bind(e.current), e.current.style.background = a(t))
					}), [t, a, e])
				}(e, "var(--primary)", String(a));
				var s = function() {
						return t.muted ? r.unmute() : r.mute()
					},
					c = t.playerConfig.showVolume,
					u = void 0 === c || c,
					l = t.duration,
					d = void 0 === l ? NaN : l;
				return u ? y("div", {
					className: "Volume"
				}, y("div", {
					class: "wrapper"
				}, t.muted ? y(xe.mute, {
					onClick: s
				}) : y(a <= 30 ? xe.lowVolume : xe.volume, {
					onClick: s
				}), y("input", {
					ref: e,
					class: "vdo-volume-range",
					onInput: function(e) {
						var n = e.currentTarget;
						i(parseInt(n.value, 10)), r.setVolume(parseInt(n.value, 10) / 100)
					},
					type: "range",
					min: "0",
					max: "100",
					value: a
				}), y("div", {
					class: "Volume-Time"
				}, "".concat(he(t.currentTime), "/").concat(he(d))))) : null
			}

			function Qe() {
				var e = re(Le).state,
					n = e.topLinkUrl,
					t = void 0 === n ? "#" : n,
					r = e.topLinkMessage,
					o = void 0 === r ? "" : r,
					a = e.topLinkImage;
				return y("div", {
					className: "vdo-full"
				}, y("div", {
					className: "TopLink",
					style: {
						backgroundImage: "url(".concat(void 0 === a ? "" : a, ")")
					}
				}, y("a", {
					href: t,
					target: "_blank",
					rel: "noreferrer"
				}, y("p", {
					dangerouslySetInnerHTML: {
						__html: o
					}
				}))))
			}

			function Je() {
				return y("div", {
					id: "sp13",
					className: "setting-layer"
				})
			}

			function qe() {
				var e = re(Le).state,
					n = e.error,
					t = void 0 === n ? {} : n,
					r = e.videoEl,
					o = e.metaData,
					a = t.message || "Please try on another browser.",
					i = t.code || null,
					s = o && o.posters ? Array.from(o.posters).sort((function(e, n) {
						return n.height - e.height
					})) : [];
				return s.length && r && (r.poster = s[0].url), y("div", {
					className: "vdo-full error-layer",
					style: r && "" !== r.poster ? {
						background: "rgba(0, 0, 0, 0.8)"
					} : {
						background: "#444444"
					}
				}, y("div", {
					className: "container"
				}, y("div", {
					style: {
						fontSize: "155%"
					}
				}, "Error ", i && i, " "), y("div", {
					style: {
						marginTop: 10
					}
				}, a)))
			}

			function Ye() {
				var e = Boolean(window.WebKitPlaybackTargetAvailabilityEvent),
					n = re(Le).state,
					t = n.videoEl,
					r = n.playerConfig.enableAirPlay;
				return void 0 !== r && r && e && t ? y("div", {
					className: "Airplay"
				}, y(xe.airPlay, {
					onClick: function() {
						return t.webkitShowPlaybackTargetPicker()
					}
				})) : null
			}
			me(i(491)), me(i(431)), me(i(91)), me(i(649)), me(i(154)), me(i(462));
			var Xe = function(e) {
					return e.paused ? e.play() : e.pause()
				},
				Ze = function(e) {
					return e.playbackRate = Math.round(10 * (e.playbackRate += .2)) / 10
				},
				$e = function(e) {
					return e.playbackRate = Math.round(10 * (e.playbackRate -= .2)) / 10
				},
				en = function(e) {
					return e.currentTime += 10
				},
				nn = function(e) {
					return e.currentTime -= 10
				};

			function tn(e, n) {
				void 0 === n && (n = {});
				var t, r, o, a, i, s, c, u, l, d, f, p, v, h = [],
					g = (i = void 0 === (a = (o = void 0 === (t = n) ? {} : t).togglePlay) ? " " : a, c = void 0 === (s = o.speedUp) ? "}" : s, l = void 0 === (u = o.speedDown) ? "{" : u, f = void 0 === (d = o.forward) ? "ArrowRight" : d, v = void 0 === (p = o.backward) ? "ArrowLeft" : p, (r = {})[i] = Xe, r[c] = Ze, r[l || "{"] = $e, r[f] = en, r[v] = nn, r),
					m = function(n) {
						n.preventDefault();
						var t = n.key,
							r = n.shiftKey && "Shift+" + n.key.toUpperCase(),
							o = n.ctrlKey && "Ctrl+" + n.key.toUpperCase();
						return t in g ? (h.forEach((function(e) {
							return e()
						})), g[t](e)) : r && r in g ? (h.forEach((function(e) {
							return e()
						})), g[r](e)) : o && o in g ? (h.forEach((function(e) {
							return e()
						})), g[o](e)) : void 0
					};
				return document.body.addEventListener("keydown", m), {
					detach: function() {
						return document.body.removeEventListener("keydown", m)
					},
					onFire: function(e) {
						"function" == typeof e && h.push(e)
					}
				}
			}

			function rn() {
				var e = re(Le).state,
					n = e.duration,
					t = void 0 === n ? NaN : n;
				return y("div", {
					className: "Duration"
				}, y("div", {
					className: "time-to-consume"
				}, he(t - e.currentTime)), y("div", {
					className: "consumed"
				}, he(e.currentTime)), y("div", {
					className: "divider"
				}, "/"), y("div", {
					className: "total-duration"
				}, he(t)))
			}

			function on() {
				return (on = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}

			function an() {
				return y(w, null, y("div", on({
					className: "GradientLayer"
				}, {
					top: !0
				})), y("div", on({
					className: "GradientLayer"
				}, {
					left: !0
				})), y("div", on({
					className: "GradientLayer"
				}, {
					right: !0
				})), y("div", on({
					className: "GradientLayer"
				}, {
					bottom: !0
				})))
			}

			function sn(e, n) {
				var t = e.cloneNode(!0);
				t.style.top = "-999px", t.style.visibility = "hidden", n.appendChild(t);
				var r = t.offsetHeight,
					o = t.offsetWidth;
				return n.removeChild(t), [o, r]
			}
			me(i(370)), me(i(618));
			var cn = function(e, n) {
				return e / n * 100
			};

			function un(e, n) {
				var t = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					n && (r = r.filter((function(n) {
						return Object.getOwnPropertyDescriptor(e, n).enumerable
					}))), t.push.apply(t, r)
				}
				return t
			}

			function ln(e) {
				for (var n = 1; n < arguments.length; n++) {
					var t = null != arguments[n] ? arguments[n] : {};
					n % 2 ? un(Object(t), !0).forEach((function(n) {
						Ee(e, n, t[n])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : un(Object(t)).forEach((function(n) {
						Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
					}))
				}
				return e
			}

			function dn(e) {
				var n = e.playerVisibility,
					t = re(Le).state,
					r = t.captionVisibility,
					o = t.videoEl,
					a = t.activeCaptionLang,
					i = t.isFullscreen,
					s = we(Y(!1), 2),
					c = s[0],
					u = s[1];
				Z((function() {
					o && u(i && !ye(o))
				}), [i, o]);
				var l = ee([]),
					d = ee(null),
					f = te((function(e) {
						if (o)
							if (e) {
								var n = Array.from(o.textTracks).find((function(e) {
									return e.language === a
								}));
								n && (n.mode = "showing")
							} else {
								if (o.textTracks instanceof TextTrackList == 0) return;
								Array.from(o.textTracks).forEach((function(e) {
									e.mode = "hidden"
								}))
							}
					}), [a, o]),
					p = te((function(e) {
						if (d.current) {
							var n = e.cueContainer;
							n && d.current.contains(n) && (d.current.removeChild(n), e.cueContainer = document.createElement("div"))
						}
					}), []),
					v = te((function(e, n) {
						var t;
						if (d.current && !c && (null === (t = e.track) || void 0 === t ? void 0 : t.language) === a) {
							var r = function(e, n) {
								var t = e.cueContainer;
								t.classList.add("cue"), t.style.position = "absolute", t.style.setProperty("box-sizing", "border-box");
								var r, o, a = Boolean(e.vertical),
									i = function(e, n) {
										var t = e.line,
											r = e.snapToLines,
											o = e.vertical ? n.offsetWidth : n.offsetHeight,
											a = "number" == typeof t;
										return a && !r && (t > 100 || t < 0) ? o : a && !r ? t / 100 * o : a && !0 === r ? 30 * t : o
									}(e, n);
								if (a ? t.style.left = i + "px" : t.style.top = i + "px", "auto" !== e.position) {
									var s = (r = e.position, o = e.align, "number" != typeof r || r > 100 || r < 0 ? "left" === o ? 0 : "right" === o ? 100 : 50 : r);
									a ? t.style.top = s + "%" : (t.style.left = "calc(" + s + "% - 12px)", t.style.maxWidth = (100 - s) / 100 * n.offsetWidth + 12 + "px")
								}
								a && (t.style.writingMode = "vertical-" + e.vertical);
								var c = e.size;
								a ? t.style.height = c + "%" : t.style.width = c + "%", t.style.textAlign = e.align;
								var u = document.createElement("span");
								return u.appendChild(e.getCueAsHTML()), t.append(u), t
							}(e, d.current);
							if (r) {
								f(!1);
								var o = function(e, n) {
										var t, r, o = e.cueContainer,
											a = sn(o, n)[1],
											i = parseInt(o.style.top.split("px")[0], 10),
											s = Array.from(n.children).filter((function(e) {
												return !e.style["writing-mode"]
											}))[0];
										if (!0 === e.snapToLines && s) {
											var c = [s.offsetTop, s.offsetHeight + s.offsetTop];
											void 0 === (r = c) && (r = [0, 0]), (t = i) >= r[0] && t <= r[1] && (i = n.offsetHeight - c[1] > c[0] ? c[1] : c[0] - a)
										}
										return i < 0 ? 0 : i + a > n.offsetHeight ? n.offsetHeight - a : i
									}(e, d.current),
									i = function(e, n) {
										var t = e.cueContainer,
											r = sn(t, n)[0],
											o = parseInt(t.style.left.split("px")[0], 10);
										return o < 0 ? 0 : o + r > n.offsetWidth ? n.offsetWidth - r : o
									}(e, d.current);
								r.style.top = "".concat(cn(o, d.current.offsetHeight), "%"), r.style.left = "".concat(cn(i, d.current.offsetWidth), "%"), d.current.appendChild(r), e.removeCue = function() {
									! function(e, n) {
										var t = e.find((function(e) {
											return e.track === n.track
										}));
										if (t) {
											var r = e.indexOf(t);
											r > -1 && e.splice(r, 1)
										}
									}(l.current, e), p(e)
								}, n.addEventListener("exit", e.removeCue)
							}
						}
					}), [a, c, p, f]),
					h = te((function(e) {
						if (e.language === a) {
							var n = e.activeCues;
							n && Array.from(n).forEach((function(e) {
								l.current.push(e._vdoCue), v(e._vdoCue, e)
							}))
						}
					}), [a, v]);
				return Z((function() {
					if (o) {
						var e = Array.from(o.textTracks).find((function(e) {
							return e.language === a
						}));
						e && (l.current.forEach((function(e) {
							e.removeCue && e.removeCue()
						})), h(e))
					}
				}), [a, p, h, o]), Z((function() {
					f(!!c)
				}), [c, f]), Z((function() {
					o && Array.from(o.textTracks).forEach((function(e) {
						if (e.cues) {
							var n = e.cues;
							Array.from(n).forEach((function(n) {
								n._vdoCue = {
									language: e.language,
									cueContainer: document.createElement("div"),
									align: n.align,
									line: n.line,
									position: n.position,
									size: n.size,
									snapToLines: n.snapToLines,
									text: n.text,
									track: n.track,
									vertical: n.vertical,
									getCueAsHTML: function() {
										return new VTTCue(0, 0, n._vdoCue.text).getCueAsHTML()
									}
								}, n.onenter = function() {
									return h(e)
								}
							}))
						}
					}))
				}), [h, o]), r ? y("div", {
					ref: d,
					class: "Caption-Container",
					style: ln({
						display: r ? "block" : "none"
					}, !n && {
						bottom: 0,
						height: "100%"
					})
				}) : null
			}

			function fn(e) {
				var n = e.attachKeyBinding,
					t = re(Le),
					r = t.state,
					o = t.method,
					a = ee(null),
					i = r.status,
					s = r.showTopLink,
					c = r.hasError,
					u = r.isLiteMode,
					l = r.isFullscreen,
					d = r.waitingForPlayback,
					f = r.playerConfig.showPlayerOnPause,
					p = void 0 !== f && f,
					v = we(Y(!0), 2),
					h = v[0],
					g = v[1],
					m = we(Y(!1), 2),
					b = m[0],
					_ = m[1],
					x = we(Y(!1), 2),
					E = x[0],
					k = x[1],
					A = ee(),
					T = a.current,
					S = 2e3,
					P = p ? 1 === i : 1 === i || 2 === i,
					C = function(e, n) {
						void 0 === n && (n = 600);
						var t = ee(!1),
							r = ee();
						return Z((function() {
							if (e) return e.addEventListener("touchend", o),
								function() {
									return e.removeEventListener("touchend", o)
								};

							function o() {
								t.current = !0, r.current && clearInterval(r.current), r.current = setTimeout((function() {
									t.current = !1
								}), n)
							}
						}), [e, n]), {
							isTouchEventRef: t
						}
					}(T).isTouchEventRef,
					L = te((function() {
						g(!0), A.current && clearInterval(A.current), A.current = setTimeout((function() {
							g((function() {
								return !(!b && !E && P)
							}))
						}), S)
					}), [P, E, b]);
				Z((function() {
					if (n && r.eventBus && r.videoEl) {
						var e = new tn(r.videoEl),
							t = e.detach,
							o = e.onFire;
						return r.eventBus.on("detachKeyBinding", t), o(L),
							function() {
								return t()
							}
					}
				}), [n, r.eventBus, r.videoEl, L]);
				var O = te((function() {
					A.current && clearInterval(A.current), A.current = setTimeout((function() {
						g((function() {
							return !(!b && !E && P)
						}))
					}), S)
				}), [P, E, b]);
				Z((function() {
					A.current && clearInterval(A.current), A.current = setTimeout((function() {
						g((function() {
							return !(!b && !E && P)
						}))
					}), S)
				}), [P, E, b]);
				var N = te((function(e) {
					C.current && !h && (e.stopImmediatePropagation(), g(!0), A.current && clearInterval(A.current), A.current = setTimeout((function() {
						g((function() {
							return !(!b && !E && P)
						}))
					}), S))
				}), [P, E, b, C, h]);
				return Z((function() {
					if (T) return T.addEventListener("click", N, !0),
						function() {
							T.removeEventListener("click", N, !0)
						}
				}), [N, T]), !0 === c ? y(qe, null) : !0 === s ? y(Qe, null) : !0 === u ? y(Ie, {
					isLiteMode: u
				}) : -1 === i || !0 === d ? y(_e, null) : 0 === i ? y(Ie, null) : y(w, null, i <= 0 && y(Ne, null), y("div", {
					className: "vdo-full",
					ref: a,
					onMouseMove: function() {
						C.current || (g(!0), A.current && clearInterval(A.current), A.current = setTimeout((function() {
							g((function() {
								return !(!b && !E && P)
							}))
						}), S))
					},
					onClick: function(e) {
						L(), b ? _(!b) : function(e) {
							if (!C.current) {
								var n = e.target;
								if ("svg" === n.nodeName && null === n.parentNode) return !1;
								for (; n.parentNode;) {
									if ("svg" === n.nodeName) return !1;
									if ("path" === n.nodeName) return !1;
									if ("INPUT" === n.nodeName) return !1;
									if (n.hasAttribute("noTogglePlay")) return !1;
									n = n.parentNode
								}
								return !0
							}
						}(e) && o && o.togglePlay()
					}
				}, y("div", {
					className: l ? "Player no-select On-Fullscreen" : "Player no-select",
					style: {
						display: h ? "grid" : "none"
					}
				}, y(an, null), y(De, null), y(1 === i ? Me : Be, null), y(Ve, null), y(Re, {
					resetPlayerVisibilityCounter: O,
					playerVisibility: h,
					isTouchEvent: C.current,
					setIsProgressBarDragging: k
				}), y(Ke, null), y(je, null), y(rn, null), y(Ye, null), y(Ge, null), b && y(Je, null), y(We, {
					isSettingLayerOpen: b,
					setSettingLayer: _
				})), y(dn, {
					playerVisibility: h
				})))
			}
			me(i(315)), me(i(651));
			var pn = function() {
					var e, n = "",
						t = [];

					function r() {
						t.forEach((function(n) {
							! function(n) {
								var t = e.offsetWidth,
									r = n.split("-"),
									o = r[0],
									a = r[2];
								return "max" === o ? parseInt(a.substring(0, 3), 10) > t : t > parseInt(a.substring(0, 3), 10)
							}(n) ? e.classList.remove("cmq-" + n): e.classList.add("cmq-" + n)
						}))
					}
					return {
						addCSS: function(e) {
							for (var r = new RegExp("((@vdo-responsive [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi"), o = r.exec(e); o;) {
								var a = o[2],
									i = o[3],
									s = (a.match(/\(([^)]+)\)/gm) || ["--CMQ-Error--no-proper-range"])[0].replace(": ", "-").replace(/[()]/g, "");
								t.indexOf(s) < 0 && t.push(s), n += "\n", n += "/* -------- @vdo-responsive " + s + " -------- */", n += "\n";
								for (var c = new RegExp("([\\s\\S]*?){([\\s\\S]*?)}", "gi"), u = c.exec(i); u;) n += "\n", n += ".cmq-" + s + " " + u[0], n += "\n", u = c.exec(i);
								o = r.exec(e)
							}
						},
						listen: function(t) {
							var o, a, i, s;
							e = t, o = t, a = r, (i = document.createElement("iframe")).style.cssText = "position:absolute;left:0;width:100%;height:0px;margin:1px 0 0;border:none;opacity:0;", i.onload = function() {
								i.contentWindow && (i.contentWindow.onresize = function() {
									a(o)
								})
							}, o.appendChild(i), r(), (s = document.createElement("STYLE")).innerHTML = n, e.append(s)
						}
					}
				}(),
				vn = function(e, n) {
					for (var t = 0, r = n.length, o = e.length; t < r; t++, o++) e[o] = n[t];
					return e
				};

			function hn() {
				var e = {};
				return {
					on: function(n, t) {
						return e[n] ? e[n].push(t) : e[n] = [t],
							function() {
								var r = e[n].indexOf(t);
								r > -1 && e[n].splice(r, 1)
							}
					},
					emit: function(n) {
						for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
						var o = e[n],
							a = e["*"];
						o && o.forEach((function(e) {
							return e.apply(void 0, t)
						})), a && a.forEach((function(e) {
							return e.apply(void 0, vn([n], t))
						}))
					}
				}
			}
			var gn = {
				theme01: i(558),
				theme02: i(754)
			};

			function mn(e) {
				var n = e.videoEl,
					t = e.shadowDOMRef,
					r = e.attachKeyBinding,
					o = e.hostEl,
					a = e.themeId,
					i = e.eventBus,
					s = e.optionalParam,
					c = re(Le),
					u = c.method,
					l = c.state;
				return $((function() {
					l.videoEl || (u.init({
						videoEl: n,
						themeId: a,
						optionalParam: s,
						shadowDOMRef: t,
						hostEl: o
					}), u.attachEventListener(n, i))
				}), [i, u, o, t, n, l.videoEl, a, s]), y(fn, {
					attachKeyBinding: r
				})
			}
			var yn = function(e, n, t) {
					var r = t.theme,
						o = void 0 === r ? "GT:02" : r,
						i = t.eventBus,
						c = void 0 === i ? new hn : i,
						u = t.keyBinding,
						l = void 0 === u || u,
						d = t.primaryColor,
						f = t.secondaryColor,
						v = t.iconColor;
					if (! function(e) {
							for (var n = [de, fe, pe, ve], t = 0; t < n.length; t++)
								if (!1 === n[t]) return le(e), !1;
							return !0
						}(n)) return {
						eventBus: c
					};
					e.controls = !1;
					var h = function() {
							var e = document.createElement("player-ui");
							return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.zIndex = "3", e.style.top = "0px", e.style.left = "0px", e
						}(),
						g = function() {
							var e = document.createElement("div");
							return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.zIndex = "1", e
						}();
					n.appendChild(h);
					var m = h.attachShadow({
						mode: "open"
					});
					m.appendChild(g),
						function(e) {
							var n = document.createElement("style");
							n.innerHTML = "\n    .vdo-full-screen-player {\n      width: 100% !important;\n      height: 100% !important;\n      padding-bottom: initial !important;\n      background: #1d1d1d;\n    }\n  ", e.append(n)
						}(n);
					var b = o.split(":")[1],
						_ = gn["theme".concat(b)].default;
					return pn.addCSS(_), me(_, !0), ge.inject(m), pn.listen(g),
						function(e, n) {
							var t = e.primaryColor,
								r = void 0 === t ? "FF0000" : t,
								o = e.secondaryColor,
								a = void 0 === o ? "FFFFFF" : o,
								i = e.iconColor,
								s = void 0 === i ? "FFFFFF" : i,
								c = document.createElement("STYLE");
							c.innerHTML = "\n    :host {\n      --primary: #" + r + ";\n      --accent: #" + a + ";\n      --icon-color: #" + s + ";\n    }\n  ", n.appendChild(c)
						}({
							primaryColor: d,
							secondaryColor: f,
							iconColor: v
						}, m),
						function(e, n, t) {
							var r, o, i;
							s.__ && s.__(e, n), o = (r = "function" == typeof t) ? null : t && t.__k || n.__k, i = [], I(n, e = (!r && t || n).__k = y(w, null, [e]), o || p, p, void 0 !== n.ownerSVGElement, !r && t ? [t] : o ? null : n.firstChild ? a.call(n.childNodes) : null, i, !r && t ? t : o ? o.__e : n.firstChild, r), D(i, e)
						}(y(Oe, null, y(mn, {
							videoEl: e,
							shadowDOMRef: m,
							hostEl: n,
							themeId: o,
							optionalParam: t,
							eventBus: c,
							attachKeyBinding: l
						})), g), {
							eventBus: c
						}
				},
				bn = ["_metaDataLoadSuccess", "error", "loading", "load", "licenseLoad", "variantSelect", "adaptation", "hlseCookieReceived", "hlseCookieRequested", "hlseCookieGranted", "workerVersion"],
				wn = ["play", "pause", "seeking", "seeked", "ended"],
				_n = function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				},
				xn = function(e, n) {
					var t, r, o, a, i = {
						label: 0,
						sent: function() {
							if (1 & o[0]) throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(a) {
						return function(s) {
							return function(a) {
								if (t) throw new TypeError("Generator is already executing.");
								for (; i;) try {
									if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++, r = a[1], a = [0];
											continue;
										case 7:
											a = i.ops.pop(), i.trys.pop();
											continue;
										default:
											if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1], o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2], i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(), i.trys.pop();
											continue
									}
									a = n.call(e, i)
								} catch (e) {
									a = [6, e], r = 0
								} finally {
									t = o = 0
								}
								if (5 & a[0]) throw a[1];
								return {
									value: a[0] ? a[1] : void 0,
									done: !0
								}
							}([a, s])
						}
					}
				};

			function En(e, n, t) {
				return void 0 === n && (n = 3), _n(this, void 0, void 0, (function() {
					var r, o;
					return xn(this, (function(a) {
						switch (a.label) {
							case 0:
								return [4, fetch(e, t)];
							case 1:
								if (r = a.sent(), o = !r.status || r.status >= 500, 200 === r.status) return [2, r.json()];
								if (n > 0 && o) return [2, En(e, n - 1)];
								throw new Error("Failed to fetch " + e)
						}
					}))
				}))
			}
			var kn, An = (kn = function(e, n) {
					return (kn = Object.setPrototypeOf || {
							__proto__: []
						}
						instanceof Array && function(e, n) {
							e.__proto__ = n
						} || function(e, n) {
							for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
						})(e, n)
				}, function(e, n) {
					function t() {
						this.constructor = e
					}
					kn(e, n), e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t)
				}),
				Tn = Object.prototype.hasOwnProperty;

			function Sn(e, n) {
				return Tn.call(e, n)
			}

			function Pn(e) {
				if (Array.isArray(e)) {
					for (var n = new Array(e.length), t = 0; t < n.length; t++) n[t] = "" + t;
					return n
				}
				if (Object.keys) return Object.keys(e);
				for (var r in n = [], e) Sn(e, r) && n.push(r);
				return n
			}

			function Cn(e) {
				switch (typeof e) {
					case "object":
						return JSON.parse(JSON.stringify(e));
					case "undefined":
						return null;
					default:
						return e
				}
			}

			function Ln(e) {
				for (var n, t = 0, r = e.length; t < r;) {
					if (!((n = e.charCodeAt(t)) >= 48 && n <= 57)) return !1;
					t++
				}
				return !0
			}

			function On(e) {
				return -1 === e.indexOf("/") && -1 === e.indexOf("~") ? e : e.replace(/~/g, "~0").replace(/\//g, "~1")
			}

			function Nn(e) {
				return e.replace(/~1/g, "/").replace(/~0/g, "~")
			}

			function In(e) {
				if (void 0 === e) return !0;
				if (e)
					if (Array.isArray(e)) {
						for (var n = 0, t = e.length; n < t; n++)
							if (In(e[n])) return !0
					} else if ("object" == typeof e) {
					var r = Pn(e),
						o = r.length;
					for (n = 0; n < o; n++)
						if (In(e[r[n]])) return !0
				}
				return !1
			}

			function Dn(e, n) {
				var t = [e];
				for (var r in n) {
					var o = "object" == typeof n[r] ? JSON.stringify(n[r], null, 2) : n[r];
					void 0 !== o && t.push(r + ": " + o)
				}
				return t.join("\n")
			}
			var Mn = function(e) {
					function n(n, t, r, o, a) {
						var i = this.constructor,
							s = e.call(this, Dn(n, {
								name: t,
								index: r,
								operation: o,
								tree: a
							})) || this;
						return s.name = t, s.index = r, s.operation = o, s.tree = a, Object.setPrototypeOf(s, i.prototype), s.message = Dn(n, {
							name: t,
							index: r,
							operation: o,
							tree: a
						}), s
					}
					return An(n, e), n
				}(Error),
				Vn = Mn,
				Bn = Cn,
				Rn = {
					add: function(e, n, t) {
						return e[n] = this.value, {
							newDocument: t
						}
					},
					remove: function(e, n, t) {
						var r = e[n];
						return delete e[n], {
							newDocument: t,
							removed: r
						}
					},
					replace: function(e, n, t) {
						var r = e[n];
						return e[n] = this.value, {
							newDocument: t,
							removed: r
						}
					},
					move: function(e, n, t) {
						var r = Fn(t, this.path);
						r && (r = Cn(r));
						var o = Un(t, {
							op: "remove",
							path: this.from
						}).removed;
						return Un(t, {
							op: "add",
							path: this.path,
							value: o
						}), {
							newDocument: t,
							removed: r
						}
					},
					copy: function(e, n, t) {
						var r = Fn(t, this.from);
						return Un(t, {
							op: "add",
							path: this.path,
							value: Cn(r)
						}), {
							newDocument: t
						}
					},
					test: function(e, n, t) {
						return {
							newDocument: t,
							test: Kn(e[n], this.value)
						}
					},
					_get: function(e, n, t) {
						return this.value = e[n], {
							newDocument: t
						}
					}
				},
				jn = {
					add: function(e, n, t) {
						return Ln(n) ? e.splice(n, 0, this.value) : e[n] = this.value, {
							newDocument: t,
							index: n
						}
					},
					remove: function(e, n, t) {
						return {
							newDocument: t,
							removed: e.splice(n, 1)[0]
						}
					},
					replace: function(e, n, t) {
						var r = e[n];
						return e[n] = this.value, {
							newDocument: t,
							removed: r
						}
					},
					move: Rn.move,
					copy: Rn.copy,
					test: Rn.test,
					_get: Rn._get
				};

			function Fn(e, n) {
				if ("" == n) return e;
				var t = {
					op: "_get",
					path: n
				};
				return Un(e, t), t.value
			}

			function Un(e, n, t, r, o, a) {
				if (void 0 === t && (t = !1), void 0 === r && (r = !0), void 0 === o && (o = !0), void 0 === a && (a = 0), t && ("function" == typeof t ? t(n, 0, e, n.path) : Wn(n, 0)), "" === n.path) {
					var i = {
						newDocument: e
					};
					if ("add" === n.op) return i.newDocument = n.value, i;
					if ("replace" === n.op) return i.newDocument = n.value, i.removed = e, i;
					if ("move" === n.op || "copy" === n.op) return i.newDocument = Fn(e, n.from), "move" === n.op && (i.removed = e), i;
					if ("test" === n.op) {
						if (i.test = Kn(e, n.value), !1 === i.test) throw new Vn("Test operation failed", "TEST_OPERATION_FAILED", a, n, e);
						return i.newDocument = e, i
					}
					if ("remove" === n.op) return i.removed = e, i.newDocument = null, i;
					if ("_get" === n.op) return n.value = e, i;
					if (t) throw new Vn("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", a, n, e);
					return i
				}
				r || (e = Cn(e));
				var s = (n.path || "").split("/"),
					c = e,
					u = 1,
					l = s.length,
					d = void 0,
					f = void 0,
					p = void 0;
				for (p = "function" == typeof t ? t : Wn;;) {
					if ((f = s[u]) && -1 != f.indexOf("~") && (f = Nn(f)), o && "__proto__" == f) throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
					if (t && void 0 === d && (void 0 === c[f] ? d = s.slice(0, u).join("/") : u == l - 1 && (d = n.path), void 0 !== d && p(n, 0, e, d)), u++, Array.isArray(c)) {
						if ("-" === f) f = c.length;
						else {
							if (t && !Ln(f)) throw new Vn("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", a, n, e);
							Ln(f) && (f = ~~f)
						}
						if (u >= l) {
							if (t && "add" === n.op && f > c.length) throw new Vn("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", a, n, e);
							if (!1 === (i = jn[n.op].call(n, c, f, e)).test) throw new Vn("Test operation failed", "TEST_OPERATION_FAILED", a, n, e);
							return i
						}
					} else if (u >= l) {
						if (!1 === (i = Rn[n.op].call(n, c, f, e)).test) throw new Vn("Test operation failed", "TEST_OPERATION_FAILED", a, n, e);
						return i
					}
					if (c = c[f], t && u < l && (!c || "object" != typeof c)) throw new Vn("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", a, n, e)
				}
			}

			function Hn(e, n, t, r, o) {
				if (void 0 === r && (r = !0), void 0 === o && (o = !0), t && !Array.isArray(n)) throw new Vn("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
				r || (e = Cn(e));
				for (var a = new Array(n.length), i = 0, s = n.length; i < s; i++) a[i] = Un(e, n[i], t, !0, o, i), e = a[i].newDocument;
				return a.newDocument = e, a
			}

			function zn(e, n, t) {
				var r = Un(e, n);
				if (!1 === r.test) throw new Vn("Test operation failed", "TEST_OPERATION_FAILED", t, n, e);
				return r.newDocument
			}

			function Wn(e, n, t, r) {
				if ("object" != typeof e || null === e || Array.isArray(e)) throw new Vn("Operation is not an object", "OPERATION_NOT_AN_OBJECT", n, e, t);
				if (!Rn[e.op]) throw new Vn("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", n, e, t);
				if ("string" != typeof e.path) throw new Vn("Operation `path` property is not a string", "OPERATION_PATH_INVALID", n, e, t);
				if (0 !== e.path.indexOf("/") && e.path.length > 0) throw new Vn('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", n, e, t);
				if (("move" === e.op || "copy" === e.op) && "string" != typeof e.from) throw new Vn("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", n, e, t);
				if (("add" === e.op || "replace" === e.op || "test" === e.op) && void 0 === e.value) throw new Vn("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", n, e, t);
				if (("add" === e.op || "replace" === e.op || "test" === e.op) && In(e.value)) throw new Vn("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", n, e, t);
				if (t)
					if ("add" == e.op) {
						var o = e.path.split("/").length,
							a = r.split("/").length;
						if (o !== a + 1 && o !== a) throw new Vn("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", n, e, t)
					} else if ("replace" === e.op || "remove" === e.op || "_get" === e.op) {
					if (e.path !== r) throw new Vn("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", n, e, t)
				} else if ("move" === e.op || "copy" === e.op) {
					var i = Gn([{
						op: "_get",
						path: e.from,
						value: void 0
					}], t);
					if (i && "OPERATION_PATH_UNRESOLVABLE" === i.name) throw new Vn("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", n, e, t)
				}
			}

			function Gn(e, n, t) {
				try {
					if (!Array.isArray(e)) throw new Vn("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
					if (n) Hn(Cn(n), Cn(e), t || !0);
					else {
						t = t || Wn;
						for (var r = 0; r < e.length; r++) t(e[r], r, n, void 0)
					}
				} catch (e) {
					if (e instanceof Vn) return e;
					throw e
				}
			}

			function Kn(e, n) {
				if (e === n) return !0;
				if (e && n && "object" == typeof e && "object" == typeof n) {
					var t, r, o, a = Array.isArray(e),
						i = Array.isArray(n);
					if (a && i) {
						if ((r = e.length) != n.length) return !1;
						for (t = r; 0 != t--;)
							if (!Kn(e[t], n[t])) return !1;
						return !0
					}
					if (a != i) return !1;
					var s = Object.keys(e);
					if ((r = s.length) !== Object.keys(n).length) return !1;
					for (t = r; 0 != t--;)
						if (!n.hasOwnProperty(s[t])) return !1;
					for (t = r; 0 != t--;)
						if (!Kn(e[o = s[t]], n[o])) return !1;
					return !0
				}
				return e != e && n != n
			}
			var Qn = new WeakMap,
				Jn = function(e) {
					this.observers = new Map, this.obj = e
				},
				qn = function(e, n) {
					this.callback = e, this.observer = n
				};

			function Yn(e, n) {
				n.unobserve()
			}

			function Xn(e, n) {
				var t, r = function(e) {
					return Qn.get(e)
				}(e);
				if (r) {
					var o = function(e, n) {
						return e.observers.get(n)
					}(r, n);
					t = o && o.observer
				} else r = new Jn(e), Qn.set(e, r);
				if (t) return t;
				if (t = {}, r.value = Cn(e), n) {
					t.callback = n, t.next = null;
					var a = function() {
							Zn(t)
						},
						i = function() {
							clearTimeout(t.next), t.next = setTimeout(a)
						};
					"undefined" != typeof window && (window.addEventListener("mouseup", i), window.addEventListener("keyup", i), window.addEventListener("mousedown", i), window.addEventListener("keydown", i), window.addEventListener("change", i))
				}
				return t.patches = [], t.object = e, t.unobserve = function() {
					Zn(t), clearTimeout(t.next),
						function(e, n) {
							e.observers.delete(n.callback)
						}(r, t), "undefined" != typeof window && (window.removeEventListener("mouseup", i), window.removeEventListener("keyup", i), window.removeEventListener("mousedown", i), window.removeEventListener("keydown", i), window.removeEventListener("change", i))
				}, r.observers.set(n, new qn(n, t)), t
			}

			function Zn(e, n) {
				void 0 === n && (n = !1);
				var t = Qn.get(e.object);
				$n(t.value, e.object, e.patches, "", n), e.patches.length && Hn(t.value, e.patches);
				var r = e.patches;
				return r.length > 0 && (e.patches = [], e.callback && e.callback(r)), r
			}

			function $n(e, n, t, r, o) {
				if (n !== e) {
					"function" == typeof n.toJSON && (n = n.toJSON());
					for (var a = Pn(n), i = Pn(e), s = !1, c = i.length - 1; c >= 0; c--) {
						var u = e[d = i[c]];
						if (!Sn(n, d) || void 0 === n[d] && void 0 !== u && !1 === Array.isArray(n)) Array.isArray(e) === Array.isArray(n) ? (o && t.push({
							op: "test",
							path: r + "/" + On(d),
							value: Cn(u)
						}), t.push({
							op: "remove",
							path: r + "/" + On(d)
						}), s = !0) : (o && t.push({
							op: "test",
							path: r,
							value: e
						}), t.push({
							op: "replace",
							path: r,
							value: n
						}));
						else {
							var l = n[d];
							"object" == typeof u && null != u && "object" == typeof l && null != l && Array.isArray(u) === Array.isArray(l) ? $n(u, l, t, r + "/" + On(d), o) : u !== l && (o && t.push({
								op: "test",
								path: r + "/" + On(d),
								value: Cn(u)
							}), t.push({
								op: "replace",
								path: r + "/" + On(d),
								value: Cn(l)
							}))
						}
					}
					if (s || a.length != i.length)
						for (c = 0; c < a.length; c++) {
							var d;
							Sn(e, d = a[c]) || void 0 === n[d] || t.push({
								op: "add",
								path: r + "/" + On(d),
								value: Cn(n[d])
							})
						}
				}
			}

			function et(e, n, t) {
				void 0 === t && (t = !1);
				var r = [];
				return $n(e, n, r, "", t), r
			}
			var nt = Object.assign({}, e, o, {
					JsonPatchError: Mn,
					deepClone: Cn,
					escapePathComponent: On,
					unescapePathComponent: Nn
				}),
				tt = function(e, n) {
					for (var t = 0, r = n.length, o = e.length; t < r; t++, o++) e[o] = n[t];
					return e
				};

			function rt(e) {
				var n, t, r, o, a, i, s, c = (t = (n = e).videoId, r = n.sessionInitTime, o = n.embedInfo, a = n.viewer, i = n.videoEl, {
						sessionInitTime: r,
						embedInfo: o,
						navigator: (s = window.navigator).userAgent,
						navigatorProps: {
							languagePreferred: s.language || null,
							langaugesKnown: s.languages ? s.languages.toString() : null,
							doNotTrack: s.doNotTrack,
							online: s.onLine,
							touchPoints: s.maxTouchPoints,
							concurrency: s.hardwareConcurrency || void 0,
							platform: s.userAgentData ? navigator.userAgentData.platform : navigator.platform
						},
						dimensions: {
							video: {
								height: i.offsetHeight,
								width: i.offsetWidth
							},
							window: {
								inner: {
									height: window.innerHeight,
									width: window.innerWidth
								},
								outer: {
									height: window.outerHeight,
									width: window.outerWidth
								}
							},
							screen: {
								height: window.screen.height,
								width: window.screen.width,
								availHeight: window.screen.availHeight,
								availWidth: window.screen.availWidth
							}
						},
						refUrl: document.referrer || window.location.href,
						platform: "vdocipher",
						viewer: a,
						media: {
							id: t
						},
						vdoPlayerVersion: "2.0.0",
						playerFullVersion: "0.01.00",
						device: {},
						beats: [],
						events: [],
						traces: [],
						coverage: {
							coveredArray: [],
							length: 20
						}
					}),
					u = nt.deepClone(c);
				return {
					next: c,
					getChanges: function(e) {
						var n, t, r;
						c.coverage = {
							coveredArray: (n = e.totalCoveredArray, t = c.coverage.length, r = [], n.forEach((function(e, n) {
								var o = Math.floor(n / t);
								r[o] = (r[o] || 0) + e
							})), r),
							length: c.coverage.length
						}, window.vdoErrorHandler && window.vdoErrorHandler.hasError() && (c.events = tt(tt([], c.events), [{
							name: "scriptError",
							time: (new Date).getTime() - c.sessionInitTime,
							payload: JSON.stringify(window.vdoErrorHandler.stack)
						}]), window.vdoErrorHandler.clear());
						var o = nt.deepClone(c),
							a = nt.compare(u, o);
						return u = o, a
					}
				}
			}

			function ot(e, n) {
				var t = {
					status: -1,
					totalPlayed: 0,
					totalCovered: 0,
					totalCoveredArray: [],
					isBuffering: !0,
					isSeeking: !1,
					availableQualities: [],
					_totalPlayedCountLastPos: 0,
					bufferLength: e.buffered.length,
					getActiveBW: function() {
						if (this.availableQualities.length) {
							var e = this.availableQualities.filter((function(e) {
								return e.active
							}));
							return Math.floor(e.bandwidth / 1e3)
						}
					},
					getActiveCaptions: function() {
						if (!e.textTracks.length) return "";
						for (var n = 0, t = Array.from(e.textTracks); n < t.length; n++) {
							var r = t[n];
							if ("showing" === r.mode) return r.language
						}
						return ""
					}
				};
				return n.on("availableQualities", (function(e) {
					t.availableQualities = e
				})), e.addEventListener("waiting", (function() {
					t.isBuffering = !0
				})), e.addEventListener("canplay", (function() {
					t.isBuffering = !1
				})), e.addEventListener("canplaythrough", (function() {
					t.isBuffering = !1
				})), e.addEventListener("playing", (function() {
					t.isBuffering = !1
				})), e.addEventListener("play", (function() {
					t.status = 1
				})), e.addEventListener("pause", (function() {
					t.status = 2
				})), e.addEventListener("ended", (function() {
					t.status = 3
				})), e.addEventListener("seeking", (function() {
					t.isSeeking = !0
				})), e.addEventListener("seeked", (function() {
					t.isSeeking = !1
				})), e.addEventListener("timeupdate", (function() {
					var n = Math.floor(e.currentTime);
					n === t._totalPlayedCountLastPos + 1 ? (t.totalPlayed++, t._totalPlayedCountLastPos = n, t.totalCoveredArray[n] ? t.totalCoveredArray[n]++ : (t.totalCovered++, t.totalCoveredArray[n] = 1)) : n !== t._totalPlayedCountLastPos && (t._totalPlayedCountLastPos = n)
				})), t
			}

			function at(e) {
				var n = null,
					t = !1;
				return e.on("error", (function(e) {
					var r = e.payload;
					r && (t = !0, n = r)
				})), {
					hasError: function() {
						return t
					},
					get: function() {
						var e = nt.deepClone(n);
						return n = null, t = !1, e
					}
				}
			}
			var it, st, ct, ut = (it = "ERROR", st = {
				NONE: 0,
				ERROR: 1,
				WARN: 2,
				INFO: 3,
				DEBUG: 4
			}, ct = function(e) {
				return st[it] >= st[e]
			}, {
				setLevel: function(e) {
					it = e
				},
				getLevel: function() {
					return it
				},
				error: function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					return ct("ERROR") ? console.error.apply(console, e) : void 0
				},
				warn: function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					return ct("WARN") ? console.warn.apply(console, e) : void 0
				},
				info: function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					return ct("INFO") ? console.info.apply(console, e) : void 0
				},
				debug: function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					return ct("DEBUG") ? console.log.apply(console, e) : void 0
				}
			});

			function lt(e) {
				if (e.videoEl) {
					var n = e.getCurrentTimeSinceInit(),
						t = e.videoEl.currentTime;
					return setInterval((function() {
						e.getCurrentTimeSinceInit() - n > e.timeInterval && (n = e.getCurrentTimeSinceInit(), function(e) {
							var n = e.state,
								t = e.unload;
							if (!document.body.contains(n.videoEl)) return t;
							var r = n.dataStore;
							r.next.beats.push(function(e) {
								var n, t, r, o = e.videoEl,
									a = e.playerObj,
									i = (t = (n = o).getBoundingClientRect().top, r = n.getBoundingClientRect().bottom, t >= 0 && r <= window.innerHeight);
								return {
									t: e.getCurrentTimeSinceInit(),
									pt: o.currentTime,
									bl: a.bufferLength,
									st: a.status,
									tp: a.totalPlayed,
									tc: a.totalCovered,
									vo: o.volume,
									ib: a.isBuffering,
									is: a.isSeeking,
									bw: a.getActiveBW(),
									cc: a.getActiveCaptions(),
									isInView: i,
									isWindowInFocus: document.hasFocus(),
									isVideoInFocus: o === document.activeElement
								}
							}(n)), n.error.hasError() && (r.next.error = n.error.get());
							var o = r.getChanges(n.playerObj);
							navigator.sendBeacon(n.api + "update/via-beacon/" + n.sessionId, JSON.stringify(o)), ut.debug("[clipstat] beacon request added")
						}({
							state: e,
							unload: console.log
						}), e.timeInterval = Math.min(e.timeInterval * e.backOffFactor, 18e5)), e.videoEl.currentTime !== t && (e.timeInterval = e.minTimeInterval), t = e.videoEl.currentTime
					}), 5e3)
				}
			}

			function dt(e) {
				var n = e.videoEl,
					t = e.eventBus,
					r = e.videoId,
					o = e.embedInfo;
				return function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				}(this, void 0, void 0, (function() {
					var e;
					return function(e, n) {
						var t, r, o, a, i = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return a = {
							next: s(0),
							throw: s(1),
							return: s(2)
						}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
							return this
						}), a;

						function s(a) {
							return function(s) {
								return function(a) {
									if (t) throw new TypeError("Generator is already executing.");
									for (; i;) try {
										if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
										switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
											case 0:
											case 1:
												o = a;
												break;
											case 4:
												return i.label++, {
													value: a[1],
													done: !1
												};
											case 5:
												i.label++, r = a[1], a = [0];
												continue;
											case 7:
												a = i.ops.pop(), i.trys.pop();
												continue;
											default:
												if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
													i = 0;
													continue
												}
												if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
													i.label = a[1];
													break
												}
												if (6 === a[0] && i.label < o[1]) {
													i.label = o[1], o = a;
													break
												}
												if (o && i.label < o[2]) {
													i.label = o[2], i.ops.push(a);
													break
												}
												o[2] && i.ops.pop(), i.trys.pop();
												continue
										}
										a = n.call(e, i)
									} catch (e) {
										a = [6, e], r = 0
									} finally {
										t = o = 0
									}
									if (5 & a[0]) throw a[1];
									return {
										value: a[0] ? a[1] : void 0,
										done: !0
									}
								}([a, s])
							}
						}
					}(this, (function(a) {
						return function(e) {
								if (e.videoEl) {
									var n = e.videoEl,
										t = e.eventBus,
										r = e.dataStore,
										o = t.on("_metaDataLoadSuccess", (function(e) {
											var n = e.id,
												t = e.title,
												o = e.duration,
												a = e.hostnames,
												i = e.tech;
											r.next.media = {
												id: n,
												title: t,
												duration: o,
												hostnames: a,
												tech: i
											}
										})),
										a = t.on("tech", (function(e) {
											r.next.tech = e
										})),
										i = t.on("tags", (function(e) {
											e && "object" == typeof e && (e.tags && Array.isArray(e.tags) && e.tags.every((function(e) {
												return "string" == typeof e
											})) && (r.next.tags = e.tags), "string" == typeof e.userId && e.userId.length >= 8 && (r.next.userId = e.userId))
										}));
									e.subscriptions.push(o, a, i), bn.forEach((function(n) {
										var o = t.on(n, (function(t) {
											r.next.events.push({
												name: n,
												time: e.getCurrentTimeSinceInit(),
												payload: JSON.stringify(t)
											}), e.timeInterval = e.minTimeInterval
										}));
										e.subscriptions.push(o)
									})), wn.forEach((function(t) {
										var o = function(n) {
											r.next.events.push({
												name: t,
												time: e.getCurrentTimeSinceInit(),
												payload: JSON.stringify(n)
											}), e.timeInterval = e.minTimeInterval
										};
										n.addEventListener(t, o), e.domSubscriptions.push({
											name: t,
											callback: o
										})
									})), window.vdoErrorHandler.onError((function() {
										e.timeInterval = e.minTimeInterval
									}))
								}
							}(e = function(e) {
								var n, t = e.videoEl,
									r = e.eventBus,
									o = e.embedInfo,
									a = e.videoId,
									i = (new Date).getTime(),
									s = ("" === (n = function(e) {
										for (var n = "vdo_id=", t = document.cookie.split(";"), r = 0; r < t.length; r++) {
											for (var o = t[r];
												" " === o.charAt(0);) o = o.substring(1);
											if (0 === o.indexOf(n)) return o.substring(n.length, o.length)
										}
										return ""
									}()) && function(e, n, t) {
										var r = new Date;
										r.setTime(r.getTime() + 63072e7);
										var o = "expires=" + r.toUTCString();
										document.cookie = "vdo_id=" + n + "; " + o
									}(0, n = "xy".repeat(16).replace(/[xy]/g, (function(e) {
										var n = 36 * Math.random() | 0;
										return ("x" === e ? n : 3 & n | 8).toString(36)
									}))), n);
								return {
									videoEl: t,
									eventBus: r,
									embedInfo: o,
									videoId: a,
									api: "https://clipstat.com/api/v2/",
									minTimeInterval: 1e3,
									backOffFactor: 4,
									subscriptions: [],
									domSubscriptions: [],
									viewer: s,
									timeInterval: 1e4,
									sessionInitTime: i,
									sessionId: void 0,
									getCurrentTimeSinceInit: function() {
										return (new Date).getTime() - this.sessionInitTime
									},
									playerObj: ot(t, r),
									error: at(r),
									dataStore: rt({
										videoId: a,
										sessionInitTime: i,
										embedInfo: o,
										viewer: s,
										videoEl: t
									})
								}
							}({
								videoEl: n,
								eventBus: t,
								videoId: r,
								embedInfo: o
							})),
							function(e) {
								return _n(this, void 0, void 0, (function() {
									var n;
									return xn(this, (function(t) {
										switch (t.label) {
											case 0:
												return n = e.dataStore, [4, En(e.api, 5, {
													method: "PUT",
													headers: {
														"content-type": "application/json"
													},
													body: JSON.stringify(n.next)
												})];
											case 1:
												return [2, t.sent().session]
										}
									}))
								}))
							}(e).then((function(n) {
								e.sessionId = n, e.timer = lt(e)
							})), [2]
					}))
				}))
			}
			var ft = function() {
					return (ft = Object.assign || function(e) {
						for (var n, t = 1, r = arguments.length; t < r; t++)
							for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
						return e
					}).apply(this, arguments)
				},
				pt = function(e, n) {
					if (void 0 === n && (n = []), n.length > 0) {
						var t = Array.from(n).sort((function(e, n) {
							return n.height - e.height
						}));
						e.poster = t[0].url
					}
				},
				vt = {
					get isMacos() {
						return /Macintosh/i.test(navigator.userAgent)
					},
					get isIpad() {
						return this.isMacos && navigator.maxTouchPoints > 2
					},
					get isIos() {
						return Boolean(this.isIpad || navigator.userAgent.match(/(iPad|iPhone|iPod) OS ([0-9]+)/) || navigator.userAgent.match(/(iPad|iPhone|iPod), CPU OS ([0-9]+)/))
					},
					get isApple() {
						return this.isIos || this.isMacos
					},
					get isAndroid() {
						return !!navigator.userAgent.match(/Android ([0-9]+)/)
					},
					get isEdge() {
						return !!navigator.userAgent.match(/Edge/)
					},
					get isChrome() {
						return !!navigator.userAgent.match(/Chrome\/([0-9]+)/) && !this.isEdge
					},
					get isLinux() {
						return /Linux/i.test(navigator.userAgent)
					},
					get isWindowsPhone() {
						return /Windows Phone/i.test(navigator.userAgent)
					},
					get isAndroidWebview() {
						return this.isAndroid && navigator.userAgent.match(/\s\bwv\b/)
					},
					get androidVersion() {
						var e = navigator.userAgent.match(/Android ([0-9]+)/);
						return e ? parseInt(e[1]) : null
					},
					get chromeVersion() {
						var e = navigator.userAgent.match(/Chrome\/([0-9]+)/);
						return e ? parseInt(e[1]) : null
					},
					get iosDevice() {
						var e = this.isIpad || navigator.userAgent.match(/(iPad|iPhone|iPod) OS ([0-9]+)/) || navigator.userAgent.match(/(iPad|iPhone|iPod), CPU OS ([0-9]+)/);
						return e ? e[1] : null
					},
					get iosVersion() {
						var e = this.isIpad || navigator.userAgent.match(/(iPad|iPhone|iPod) OS ([0-9]+)/) || navigator.userAgent.match(/(iPad|iPhone|iPod), CPU OS ([0-9]+)/);
						return e ? parseInt(e[2]) : null
					}
				},
				ht = /^http:\/\//,
				gt = /^http:\/\/localhost/,
				mt = function(e) {
					return function(e, n, t, r) {
						return new(t || (t = Promise))((function(o, a) {
							function i(e) {
								try {
									c(r.next(e))
								} catch (e) {
									a(e)
								}
							}

							function s(e) {
								try {
									c(r.throw(e))
								} catch (e) {
									a(e)
								}
							}

							function c(e) {
								var n;
								e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
									e(n)
								}))).then(i, s)
							}
							c((r = r.apply(e, n || [])).next())
						}))
					}(void 0, void 0, void 0, (function() {
						var n, t, r;
						return function(e, n) {
							var t, r, o, a, i = {
								label: 0,
								sent: function() {
									if (1 & o[0]) throw o[1];
									return o[1]
								},
								trys: [],
								ops: []
							};
							return a = {
								next: s(0),
								throw: s(1),
								return: s(2)
							}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
								return this
							}), a;

							function s(a) {
								return function(s) {
									return function(a) {
										if (t) throw new TypeError("Generator is already executing.");
										for (; i;) try {
											if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
											switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
												case 0:
												case 1:
													o = a;
													break;
												case 4:
													return i.label++, {
														value: a[1],
														done: !1
													};
												case 5:
													i.label++, r = a[1], a = [0];
													continue;
												case 7:
													a = i.ops.pop(), i.trys.pop();
													continue;
												default:
													if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
														i = 0;
														continue
													}
													if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
														i.label = a[1];
														break
													}
													if (6 === a[0] && i.label < o[1]) {
														i.label = o[1], o = a;
														break
													}
													if (o && i.label < o[2]) {
														i.label = o[2], i.ops.push(a);
														break
													}
													o[2] && i.ops.pop(), i.trys.pop();
													continue
											}
											a = n.call(e, i)
										} catch (e) {
											a = [6, e], r = 0
										} finally {
											t = o = 0
										}
										if (5 & a[0]) throw a[1];
										return {
											value: a[0] ? a[1] : void 0,
											done: !0
										}
									}([a, s])
								}
							}
						}(this, (function(o) {
							return n = null, t = function(e, t) {
								return void 0 === t && (t = !1), n = {
									message: e,
									override: t
								}
							}, r = "" !== document.createElement("video").canPlayType("application/vnd.apple.mpegURL") && vt.isIos && navigator.serviceWorker, vt.isIos && 14 !== vt.iosVersion && (navigator.userAgent.includes(") Version") ? function(e) {
								return e && ht.test(e) && !gt.test(e)
							}(e) ? t('HTML5 protected video can only play with "https://" or "http://localhost/". Website admin should setup https to enable playback.', !0) : t("To play this video, update from Settings > General > Software Update.") : t("Try playing this video in Safari Browser")), [2, {
								status: !!r,
								error: n
							}]
						}))
					}))
				},
				yt = function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				},
				bt = function(e, n) {
					var t, r, o, a, i = {
						label: 0,
						sent: function() {
							if (1 & o[0]) throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(a) {
						return function(s) {
							return function(a) {
								if (t) throw new TypeError("Generator is already executing.");
								for (; i;) try {
									if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++, r = a[1], a = [0];
											continue;
										case 7:
											a = i.ops.pop(), i.trys.pop();
											continue;
										default:
											if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1], o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2], i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(), i.trys.pop();
											continue
									}
									a = n.call(e, i)
								} catch (e) {
									a = [6, e], r = 0
								} finally {
									t = o = 0
								}
								if (5 & a[0]) throw a[1];
								return {
									value: a[0] ? a[1] : void 0,
									done: !0
								}
							}([a, s])
						}
					}
				},
				wt = function(e) {
					return yt(void 0, void 0, void 0, (function() {
						var n, t, r, o, a, i;
						return bt(this, (function(s) {
							switch (s.label) {
								case 0:
									return n = /^http:\/\//, t = /^http:\/\/localhost/, r = null, o = function(e, n) {
										return void 0 === n && (n = !1), r = {
											message: e,
											override: n
										}
									}, vt.isAndroid && vt.androidVersion && vt.androidVersion < 5 ? [2, {
										status: !1
									}] : (vt.isChrome && !vt.isIos ? vt.chromeVersion && vt.chromeVersion > 55 ? e && n.test(e) && !t.test(e) ? o('HTML5 protected video can only play with "https://" or "http://localhost/". Website admin should setup https to enable playback.', !0) : vt.isAndroid && 91 === vt.chromeVersion ? o("Please update Google Chrome from settings > About Google Chrome. Chrome 91 has a bug preventing playback.", !0) : o("Please try the following fixes in order. (1) Do not watch in incognito mode, Try in normal chrome window. (2) ALLOW from Chrome settings > Site settings > Protected Content. (3) Restart device. If still not working, contact us.", !0) : o("Please update Google Chrome browser", !0) : vt.isAndroid ? o("Browser failed. Please view in updated Google Chrome browser", !0) : vt.isIos || (vt.isEdge ? o("Browser failed. Please view in updated Edge or Google Chrome browser. If still not working, contact us.") : o("Browser failed. Please view in updated Google Chrome browser")), [4, ("com.widevine.alpha", yt(void 0, void 0, void 0, (function() {
										var e, n;
										return bt(this, (function(t) {
											switch (t.label) {
												case 0:
													if (e = "MediaKeys" in window || "WebKitMediaKeys" in window || "MSMediaKeys" in window, n = "function" == typeof navigator.requestMediaKeySystemAccess, !e || !n) throw new Error("HTML5 EME not ready");
													return [4, navigator.requestMediaKeySystemAccess("com.widevine.alpha", [{
														initDataTypes: ["cenc"],
														audioCapabilities: [{
															contentType: 'audio/mp4;codecs="mp4a.40.2"',
															robustness: "SW_SECURE_CRYPTO"
														}],
														videoCapabilities: [{
															contentType: 'video/mp4;codecs="avc1.42E01E"'
														}]
													}])];
												case 1:
													return t.sent(), [2, !0]
											}
										}))
									}))).catch((function(e) {
										return a = e
									}))]);
								case 1:
									return !0 === (i = s.sent()) ? [2, {
										status: !0
									}] : !1 === i && vt.isAndroid && 91 === vt.chromeVersion && "Unsupported keySystem or supportedConfigurations." === a ? [2, {
										status: !1,
										error: {
											message: "Please update Google Chrome Browser from Play Store",
											override: !0
										}
									}] : [2, {
										status: !1,
										error: r
									}]
							}
						}))
					}))
				},
				_t = function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				},
				xt = function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				};

			function Et(e, n) {
				return function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				}(this, void 0, void 0, (function() {
					var t, r, o, a, i, s, c, u, l, d, f, p, v;
					return function(e, n) {
						var t, r, o, a, i = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return a = {
							next: s(0),
							throw: s(1),
							return: s(2)
						}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
							return this
						}), a;

						function s(a) {
							return function(s) {
								return function(a) {
									if (t) throw new TypeError("Generator is already executing.");
									for (; i;) try {
										if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
										switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
											case 0:
											case 1:
												o = a;
												break;
											case 4:
												return i.label++, {
													value: a[1],
													done: !1
												};
											case 5:
												i.label++, r = a[1], a = [0];
												continue;
											case 7:
												a = i.ops.pop(), i.trys.pop();
												continue;
											default:
												if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
													i = 0;
													continue
												}
												if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
													i.label = a[1];
													break
												}
												if (6 === a[0] && i.label < o[1]) {
													i.label = o[1], o = a;
													break
												}
												if (o && i.label < o[2]) {
													i.label = o[2], i.ops.push(a);
													break
												}
												o[2] && i.ops.pop(), i.trys.pop();
												continue
										}
										a = n.call(e, i)
									} catch (e) {
										a = [6, e], r = 0
									} finally {
										t = o = 0
									}
									if (5 & a[0]) throw a[1];
									return {
										value: a[0] ? a[1] : void 0,
										done: !0
									}
								}([a, s])
							}
						}
					}(this, (function(h) {
						switch (h.label) {
							case 0:
								t = "", h.label = 1;
							case 1:
								if (!e.length) return [3, 18];
								if ("dash" !== (r = e.shift())) return [3, 5];
								h.label = 2;
							case 2:
								return h.trys.push([2, 4, , 5]), [4, wt(n)];
							case 3:
								return o = h.sent(), a = o.status, (f = o.error) && f.override && (t = f.message), !0 === a ? [2, {
									playbackTech: r
								}] : [3, 5];
							case 4:
								return i = h.sent(), ut.debug(r + " test failed. Error: ", i), [3, 5];
							case 5:
								if ("fps" !== r) return [3, 9];
								h.label = 6;
							case 6:
								return h.trys.push([6, 8, , 9]), [4, _t(void 0, void 0, void 0, (function() {
									var e, n, t;
									return function(e, n) {
										var t, r, o, a, i = {
											label: 0,
											sent: function() {
												if (1 & o[0]) throw o[1];
												return o[1]
											},
											trys: [],
											ops: []
										};
										return a = {
											next: s(0),
											throw: s(1),
											return: s(2)
										}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
											return this
										}), a;

										function s(a) {
											return function(s) {
												return function(a) {
													if (t) throw new TypeError("Generator is already executing.");
													for (; i;) try {
														if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
														switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
															case 0:
															case 1:
																o = a;
																break;
															case 4:
																return i.label++, {
																	value: a[1],
																	done: !1
																};
															case 5:
																i.label++, r = a[1], a = [0];
																continue;
															case 7:
																a = i.ops.pop(), i.trys.pop();
																continue;
															default:
																if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
																	i = 0;
																	continue
																}
																if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
																	i.label = a[1];
																	break
																}
																if (6 === a[0] && i.label < o[1]) {
																	i.label = o[1], o = a;
																	break
																}
																if (o && i.label < o[2]) {
																	i.label = o[2], i.ops.push(a);
																	break
																}
																o[2] && i.ops.pop(), i.trys.pop();
																continue
														}
														a = n.call(e, i)
													} catch (e) {
														a = [6, e], r = 0
													} finally {
														t = o = 0
													}
													if (5 & a[0]) throw a[1];
													return {
														value: a[0] ? a[1] : void 0,
														done: !0
													}
												}([a, s])
											}
										}
									}(this, (function(r) {
										return e = null, n = function(n, t) {
											return void 0 === t && (t = !1), e = {
												message: n,
												override: t
											}
										}, !(t = Boolean("function" == typeof window.WebKitMediaKeys && window.WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0", "video/mp4"))) && vt.isApple && (vt.isMacos ? n("Try Safari browser on macOS.") : n("Try Safari browser or update iOS.", !0)), [2, {
											status: t,
											error: e
										}]
									}))
								}))];
							case 7:
								return s = h.sent(), c = s.status, (f = s.error) && f.override && (t = f.message), !0 === c ? [2, {
									playbackTech: r
								}] : [3, 9];
							case 8:
								return u = h.sent(), ut.debug(r + " test failed. Error: ", u), [3, 9];
							case 9:
								if ("cbcsi" !== r) return [3, 13];
								h.label = 10;
							case 10:
								return h.trys.push([10, 12, , 13]), [4, mt(n)];
							case 11:
								return l = h.sent(), d = l.status, (f = l.error) && f.override && (t = f.message), !0 === d ? [2, {
									playbackTech: r
								}] : [3, 13];
							case 12:
								return p = h.sent(), ut.debug(r + " test failed. Error: ", p), [3, 13];
							case 13:
								if ("zen" !== r) return [3, 17];
								h.label = 14;
							case 14:
								return h.trys.push([14, 16, , 17]), [4, xt(void 0, void 0, void 0, (function() {
									return function(e, n) {
										var t, r, o, a, i = {
											label: 0,
											sent: function() {
												if (1 & o[0]) throw o[1];
												return o[1]
											},
											trys: [],
											ops: []
										};
										return a = {
											next: s(0),
											throw: s(1),
											return: s(2)
										}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
											return this
										}), a;

										function s(a) {
											return function(s) {
												return function(a) {
													if (t) throw new TypeError("Generator is already executing.");
													for (; i;) try {
														if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
														switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
															case 0:
															case 1:
																o = a;
																break;
															case 4:
																return i.label++, {
																	value: a[1],
																	done: !1
																};
															case 5:
																i.label++, r = a[1], a = [0];
																continue;
															case 7:
																a = i.ops.pop(), i.trys.pop();
																continue;
															default:
																if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
																	i = 0;
																	continue
																}
																if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
																	i.label = a[1];
																	break
																}
																if (6 === a[0] && i.label < o[1]) {
																	i.label = o[1], o = a;
																	break
																}
																if (o && i.label < o[2]) {
																	i.label = o[2], i.ops.push(a);
																	break
																}
																o[2] && i.ops.pop(), i.trys.pop();
																continue
														}
														a = n.call(e, i)
													} catch (e) {
														a = [6, e], r = 0
													} finally {
														t = o = 0
													}
													if (5 & a[0]) throw a[1];
													return {
														value: a[0] ? a[1] : void 0,
														done: !0
													}
												}([a, s])
											}
										}
									}(this, (function(e) {
										return [2, {
											status: vt.isAndroid
										}]
									}))
								}))];
							case 15:
								return !0 === h.sent().status ? [2, {
									playbackTech: r
								}] : [3, 17];
							case 16:
								return v = h.sent(), ut.debug(r + " test failed. Error: ", v), [3, 17];
							case 17:
								return [3, 1];
							case 18:
								return [2, {
									playbackTech: !1,
									error: t
								}]
						}
					}))
				}))
			}
			var kt = function(e, n) {
					return function(e, n, t, r) {
						return new(t || (t = Promise))((function(o, a) {
							function i(e) {
								try {
									c(r.next(e))
								} catch (e) {
									a(e)
								}
							}

							function s(e) {
								try {
									c(r.throw(e))
								} catch (e) {
									a(e)
								}
							}

							function c(e) {
								var n;
								e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
									e(n)
								}))).then(i, s)
							}
							c((r = r.apply(e, n || [])).next())
						}))
					}(void 0, void 0, void 0, (function() {
						var t, r, o, a, i;
						return function(e, n) {
							var t, r, o, a, i = {
								label: 0,
								sent: function() {
									if (1 & o[0]) throw o[1];
									return o[1]
								},
								trys: [],
								ops: []
							};
							return a = {
								next: s(0),
								throw: s(1),
								return: s(2)
							}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
								return this
							}), a;

							function s(a) {
								return function(s) {
									return function(a) {
										if (t) throw new TypeError("Generator is already executing.");
										for (; i;) try {
											if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
											switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
												case 0:
												case 1:
													o = a;
													break;
												case 4:
													return i.label++, {
														value: a[1],
														done: !1
													};
												case 5:
													i.label++, r = a[1], a = [0];
													continue;
												case 7:
													a = i.ops.pop(), i.trys.pop();
													continue;
												default:
													if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
														i = 0;
														continue
													}
													if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
														i.label = a[1];
														break
													}
													if (6 === a[0] && i.label < o[1]) {
														i.label = o[1], o = a;
														break
													}
													if (o && i.label < o[2]) {
														i.label = o[2], i.ops.push(a);
														break
													}
													o[2] && i.ops.pop(), i.trys.pop();
													continue
											}
											a = n.call(e, i)
										} catch (e) {
											a = [6, e], r = 0
										} finally {
											t = o = 0
										}
										if (5 & a[0]) throw a[1];
										return {
											value: a[0] ? a[1] : void 0,
											done: !0
										}
									}([a, s])
								}
							}
						}(this, (function(s) {
							switch (s.label) {
								case 0:
									return t = ["cbcsi", "fps", "dash", "zen"], [4, Et(e, window.location.href)];
								case 1:
									return r = s.sent(), o = r.playbackTech, a = r.error, o && t.includes(o) && !a ? [2, o] : (i = a || "Video not ready for this device. \n Please try a different browser.", n.emit("error", {
										message: i,
										payload: {
											event: i,
											message: "SDK for " + o + " playback is not present"
										}
									}), ut.error("cannot figure out what to play on this device"), [2, "loaderError"])
							}
						}))
					}))
				},
				At = function() {
					return (At = Object.assign || function(e) {
						for (var n, t = 1, r = arguments.length; t < r; t++)
							for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
						return e
					}).apply(this, arguments)
				};

			function Tt(e) {
				var n = e.videoId,
					t = e.configureOptions,
					r = e.eventBus,
					o = t.overrides,
					a = t.techoverride;
				return new Promise((function(e, t) {
					fetch("https://dev.vdocipher.com/api/meta/" + n).then((function(e) {
						return e.json()
					})).then((function(i) {
						var s = i.hostnames,
							c = i.message,
							u = i.tech;
						s || t(new Error(c || "Error loading metadata")), "object" == typeof o && (i = At(At({}, i), o)), a && (i.tech = function(e, n) {
							if (0 === n.length) return e;
							if (n.forEach((function(n) {
									return n.startsWith("-") && function(e, n) {
										var t = n.indexOf(e);
										t > -1 && n.splice(t, 1)
									}(n.substr(1), e)
								})), n.includes("*")) return e;
							var t = [];
							return n.forEach((function(n) {
								return "*" !== n && e.includes(n) && t.push(n)
							})), t
						}(u, a)), i.id = i.id || n, r.emit("_metaDataLoadSuccess", i), e(i)
					})).catch((function(e) {
						ut.error("fatal error, please clear cache and refresh.", e), r.emit("error", {
							message: "Hostname is undefined",
							payload: {
								event: {
									cause: "hostname is undefined"
								},
								message: e.message
							}
						}), t(e)
					}))
				}))
			}
			var St = function(e, n) {
					var t = n.match(/^([0-9]+)px$/),
						r = n.match(/^([0-9]+)%$/);
					return t ? Number(t[1]) : r ? Number(r[1]) * e / 100 : Number(n)
				},
				Pt = function(e, n, t) {
					var r = "annotationContainerId";
					if (document.getElementById(r)) return {
						unload: function() {}
					};
					var o = JSON.parse(e.replace(/['‘’′`]/g, '"')),
						a = document.createElement("canvas"),
						i = "width:100% !important;pointer-events:none !important;border:none !important;visibility: visible !important;display: block !important;opacity: 1 !important;z-index: 2 !important;max-width: 100% !important;position:absolute !important; height: 100% !important;top:0px !important;left:0px !important;";
					if (a.setAttribute("id", r), a.setAttribute("width", n.offsetWidth.toString()), a.setAttribute("height", n.offsetHeight.toString()), a.className = "annotation-container", n.parentElement && n.parentElement.appendChild(a), n.addEventListener("playing", (function() {
							a.style.display = "inherit"
						})), n.addEventListener("ended", (function() {
							a.style.display = "none"
						})), a.setAttribute("mpml-show", 'status | inrange "1-2"'), !a.getContext) return {
						unload: function() {}
					};
					var s = a.getContext("2d");
					if (s) {
						var c = [],
							u = !0,
							l = 0;
						! function(e, n, t) {
							e.forEach((function(e) {
								if (e.originalAlpha = e.alpha, "rtext" === e.type) {
									e.type = "text";
									var r = function() {
											e.x = St(n.offsetWidth, Math.floor(80 * Math.random()) + "%").toString(), e.y = St(n.offsetHeight, Math.floor(80 * Math.random()) + "%").toString(), e.alpha = e.originalAlpha
										},
										o = function() {
											e.alpha = 0
										},
										a = Number(e.skip) || 0,
										i = Number(e.interval) || 5,
										s = setInterval(r, i + a);
									if (t.push(s), r(), a > 0) {
										var c = setTimeout((function() {
											c = setInterval(o, i + a), t.pop(), t.push(c), o()
										}), i);
										t.push(c)
									}
								}
							}))
						}(o, n, c);
						var d = window.requestAnimationFrame,
							f = function() {
								if (u)
									if (d(f), l < 10) l += 1;
									else if (l = 0, n.paused || n.ended) a.style.display = "none";
								else {
									var e = n.offsetWidth / n.offsetHeight;
									a.setAttribute("width", Math.max(Math.floor(300 * e), n.offsetWidth).toString()), a.getAttribute("style") !== i && a.setAttribute("style", i), a.setAttribute("height", Math.max(300, n.offsetHeight).toString());
									for (var r = a.getBoundingClientRect(), c = n.getBoundingClientRect(), p = !0, v = 0, h = ["x", "y", "width", "height", "top", "bottom", "left", "right"]; v < h.length; v++) {
										var g = h[v],
											m = r[g],
											y = c[g];
										"number" == typeof m && "number" == typeof y && m !== y && Math.abs(m - y) > 5 && (p = !1)
									}!p && n.currentTime > 5 && (n.src = "", n.remove(), t()), o.filter((function(e) {
										return "text" === e.type
									})).forEach((function(e) {
										return function(e, n, t) {
											var r = "",
												o = Number(e.alpha),
												a = e.color.replace("0x", "#"),
												i = Number(e.size),
												s = St(n.offsetWidth, e.x),
												c = St(n.offsetHeight, e.y);
											t.font = Math.floor(.85 * i) + "pt sans-serif", t.fillStyle = function(e, n) {
												var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
												if (!t) throw new Error("Bad Hex color");
												return "rgba(" + parseInt(t[1], 16) + "," + parseInt(t[2], 16) + "," + parseInt(t[3], 16) + "," + n + ")"
											}(a, o), t.fillText(r, s, c)
										}(e, n, s)
									}))
								}
							};
						return f(), {
							unload: function() {
								u = !1, a.remove(), c.forEach((function(e) {
									return clearInterval(e)
								}))
							}
						}
					}
				},
				Ct = function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				},
				Lt = function(e, n) {
					var t, r, o, a, i = {
						label: 0,
						sent: function() {
							if (1 & o[0]) throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(a) {
						return function(s) {
							return function(a) {
								if (t) throw new TypeError("Generator is already executing.");
								for (; i;) try {
									if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++, r = a[1], a = [0];
											continue;
										case 7:
											a = i.ops.pop(), i.trys.pop();
											continue;
										default:
											if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1], o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2], i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(), i.trys.pop();
											continue
									}
									a = n.call(e, i)
								} catch (e) {
									a = [6, e], r = 0
								} finally {
									t = o = 0
								}
								if (5 & a[0]) throw a[1];
								return {
									value: a[0] ? a[1] : void 0,
									done: !0
								}
							}([a, s])
						}
					}
				};

			function Ot(e, n, t) {
				var r, o;
				return Ct(this, void 0, void 0, (function() {
					var a, i, s, c, u, l, d, f, p, v = this;
					return Lt(this, (function(h) {
						switch (h.label) {
							case 0:
								return a = n.embedInfo, (i = n.metaData).dash && i.dash.licenseServers ? (s = {
									otp: n.embedInfo.otp,
									playbackInfo: n.embedInfo.playbackInfo,
									signature: n.embedInfo.signature,
									href: n.href,
									tech: "dash"
								}, c = function(e, n, t, r) {
									if (void 0 === t && (t = !1), !e.metaData.dash) return {};
									r.debug("setting license servers");
									var o = btoa(JSON.stringify(n)).replace(/\//g, "_").replace(/\+/g, "-"),
										a = e.metaData.dash.licenseServers;
									return t ? Object.keys(a).forEach((function(e) {
										a[e] = a[e].replace("/wv/:authToken", "")
									})) : Object.keys(a).forEach((function(e) {
										a[e] = a[e].replace(":authToken", o)
									})), r.debug("license servers set"), a
								}(n, s, !0, ut), u = {
									status: 1
								}, (l = function(e) {
									return void 0 === e && (e = null), ft({
										streaming: {
											bufferingGoal: 10,
											rebufferingGoal: 5,
											bufferBehind: 10,
											retryParameters: {
												maxAttempts: 5,
												stallTimeout: 15e3,
												connectionTimeout: 25e3
											},
											stallThreshold: 3
										},
										manifest: {
											retryParameters: {
												maxAttempts: 5,
												stallTimeout: 15e3,
												connectionTimeout: 25e3
											},
											dash: {
												ignoreMinBufferTime: !0
											}
										}
									}, e ? {
										drm: {
											retryParameters: {
												maxAttempts: 2,
												stallTimeout: 15e3,
												connectionTimeout: 25e3
											},
											servers: e,
											advanced: {
												"com.widevine.alpha": {}
											}
										}
									} : {})
								}(c)).abr = function(e, n, t) {
									var r = "number" == typeof e.desiredBitrate ? e.desiredBitrate : n.desiredBitrate;
									return "number" == typeof e.defaultEstimateKbps ? {
										defaultBandwidthEstimate: 1e3 * e.defaultEstimateKbps,
										enabled: !0
									} : "number" == typeof r ? (t.status = 0, {
										defaultBandwidthEstimate: 1e3 * r,
										enabled: !1
									}) : {
										enabled: !0
									}
								}(a, i, u), d = {}, e.autoplay = a.autoplay || !1, !0 === e.autoplay && (e.muted = !0), pt(e, i.posters), [4, ("https://ajax.googleapis.com/ajax/libs/shaka-player/3.2.1/shaka-player.compiled.js", new Promise((function(e) {
									var n = document.getElementsByTagName("head")[0],
										t = document.createElement("script");
									t.type = "text/javascript", t.addEventListener("load", (function n() {
										t.removeEventListener("load", n), e(t)
									})), t.src = "https://ajax.googleapis.com/ajax/libs/shaka-player/3.2.1/shaka-player.compiled.js", n.appendChild(t)
								})))]) : [2, ut.error("Dash key not present in metaData")];
							case 1:
								return h.sent(), ut.debug("shaka should be loaded by now"), shaka.polyfill.installAll(), shaka.Player.isBrowserSupported() ? (f = new shaka.Player(e), p = function(e, n, t) {
									return function(r) {
										var o = {
												1002: "Unable to load video. Please disable adblock and try again.",
												4012: "Browser (or screen) does not meet security requirements",
												6006: "Multiple active videos. Keep only one active video. Restart device if error persists.",
												6007: "Unable to connect to license server. Try removing adblock or try different internet connection.",
												6008: "Please watch in Google Chrome browser updated to the latest version."
											},
											a = r.code,
											i = ["Unable to play this video on your device", "Network Error", "Error parsing text streams", "Error parsing or processing audio or video streams", "Error parsing the Manifest", "Error related to streaming", "Device/Browser does not support premium content", "Miscellaneous player error", "Cast Error", "Offline playback error"][r.category || 0];
										r.code && "number" == typeof r.code && o[r.code] && (i = o[r.code]);
										var s, c, u = !1;
										e.error("Error code", a, "object", r), a && [6e3, 6001, 6002, 6003, 6004, 6005, 6006].includes(a) && (u = !0);
										try {
											s = r.data[0].data[2], (s = JSON.parse(s)).code && (a += s.code.toString()), i = s.message || i
										} catch (n) {
											e.warn("Server error message not available")
										}
										if (r.data) try {
											c = JSON.parse(JSON.stringify(r.data))
										} catch (n) {
											e.warn("Error details could not be serialized", r.data)
										}
										if (2 === r.severity) {
											var l = {
												code: a,
												message: i,
												payload: {
													hasError: !0,
													message: i,
													code: a,
													shaka: r.code,
													vdo: s ? s.code : 0
												},
												details: c,
												tryNext: u
											};
											if (3 === r.category && l.payload) {
												var d = n.getVariantTracks();
												l.payload.selectedTrack = d.filter((function(e) {
													return e.active
												}))
											}
											t.emit("error", l)
										} else e.info("trying to recover..")
									}
								}(ut, f, t), f.addEventListener("error", (function(e) {
									"detail" in e && p(e.detail)
								})), f.addEventListener("adaptation", (function() {
									t.emit("adaptation", f.getVariantTracks().filter((function(e) {
										return e.active
									})))
								})), e.addEventListener("play", (function n() {
									var t;
									f.configure({
										streaming: {
											bufferingGoal: "number" == typeof(t = a.bufferingGoal) ? t : 120,
											rebufferingGoal: 5,
											bufferBehind: 100
										}
									}), e.removeEventListener("play", n)
								})), null === (r = f.getNetworkingEngine()) || void 0 === r || r.registerRequestFilter((function(e, n) {
									return Ct(v, void 0, void 0, (function() {
										var t, r, o, a;
										return Lt(this, (function(i) {
											return t = shaka.util.StringUtils, r = shaka.util.Uint8ArrayUtils, e === shaka.net.NetworkingEngine.RequestType.LICENSE && (s.licenseRequest = r.toBase64(new Uint8Array(n.body || [])).replace(/_/g, "/").replace(/-/g, "+"), s.tech = "wv", o = {
												token: btoa(JSON.stringify(s)).replace(/\//g, "_").replace(/\+/g, "-")
											}, a = JSON.stringify(o), n.headers["content-type"] = "application/json", n.body = t.toUTF8(a), n.uris.forEach((function(e) {
												d[e] = {
													startTime: (new Date).getTime()
												}
											}))), [2]
										}))
									}))
								})), null === (o = f.getNetworkingEngine()) || void 0 === o || o.registerResponseFilter((function(n, r) {
									return new Promise((function(o) {
										var a, i = shaka.util.StringUtils,
											s = shaka.util.Uint8ArrayUtils;
										if (n === shaka.net.NetworkingEngine.RequestType.LICENSE) {
											d[r.uri] && d[r.uri].startTime && (t.emit("licenseLoad", {
												durationMs: (new Date).getTime() - d[r.uri].startTime
											}), delete d[r.uri]);
											var c = i.fromUTF8(r.data),
												u = JSON.parse(c),
												l = u.license;
											if (r.data = s.fromBase64(l), u.annotationCode) try {
												Pt((a = u.annotationCode, decodeURIComponent(atob(a).split("").map((function(e) {
													return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
												})).join(""))), e, (function() {
													t.emit("error", {
														status: {
															hasError: !0,
															message: "Video license expired"
														}
													})
												}))
											} catch (e) {
												ut.error("Invalid annotation code")
											}
											if (u.tags) {
												var f = void 0;
												try {
													f = JSON.parse(u.tags)
												} catch (e) {
													ut.error("Invalid tags")
												}
												t.emit("tags", f)
											}
										}
										o()
									}))
								})), f.configure(l), f.addEventListener("abrstatuschanged", (function() {
									t.emit("setAbrStatus", f.getConfiguration().abr.enabled)
								})), f.addEventListener("adaptation", (function() {
									var e = f.getVariantTracks().filter((function(e) {
										return e.active
									}))[0].id;
									t.emit("setActiveQuality", e)
								})), f.addEventListener("variantchanged", (function() {
									var e = f.getVariantTracks().filter((function(e) {
										return e.active
									}))[0].id;
									t.emit("setActiveQuality", e)
								})), f.load(i.dash.manifest).then((function() {
									var e = function(e) {
										var n = e.getVariantTracks();
										return n.forEach((function(e) {
											return e.label = Math.round(e.bandwidth / 1e3) + " kbps"
										})), n
									}(f);
									t.emit("availableQualities", e), t.on("selectQualityTrack", (function(e) {
										! function(e, n, t, r) {
											var o = e.getVariantTracks().filter((function(e) {
												return e.id === n
											}));
											if (0 === o.length) return t.debug("this track id does not exist: ", n), t.debug("enabling Adaptive bitrate"), r.status = 1, void e.configure({
												abr: {
													enabled: 1 === r.status
												}
											});
											r.status = 0, e.configure({
												abr: {
													enabled: 1 === r.status
												}
											}), e.selectVariantTrack(o[0], !0), t.info("new variant id selected: ", o)
										}(f, e, ut, u)
									}))
								})).catch(p), [2]) : [2, ut.error("Browser not supported!")]
						}
					}))
				}))
			}
			var Nt = function(e) {
					for (var n = window.atob(e), t = n.length, r = new Uint8Array(new ArrayBuffer(t)), o = 0; o < t; o++) r[o] = n.charCodeAt(o);
					return r
				},
				It = function(e) {
					for (var n, t, r, o, a, i, s, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = "", l = 0; l < e.length;) o = (n = parseInt(e[l++])) >> 2, a = (3 & n) << 4 | (t = l < e.length ? parseInt(e[l++]) : Number.NaN) >> 4, i = (15 & t) << 2 | (r = l < e.length ? parseInt(e[l++]) : Number.NaN) >> 6, s = 63 & r, isNaN(t) ? i = s = 64 : isNaN(r) && (s = 64), u += c.charAt(o) + c.charAt(a) + c.charAt(i) + c.charAt(s);
					return u
				},
				Dt = {
					1212433232: "Display not secure. Stop screen recording or upgrade HDMI/DisplayPort cables"
				},
				Mt = function(e, n, t, r, o, a) {
					var i = e.target,
						s = e.initData,
						c = function(e) {
							"76,0,0,0" === e.slice(0, 4).toString() && (e = e.slice(4));
							var n, t = (n = "", new Uint16Array(e.buffer).forEach((function(e) {
									n += String.fromCharCode(e)
								})), n),
								r = document.createElement("a");
							return r.href = t, r.hostname + r.pathname
						}(s);
					if (ut.debug("initData: ", s), ut.debug("content id: ", c), ut.debug("certificate: ", n), s = function(e, n, t) {
							"string" == typeof n && (n = function(e) {
								for (var n = new ArrayBuffer(2 * e.length), t = new Uint16Array(n), r = 0, o = e.length; r < o; r++) t[r] = e.charCodeAt(r);
								return t
							}(n));
							var r = 0,
								o = new ArrayBuffer(e.byteLength + 4 + n.byteLength + 4 + t.byteLength),
								a = new DataView(o);
							new Uint8Array(o, r, e.byteLength).set(e), r += e.byteLength, a.setUint32(r, n.byteLength, !0), r += 4;
							var i = new Uint16Array(o, r, n.length);
							return i.set(n), r += i.byteLength, a.setUint32(r, t.byteLength, !0), r += 4, new Uint8Array(o, r, t.byteLength).set(t), new Uint8Array(o, 0, o.byteLength)
						}(s, c, n), ut.debug("initData: ", s), !i.webkitKeys) {
						var u = function() {
							if (window.WebKitMediaKeys.isTypeSupported("com.apple.fps.1_0", "video/mp4")) return "com.apple.fps.1_0";
							throw alert("key system is not supported"), new Error("Key System not supported")
						}();
						ut.debug("key system: ", u), i.webkitSetMediaKeys(new window.WebKitMediaKeys(u))
					}
					if (i.webkitKeys) {
						ut.debug("initData: ", s);
						var l = i.webkitKeys.createSession("video/mp4", s);
						if (!l) return ut.error("Could not create key session"), void t.emit("error", {
							message: "Could not create key session",
							payload: {
								message: "Could not create key session"
							}
						});
						l.contentId = c, l.addEventListener("webkitkeymessage", (function(e) {
							return function(e, n, t, r, o) {
								if (t.metaData.fps) {
									var a = t.metaData.fps.licenseServer;
									ut.debug("license request ready"), ut.debug("license server: ", a);
									var i = e.target,
										s = e.message,
										c = e.sessionId;
									ut.debug(i, s, c);
									var u = btoa(JSON.stringify({
										otp: t.embedInfo.otp,
										playbackInfo: t.embedInfo.playbackInfo,
										signature: t.embedInfo.signature,
										href: t.href,
										tech: "fps",
										licenseRequest: JSON.stringify({
											spc: It(e.message),
											assetId: i.contentId
										})
									})).replace(/\//g, "_").replace(/\+/g, "-");
									ut.debug(u.length), ut.debug(btoa(e.message).length);
									var l = function() {
										r.emit("error", {
											message: "Video license expired",
											payload: {
												message: "Video license expired"
											}
										})
									};
									fetch(a, {
										method: "post",
										headers: {
											"content-type": "application/json; charset=utf-8"
										},
										body: JSON.stringify({
											token: u
										})
									}).then((function(e) {
										return e.json()
									})).then((function(e) {
										var t = e;
										ut.debug("result: ", t), ut.debug(Nt(t.license)), i.update(Nt(t.license)), t.annotationCode && Pt(atob(t.annotationCode), n, l)
									})).catch((function(e) {
										if (e.response && 403 === e.response.status) {
											if (o.status) return;
											o.status = !0;
											var n = e.response.data,
												t = n.code,
												a = n.message;
											return r.emit("error", {
												message: "Error code " + t + ":  " + a,
												payload: {
													vdo: t,
													message: a
												}
											})
										}
									}))
								}
							}(e, i, r, t, o)
						})), l.addEventListener("webkitkeyadded", (function() {
							ut.debug("key added")
						})), l.addEventListener("webkitkeyerror", (function(e) {
							var n = e.target.error;
							ut.error("key error: ", n);
							var r, o = (r = e, (new Date).getTime(), "systemCode" in r ? (r.systemCode, Dt[r.systemCode.toString()]) : "WebKitMediaKeyError" === r.constructor.name ? JSON.stringify({
								code: r.code,
								systemCode: r.systemCode
							}) : r.message);
							t.emit("error", {
								message: "Video load error: " + o,
								payload: {
									message: "License load error: " + o,
									constructorName: n.constructor.name
								}
							})
						}))
					} else t.emit("error", {
						message: "Could not create MediaKeys",
						payload: {
							message: "Could not create MediaKeys"
						}
					})
				};

			function Vt(e, n, t) {
				return function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				}(this, void 0, void 0, (function() {
					var r, o, a, i;
					return function(e, n) {
						var t, r, o, a, i = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return a = {
							next: s(0),
							throw: s(1),
							return: s(2)
						}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
							return this
						}), a;

						function s(a) {
							return function(s) {
								return function(a) {
									if (t) throw new TypeError("Generator is already executing.");
									for (; i;) try {
										if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
										switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
											case 0:
											case 1:
												o = a;
												break;
											case 4:
												return i.label++, {
													value: a[1],
													done: !1
												};
											case 5:
												i.label++, r = a[1], a = [0];
												continue;
											case 7:
												a = i.ops.pop(), i.trys.pop();
												continue;
											default:
												if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
													i = 0;
													continue
												}
												if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
													i.label = a[1];
													break
												}
												if (6 === a[0] && i.label < o[1]) {
													i.label = o[1], o = a;
													break
												}
												if (o && i.label < o[2]) {
													i.label = o[2], i.ops.push(a);
													break
												}
												o[2] && i.ops.pop(), i.trys.pop();
												continue
										}
										a = n.call(e, i)
									} catch (e) {
										a = [6, e], r = 0
									} finally {
										t = o = 0
									}
									if (5 & a[0]) throw a[1];
									return {
										value: a[0] ? a[1] : void 0,
										done: !0
									}
								}([a, s])
							}
						}
					}(this, (function(s) {
						switch (s.label) {
							case 0:
								return (r = n.metaData).fps ? (o = {
									status: !1
								}, (new Date).getTime(), function(e, n) {
									if (void 0 === n && (n = []), n.length > 0) {
										var t = Array.from(n).sort((function(e, n) {
											return n.height - e.height
										}));
										e.poster = t[0].url
									}
								}(e, r.posters), e.autoplay = n.embedInfo.autoplay || !1, !0 === e.autoplay && (e.muted = !0), e.setAttribute("preload", "auto"), e.setAttribute("playsinline", "true"), e.addEventListener("error", (function(n) {
									var r = n.target;
									if (ut.error(r.error), !o.status) {
										var a = {
											message: "Video has encountered error.",
											payload: {
												message: "Video has encountered error."
											}
										};
										if (e.error && a.payload) {
											a.payload.code = e.error.code, a.payload.message = e.error.message;
											var i = function(e) {
												if (void 0 === e && (e = navigator.userAgent), !/Macintosh|iPhone|iPad/.test(e)) return "";
												if (/Macintosh; Intel Mac OS X 10_15_[67]/.test(e) && /Version\/\d+/.test(e)) {
													if ("15" !== (e.match(/Version\/(\d+)/) || [])[1]) return ""
												} else if (!/(CPU iPhone OS 15_0|CPU OS 15_0)/.test(e)) return "";
												return navigator.maxTouchPoints > 1 ? "Please update to the latest iOS from Settings > General > Software Update. This is a bug in iOS 15.0." : e.includes("Version/15.0") ? "Please update to latest Safari 15.1 from Apple Menu > About this Mac > Software update > More Info > Check only Safari 15.1 and update." : ""
											}();
											i && (a.payload.message = i, a.message = i)
										}
										t.emit("error", a)
									}
								})), ut.debug("loading test certificate from: ", r.fps.certificate), [4, fetch(r.fps.certificate).then((function(e) {
									return e.arrayBuffer()
								}))]) : [2];
							case 1:
								return a = s.sent(), i = new Uint8Array(a), ut.debug(i), e.addEventListener("webkitneedkey", (function(e) {
									return Mt(e, i, t, n, o)
								}), !1), e.src = r.fps.manifest, [2]
						}
					}))
				}))
			}
			var Bt = function() {
					return (Bt = Object.assign || function(e) {
						for (var n, t = 1, r = arguments.length; t < r; t++)
							for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
						return e
					}).apply(this, arguments)
				},
				Rt = function() {
					var e = vt.isIos && navigator.userAgent.includes(") Version"),
						n = e && Boolean(navigator.userAgent.match(/Version\/15./));
					return e ? n ? "Could not initialize player. Please restart device." : "Please update to latest iOS to watch this video" : "Please use Safari browser to watch this video."
				},
				jt = function(e, n, t) {
					return new Promise((function(r, o) {
						var a = {
							otp: e.embedInfo.otp,
							playbackInfo: e.embedInfo.playbackInfo,
							signature: e.embedInfo.signature,
							href: e.href,
							tech: "cbcsi"
						};
						if (!navigator.serviceWorker) return o(new Error("service worker not available"));
						navigator.serviceWorker.addEventListener("message", (function(e) {
							var o = e.data,
								a = o.type,
								i = o.payload,
								s = i.code,
								c = i.message;
							return "workerVersion" === a ? (t.clear(), n.emit("workerVersion", {
								code: s,
								message: c
							}), r()) : "licenseLoadError" === a ? (t.clear(), n.emit("error", {
								code: s,
								message: "Error code " + s + ":  " + c,
								payload: {
									vdo: s,
									message: c
								}
							})) : void 0
						})), t.isRegistered() || t.add((function() {
							n.emit("error", {
								message: Rt(),
								payload: {
									errorMessage: "Service worker could not register in 60 seconds. \n : " + Rt()
								}
							})
						}), 6e4), navigator.serviceWorker.register("./cryptoWorker.js").then((function(n) {
							if (ut.debug("registered sw", n.active, n.waiting), !n.active) return ut.debug("reloading"), window.location.reload();
							n.active.postMessage({
								type: "init-call",
								payload: Bt(Bt({}, e.metaData.cbcs), {
									authToken: a
								})
							})
						}))
					}))
				};

			function Ft() {
				var e = null;
				return {
					add: function(n, t) {
						e = setTimeout(n, t)
					},
					clear: function() {
						e && clearTimeout(e)
					},
					isRegistered: function() {
						return !!e
					}
				}
			}

			function Ut(e, n, t) {
				var r;
				return function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				}(this, void 0, void 0, (function() {
					var o, a, i, s, c, u, l, d, f;
					return function(e, n) {
						var t, r, o, a, i = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return a = {
							next: s(0),
							throw: s(1),
							return: s(2)
						}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
							return this
						}), a;

						function s(a) {
							return function(s) {
								return function(a) {
									if (t) throw new TypeError("Generator is already executing.");
									for (; i;) try {
										if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
										switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
											case 0:
											case 1:
												o = a;
												break;
											case 4:
												return i.label++, {
													value: a[1],
													done: !1
												};
											case 5:
												i.label++, r = a[1], a = [0];
												continue;
											case 7:
												a = i.ops.pop(), i.trys.pop();
												continue;
											default:
												if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
													i = 0;
													continue
												}
												if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
													i.label = a[1];
													break
												}
												if (6 === a[0] && i.label < o[1]) {
													i.label = o[1], o = a;
													break
												}
												if (o && i.label < o[2]) {
													i.label = o[2], i.ops.push(a);
													break
												}
												o[2] && i.ops.pop(), i.trys.pop();
												continue
										}
										a = n.call(e, i)
									} catch (e) {
										a = [6, e], r = 0
									} finally {
										t = o = 0
									}
									if (5 & a[0]) throw a[1];
									return {
										value: a[0] ? a[1] : void 0,
										done: !0
									}
								}([a, s])
							}
						}
					}(this, (function(p) {
						switch (p.label) {
							case 0:
								if (o = n.embedInfo, !(a = n.metaData).cbcs) return [2];
								pt(e, a.posters), e.autoplay = !!o.autoplay, e.setAttribute("preload", "auto"), e.setAttribute("playsinline", "true"), i = new Ft, e.addEventListener("error", (function(e) {
									i.clear(), t.emit("error", {
										code: e.code,
										message: "Video has encountered error",
										payload: {
											code: e.code,
											message: e.message
										}
									})
								})), p.label = 1;
							case 1:
								return p.trys.push([1, 3, , 4]), [4, jt(n, t, i)];
							case 2:
								return p.sent(), e.src = null === (r = a.cbcs) || void 0 === r ? void 0 : r.urlI, [3, 4];
							case 3:
								if (s = p.sent(), c = s.message, u = s.response, ut.error("Auth load error: ", c), i && i.clear(), u && u.data && u.message) try {
									return l = JSON.parse(u.data.message), d = l.code, f = l.message, [2, t.emit("error", {
										code: d,
										message: f,
										payload: {
											vdo: d,
											message: f
										}
									})]
								} catch (e) {
									ut.debug("Could not parse error from license server")
								}
								return t.emit("error", {
									message: "Video load error: " + c,
									payload: {
										message: "License load error: " + c
									}
								}), [3, 4];
							case 4:
								return [2]
						}
					}))
				}))
			}

			function Ht(e) {
				var n = e.videoEl,
					t = e.playerArgs,
					r = e.playbackTech,
					o = e.eventBus;
				return function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				}(this, void 0, void 0, (function() {
					return function(e, n) {
						var t, r, o, a, i = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return a = {
							next: s(0),
							throw: s(1),
							return: s(2)
						}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
							return this
						}), a;

						function s(a) {
							return function(s) {
								return function(a) {
									if (t) throw new TypeError("Generator is already executing.");
									for (; i;) try {
										if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
										switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
											case 0:
											case 1:
												o = a;
												break;
											case 4:
												return i.label++, {
													value: a[1],
													done: !1
												};
											case 5:
												i.label++, r = a[1], a = [0];
												continue;
											case 7:
												a = i.ops.pop(), i.trys.pop();
												continue;
											default:
												if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
													i = 0;
													continue
												}
												if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
													i.label = a[1];
													break
												}
												if (6 === a[0] && i.label < o[1]) {
													i.label = o[1], o = a;
													break
												}
												if (o && i.label < o[2]) {
													i.label = o[2], i.ops.push(a);
													break
												}
												o[2] && i.ops.pop(), i.trys.pop();
												continue
										}
										a = n.call(e, i)
									} catch (e) {
										a = [6, e], r = 0
									} finally {
										t = o = 0
									}
									if (5 & a[0]) throw a[1];
									return {
										value: a[0] ? a[1] : void 0,
										done: !0
									}
								}([a, s])
							}
						}
					}(this, (function(e) {
						switch (e.label) {
							case 0:
								return "dash" !== r ? [3, 2] : [4, Ot(n, t, o)];
							case 1:
								return [2, e.sent()];
							case 2:
								return "cbcsi" !== r ? [3, 4] : [4, Ut(n, t, o)];
							case 3:
								return [2, e.sent()];
							case 4:
								return "fps" !== r ? [3, 6] : [4, Vt(n, t, o)];
							case 5:
								return [2, e.sent()];
							case 6:
								return [2]
						}
					}))
				}))
			}
			var zt = function() {
					return (zt = Object.assign || function(e) {
						for (var n, t = 1, r = arguments.length; t < r; t++)
							for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
						return e
					}).apply(this, arguments)
				},
				Wt = function(e, n, t, r) {
					return new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				},
				Gt = function(e, n) {
					var t, r, o, a, i = {
						label: 0,
						sent: function() {
							if (1 & o[0]) throw o[1];
							return o[1]
						},
						trys: [],
						ops: []
					};
					return a = {
						next: s(0),
						throw: s(1),
						return: s(2)
					}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
						return this
					}), a;

					function s(a) {
						return function(s) {
							return function(a) {
								if (t) throw new TypeError("Generator is already executing.");
								for (; i;) try {
									if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
									switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
										case 0:
										case 1:
											o = a;
											break;
										case 4:
											return i.label++, {
												value: a[1],
												done: !1
											};
										case 5:
											i.label++, r = a[1], a = [0];
											continue;
										case 7:
											a = i.ops.pop(), i.trys.pop();
											continue;
										default:
											if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
												i = 0;
												continue
											}
											if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
												i.label = a[1];
												break
											}
											if (6 === a[0] && i.label < o[1]) {
												i.label = o[1], o = a;
												break
											}
											if (o && i.label < o[2]) {
												i.label = o[2], i.ops.push(a);
												break
											}
											o[2] && i.ops.pop(), i.trys.pop();
											continue
									}
									a = n.call(e, i)
								} catch (e) {
									a = [6, e], r = 0
								} finally {
									t = o = 0
								}
								if (5 & a[0]) throw a[1];
								return {
									value: a[0] ? a[1] : void 0,
									done: !0
								}
							}([a, s])
						}
					}
				};

			function Kt(e) {
				var n = e.otp,
					t = e.playbackInfoStr,
					r = e.videoEl,
					o = e.eventBus,
					a = e.configureOptions,
					i = e.logLevel,
					s = e.liteMode,
					c = void 0 !== s && s;
				return Wt(this, void 0, void 0, (function() {
					var e, s, u, l, d, f = this;
					return Gt(this, (function(p) {
						switch (p.label) {
							case 0:
								return (e = function(e, n) {
									try {
										return e = atob(e), JSON.parse(e)
									} catch (e) {
										return ut.error("playbackInfo invalid: ", e), n.emit("error", {
											code: null,
											message: "Provide the valid playbackInfo string",
											payload: {
												message: "Error: parsing the playbackInfo string"
											}
										}), {
											videoId: null
										}
									}
								}(t, o).videoId) ? (s = zt({
									otp: n,
									playbackInfoStr: t,
									playbackInfo: t
								}, a), !0 !== a.noClipstat && dt({
									videoEl: r,
									eventBus: o,
									videoId: e,
									embedInfo: s
								}), [4, Tt({
									videoId: e,
									configureOptions: a,
									eventBus: o
								})]) : [2];
							case 1:
								return u = p.sent(), [4, kt(u.tech, o)];
							case 2:
								return "zen" === (l = p.sent()) && o.emit("zenObject", {
										topLinkUrl: "intent://app.vdocipher.com/" + n + "#Intent;package=com.vdocipher.zenplayer;S.otp=" + n + ";scheme=vdocipher;S.market_referrer=" + (h = (document.referrer || window.location.href).match(/:\/\/(.[^/]+)/), (h && h.length > 1 ? h[1] : "unknown") + ";end"),
										topLinkImage: (v = u.posters, void 0 === v && (v = []), v.length > 0 && Array.from(v).sort((function(e, n) {
											return n.height - e.height
										}))[0].url || ""),
										topLinkMessage: "Play on App"
									}), o.emit("tech", l), d = {
										embedInfo: s,
										metaData: u,
										href: document.referrer || window.location.href,
										origin: window.location.origin,
										logLevel: i
									}, r.setAttribute("crossorigin", "anonymous"),
									function(e) {
										var n = e.videoEl;
										e.captions.forEach((function(e) {
											var t = e.lang,
												r = e.url,
												o = e.label,
												a = document.createElement("track");
											a.setAttribute("label", o), a.setAttribute("kind", "captions"), a.setAttribute("srclang", t), a.setAttribute("src", r), n.appendChild(a)
										}))
									}({
										videoEl: r,
										captions: u.captions || []
									}), c ? (o.emit("setLiteMode", !0), o.on("setLiteMode", (function(e) {
										return Wt(f, void 0, void 0, (function() {
											return Gt(this, (function(n) {
												switch (n.label) {
													case 0:
														return e ? [2] : (o.emit("waitingForPlayback", !0), r.addEventListener("play", (function() {
															return o.emit("waitingForPlayback", !1)
														})), [4, Ht({
															videoEl: r,
															playbackTech: l,
															playerArgs: d,
															eventBus: o
														})]);
													case 1:
														return n.sent(), r.readyState > 2 ? r.play() : r.addEventListener("loadeddata", (function e() {
															r.readyState < 2 || (r.play(), r.removeEventListener("loadeddata", e))
														})), [2]
												}
											}))
										}))
									})), [2]) : [4, Ht({
										videoEl: r,
										playbackTech: l,
										playerArgs: d,
										eventBus: o
									})];
							case 3:
								return [2, p.sent()]
						}
						var v, h
					}))
				}))
			}
			var Qt = function() {
					try {
						var e = [1, 2, 3];
						return e.includes(1), e.push(23), e.forEach((function() {})), e.filter(Boolean), e.indexOf(34), !0
					} catch (e) {
						return !1
					}
				}(),
				Jt = function() {
					try {
						return void 0 !== window.fetch
					} catch (e) {
						return !1
					}
				}(),
				qt = function() {
					try {
						return void 0 !== Object.assign
					} catch (e) {
						return !1
					}
				}(),
				Yt = function() {
					return (Yt = Object.assign || function(e) {
						for (var n, t = 1, r = arguments.length; t < r; t++)
							for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
						return e
					}).apply(this, arguments)
				};

			function Xt(e, n) {
				void 0 === n && (n = {});
				var t = n.eventBus || new hn;
				t.on("error", (function(n) {
					e.dispatchEvent(new CustomEvent("@vdo/error", {
						detail: n
					}))
				}));
				var r = function() {
					for (var e = [Qt, Jt, qt], n = 0; n < e.length; n++)
						if (!1 === e[n]) return !1;
					return !0
				}();
				r || t.emit("error", {
					message: "Please update the browser",
					payload: {
						message: "isBrowserSupported False, for the vdo-player core"
					}
				});
				var o = Yt({}, n);
				delete o.eventBus, ut.setLevel(n.logLevel || "ERROR");
				var a = ut.getLevel();
				return {
					addVideo: function(n) {
						var i = n.otp,
							s = n.playbackInfo,
							c = n.liteMode;
						return function(e, n, t, r) {
							return new(t || (t = Promise))((function(o, a) {
								function i(e) {
									try {
										c(r.next(e))
									} catch (e) {
										a(e)
									}
								}

								function s(e) {
									try {
										c(r.throw(e))
									} catch (e) {
										a(e)
									}
								}

								function c(e) {
									var n;
									e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
										e(n)
									}))).then(i, s)
								}
								c((r = r.apply(e, n || [])).next())
							}))
						}(this, void 0, void 0, (function() {
							return function(e, n) {
								var t, r, o, a, i = {
									label: 0,
									sent: function() {
										if (1 & o[0]) throw o[1];
										return o[1]
									},
									trys: [],
									ops: []
								};
								return a = {
									next: s(0),
									throw: s(1),
									return: s(2)
								}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
									return this
								}), a;

								function s(a) {
									return function(s) {
										return function(a) {
											if (t) throw new TypeError("Generator is already executing.");
											for (; i;) try {
												if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
												switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
													case 0:
													case 1:
														o = a;
														break;
													case 4:
														return i.label++, {
															value: a[1],
															done: !1
														};
													case 5:
														i.label++, r = a[1], a = [0];
														continue;
													case 7:
														a = i.ops.pop(), i.trys.pop();
														continue;
													default:
														if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
															i = 0;
															continue
														}
														if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
															i.label = a[1];
															break
														}
														if (6 === a[0] && i.label < o[1]) {
															i.label = o[1], o = a;
															break
														}
														if (o && i.label < o[2]) {
															i.label = o[2], i.ops.push(a);
															break
														}
														o[2] && i.ops.pop(), i.trys.pop();
														continue
												}
												a = n.call(e, i)
											} catch (e) {
												a = [6, e], r = 0
											} finally {
												t = o = 0
											}
											if (5 & a[0]) throw a[1];
											return {
												value: a[0] ? a[1] : void 0,
												done: !0
											}
										}([a, s])
									}
								}
							}(this, (function(n) {
								switch (n.label) {
									case 0:
										return r ? [4, Kt({
											otp: i,
											playbackInfoStr: s,
											videoEl: e,
											configureOptions: o,
											eventBus: t,
											logLevel: a,
											liteMode: c
										})] : [2];
									case 1:
										return [2, n.sent()]
								}
							}))
						}))
					},
					eventBus: t
				}
			}

			function Zt(e) {
				var n = {};
				return e.addEventListener("message", (function(e) {
					var t = function(e) {
							try {
								return JSON.parse(e)
							} catch (e) {
								return {}
							}
						}(e.data),
						r = t.token,
						o = t.type,
						a = t.status,
						i = void 0 === a || a,
						s = t.payload;
					"@vdo/promiseResolver" === o && r && r in n && (i ? n[r][0](s) : n[r][1](s), delete n[r])
				})), {
					bindPromise: function(e, t) {
						var r, o, a = (r = (46656 * Math.random() | 0).toString(36), o = (46656 * Math.random() | 0).toString(36), ("000" + r).slice(-3) + ("000" + o).slice(-3));
						return n[a] = [e, t], a
					},
					settlePromise: function(e, n, t, r) {
						void 0 === t && (t = !0), e instanceof MessagePort || e instanceof ServiceWorker || e.postMessage(JSON.stringify({
							type: "@vdo/promiseResolver",
							token: n,
							status: t,
							payload: r
						}), "*")
					}
				}
			}
			var $t = function(e, n) {
					for (var t = 0, r = n.length, o = e.length; t < r; t++, o++) e[o] = n[t];
					return e
				},
				er = [],
				nr = Object.getOwnPropertyNames(HTMLVideoElement.prototype),
				tr = Object.getOwnPropertyNames(HTMLMediaElement.prototype);
			$t($t([], nr), tr).forEach((function(e) {
				try {
					"function" != typeof HTMLVideoElement.prototype[e] && er.push(e)
				} catch (n) {
					er.push(e)
				}
			}));
			var rr = ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "play", "pause", "ratechange", "resize", "volumechange"],
				or = ["loadstart", "loadedmetadata", "loadeddata", "canplay", "emptied", "canplaythrough"],
				ar = function(e) {
					var n = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
					return n && decodeURIComponent(n[1].replace(/\+/g, " "))
				};

			function ir(e, n) {
				if (null !== window.parent) {
					var t = [],
						r = [],
						o = {
							isActive: !1,
							source: null,
							origin: "*"
						},
						a = new Zt(window),
						i = a.bindPromise,
						s = a.settlePromise,
						c = function(e, n, t) {
							return new Promise((function(r, a) {
								if (e instanceof MessagePort || e instanceof ServiceWorker) a("[Vdocipher] [API] Not a proper source for postMessage");
								else {
									var s = i(r, a);
									e.postMessage(JSON.stringify({
										type: n,
										payload: t,
										token: s
									}), o.origin)
								}
							}))
						};
					n.on("*", (function(e) {
						for (var n = [], t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
						r.push({
							name: e,
							data: n
						}), !1 !== o.isActive && o.source && c(o.source, "@vdo/eventBus", {
							name: e,
							data: n
						})
					}));
					var u = function(e, n) {
							var t = function(e) {
								var n = {};
								return er.forEach((function(t) {
									var r, o = e[t];
									(r = o) !== Object(r) ? n[t] = o : n["$$" + t] = function(e) {
										if ("TimeRanges" === e.constructor.name) {
											for (var n = [], t = 0; t < e.length; t++) n.push([e.start(t), e.end(t)]);
											return {
												type: "TimeRanges",
												argument: {
													length: e.length,
													data: n
												}
											}
										}
										return "$$@todo" + e.constructor.name
									}(o)
								})), n
							}(n);
							return c(e, "@vdo/updateState", t)
						},
						l = function(e, n) {
							return c(e, "@vdo/element/event", n)
						};
					! function(e, n) {
						rr.forEach((function(t) {
							e.addEventListener(t, n)
						}))
					}(e, (function(n) {
						var r = n.type;
						or.includes(r) && t.push(r), !1 !== o.isActive && o.source && (u(o.source, e), l(o.source, r))
					})), c(window.parent, "@vdo/readyToHandshake"), window.addEventListener("message", (function(a) {
						var i = a.data,
							d = a.source,
							f = function(e) {
								try {
									return JSON.parse(e)
								} catch (e) {
									return {}
								}
							}(i),
							p = f.name,
							v = f.type,
							h = f.payload,
							g = f.token,
							m = p && p in HTMLMediaElement.prototype;
						if (null !== d) {
							if ("@vdo/handshake" === v && h && "string" != typeof h && "origin" in h) {
								if (!0 === o.isActive) return console.error("[Vdocipher] PlayerAPI Handshake error: client already connected");
								o.source = d, o.isActive = !0, o.origin = null == h ? void 0 : h.origin, c(d, "@vdo/handshakeSuccessful"), u(d, e).then((function() {
									t.forEach((function(e) {
										return l(d, e)
									})), r.forEach((function(e) {
										var n = e.name,
											t = e.data;
										return c(d, "@vdo/eventBus", {
											name: n,
											data: t
										})
									})), g && s(d, g, !0)
								})).catch((function() {
									console.error("[Vdocipher] Player API Handshake Error"), g && s(d, g, !1, "[Vdocipher] Player API Handshake Error")
								}))
							}
							if ("@vdo/getState" === v && u(d, e), "@vdo/element/event" === v && h instanceof Array) {
								var y = h[0];
								rr.includes(y) || function(e, n, t) {
									n.addEventListener(t, (function() {
										u(e, n), c(e, "@vdo/element/event", t)
									}))
								}(d, e, y)
							}
							if (m && "@vdo/element/method" === v && Promise.resolve(e[p].apply(e, h)).then((function(e) {
									g && s(d, g, !0, e)
								})).catch((function(e) {
									g && s(d, g, !1, e.toString())
								})), m && "@vdo/element/property" === v) {
								if (Array.isArray(h) && 0 === h.length) return;
								e[p] = h
							}
							if ("@vdo/eventBus" === v && h && "string" != typeof h && "name" in h && "data" in h) {
								var b = h.name,
									w = h.data;
								n.emit(b, w), g && s(d, g, !0)
							}
						}
					}))
				}
			}
			var sr = function() {
				return (sr = Object.assign || function(e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
					return e
				}).apply(this, arguments)
			};
			! function() {
				! function(e, n, t, r) {
					new(t || (t = Promise))((function(o, a) {
						function i(e) {
							try {
								c(r.next(e))
							} catch (e) {
								a(e)
							}
						}

						function s(e) {
							try {
								c(r.throw(e))
							} catch (e) {
								a(e)
							}
						}

						function c(e) {
							var n;
							e.done ? o(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
								e(n)
							}))).then(i, s)
						}
						c((r = r.apply(e, n || [])).next())
					}))
				}(this, void 0, void 0, (function() {
					var e, n, t, r, o, a, i, s, c, u;
					return function(e, n) {
						var t, r, o, a, i = {
							label: 0,
							sent: function() {
								if (1 & o[0]) throw o[1];
								return o[1]
							},
							trys: [],
							ops: []
						};
						return a = {
							next: s(0),
							throw: s(1),
							return: s(2)
						}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
							return this
						}), a;

						function s(a) {
							return function(s) {
								return function(a) {
									if (t) throw new TypeError("Generator is already executing.");
									for (; i;) try {
										if (t = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
										switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
											case 0:
											case 1:
												o = a;
												break;
											case 4:
												return i.label++, {
													value: a[1],
													done: !1
												};
											case 5:
												i.label++, r = a[1], a = [0];
												continue;
											case 7:
												a = i.ops.pop(), i.trys.pop();
												continue;
											default:
												if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
													i = 0;
													continue
												}
												if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
													i.label = a[1];
													break
												}
												if (6 === a[0] && i.label < o[1]) {
													i.label = o[1], o = a;
													break
												}
												if (o && i.label < o[2]) {
													i.label = o[2], i.ops.push(a);
													break
												}
												o[2] && i.ops.pop(), i.trys.pop();
												continue
										}
										a = n.call(e, i)
									} catch (e) {
										a = [6, e], r = 0
									} finally {
										t = o = 0
									}
									if (5 & a[0]) throw a[1];
									return {
										value: a[0] ? a[1] : void 0,
										done: !0
									}
								}([a, s])
							}
						}
					}(this, (function(l) {
						switch (l.label) {
							case 0:
								if ((e = document.createElement("div")).id = "vdo-container", document.body.append(e), n = ar("otp"), t = ar("playbackInfo"), !n || !t) return r = function(e) {
									void 0 === e && (e = "Error");
									var n = document.createElement("div");
									return n.setAttribute("style", "display: flex; justify-content: center; align-items: center; color: white; height: 100%;"), n.innerText = e, n
								}("Error: OTP or PlaybackInfo is required params"), e.appendChild(r), console.error("[Vdocipher] OTP and PlaybackInfo is required params"), [2];
								d = ar("techoverride"), o = {
									techoverride: d ? d.split(",") : null,
									noClipstat: "true" === ar("noClipstat"),
									autoplay: "true" === ar("autoplay"),
									liteMode: "true" === ar("litemode")
								}, a = {
									theme: ar("theme") || "GT:02",
									iconColor: ar("iconColor") || void 0,
									primaryColor: ar("primaryColor") || void 0,
									secondaryColor: ar("secondaryColor") || void 0,
									ccLanguage: ar("ccLanguage") || void 0
								}, l.label = 1;
							case 1:
								return l.trys.push([1, 3, , 4]), console.log("[Vdocipher] Initializing Player-v2"), (i = document.createElement("video")).style.width = "100%", i.style.height = "inherit", i.controls = !0, i.playsInline = !0, e.appendChild(i), s = yn(i, e, a).eventBus, c = Xt(i, sr(sr({}, o), {
									eventBus: s
								})), ir(i, s), [4, c.addVideo({
									otp: n,
									playbackInfo: t,
									liteMode: o.liteMode
								})];
							case 2:
								return l.sent(), [3, 4];
							case 3:
								return u = l.sent(), console.error("[Vdocipher]", u), [3, 4];
							case 4:
								return [2]
						}
						var d
					}))
				}))
			}()
		}()
}();
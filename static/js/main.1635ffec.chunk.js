(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(2),i=a.n(s),r=(a(15),a(3)),o=a(4),l=a(7),m=a(5),d=a(8);a(16);var g=function(e){return n.a.createElement("div",{className:"inner-card d-flex"},n.a.createElement("div",{onClick:function(){return e.checkGuess(e.id)},className:"img-container"},n.a.createElement("img",{alt:"",src:e.image})))},u=a(6),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,topScore:0,clickedIds:[],images:u},a.handleIncrement=function(){a.setState({score:a.state.score+1})},a.handleTopScore=function(){a.state.score>=a.state.topScore&&a.setState({topScore:a.state.score}),a.setState({clickedIds:[]})},a.checkGuess=function(e){a.setState(function(t){t.clickedIds.push(e)}),console.log(a.state.clickedIds);var t=!1;a.state.clickedIds.map(function(a){a===e&&(t=!0)}),t?(a.state.score===a.state.images.length&&(a.setState({score:0}),a.setState({topScore:0})),a.setState({score:0}),a.handleTopScore()):a.handleIncrement(),a.shuffleImages(a.state.images)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"shuffleImages",value:function(e){var t,a,c;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),c=e[t],e[t]=e[a],e[a]=c;return e}},{key:"endGame",value:function(){this.setState({score:0}),this.setState({topScore:0}),alert("You win!")}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"card text-center"},n.a.createElement("div",{className:"card-header bg-info "},n.a.createElement("h2",{className:"card-text text-white"},"How well do you know Married With Children?"),n.a.createElement("h5",{className:"card-text text-white-50"},"Click on each picture only once!"),n.a.createElement("div",{className:"row text-white"},n.a.createElement("div",{className:"col"},n.a.createElement("h5",{className:"card-text"},"Score: ",this.state.score)),n.a.createElement("div",{className:"col"},n.a.createElement("h5",{className:"card-text"},"Top Score: ",this.state.topScore)))),n.a.createElement("div",null,this.state.score===this.state.images.length?this.endGame():""),n.a.createElement("div",{className:"card-body "},this.state.images.map(function(t){return n.a.createElement(g,{id:t.id,key:t.id,image:t.image,checkGuess:e.checkGuess})})))}}]),t}(n.a.Component);var p=function(){return n.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,image:"./images/al.jpg"},{id:2,image:"./images/buck.jpg"},{id:3,image:"./images/bud.jpg"},{id:4,image:"./images/jefferson.jpg"},{id:5,image:"./images/kelly.jpg"},{id:6,image:"./images/lucky.jpeg"},{id:7,image:"./images/marcy.jpg"},{id:8,image:"./images/peggie.jpg"},{id:9,image:"./images/steve.jpg"}]},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1635ffec.chunk.js.map
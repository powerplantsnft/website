(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{241:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},250:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},281:function(e,t){},304:function(e,t){},306:function(e,t){},383:function(e,t){},385:function(e,t){},418:function(e,t){},423:function(e,t){},425:function(e,t){},432:function(e,t){},445:function(e,t){},468:function(e,t){},477:function(e,t){},479:function(e,t){},548:function(e,t,n){},549:function(e,t,n){},550:function(e,t,n){},551:function(e,t,n){},552:function(e,t,n){},553:function(e,t,n){},554:function(e,t,n){},555:function(e,t,n){},556:function(e,t,n){},557:function(e,t,n){},558:function(e,t,n){},560:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(29),c=n.n(i),r=(n(250),n(251),n(4)),o=n(5),l=n(9),p=n(8),u=n.p+"static/media/CenterPic.6eabdc78.png",d=n.p+"static/media/Pink Caladium.899f182e.png",m=(n(252),n(568)),b=n(564),j=n(569),h=n(565),y=n(566),f=(n(253),n(254),n(0)),O=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(s.a.Component);function x(){document.getElementById("mint").scrollIntoView()}function g(){console.log("---"),document.getElementById("home").scrollIntoView()}function w(){window.location.href="https://whitepaper.powerplantsnft.com/"}function v(){window.location.href="https://powerplantsnft.com/"}function T(){window.location.href="https://powerplantsnft.com/"}function _(){window.open("https://opensea.io/")}var N=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"header-control",id:"home",children:[Object(f.jsx)(m.a,{collapseOnSelect:!0,expand:"lg",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(m.a.Brand,{href:"#home",style:{paddingTop:10},children:Object(f.jsx)("img",{src:u,width:289,height:115.1,alt:"logo"})}),Object(f.jsx)(m.a.Toggle,{style:{backgroundColor:"#32CD32"},"aria-controls":"responsive-navbar-nav"}),Object(f.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(f.jsx)(j.a,{className:"me-auto"}),Object(f.jsxs)(j.a,{style:{borderRadius:0,padding:"0 20px 0 20px"},children:[Object(f.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:g,children:"Home"}),Object(f.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:w,children:"White Paper/FAQ"}),Object(f.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:v,children:"Gallery"}),Object(f.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:T,children:"Shop"}),Object(f.jsx)(j.a.Link,{className:"bruh nav-link-btn",onClick:_,children:"OpenSea"}),Object(f.jsx)("div",{style:{display:"flex",textAlign:"center",justifyContent:"center",padding:"0em"},children:Object(f.jsx)("text",{className:"mint-button",onClick:x,children:"MINT"})})]})]})]})}),Object(f.jsx)("div",{className:"header-content",children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(y.a,{md:6,xs:12,className:"about-description",style:{textAlign:"left"},children:[Object(f.jsx)("header",{children:Object(f.jsxs)("span",{className:"home-title",children:["THE NEXT GENERATION",Object(f.jsx)("br",{})," OF PLANTS"]})}),Object(f.jsx)("p",{className:"home-title-content",children:"No watering required."}),Object(f.jsxs)("div",{style:{paddingTop:"2em",display:"flex",textAlign:"center"},children:[Object(f.jsx)("text",{className:"mint-button",onClick:x,children:"MINT"}),Object(f.jsx)("p",{style:{color:"white",paddingTop:25,paddingLeft:10},children:" 0.03 ETH"})]}),Object(f.jsxs)("div",{className:"social-button-container",children:[Object(f.jsx)("a",{className:"social-button",href:"https://discord.gg/f2jdaTUesH",children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.webp",alt:""})}),Object(f.jsx)("a",{className:"social-button",href:"https://twitter.com/PowerPlants_",children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.webp",alt:""})}),Object(f.jsx)("a",{className:"social-button",href:"http://instagram.com/powerplantsnft",children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.webp",alt:""})})]})]}),Object(f.jsx)(y.a,{md:6,xs:12,className:"image-control",children:Object(f.jsx)("img",{style:{borderRadius:0},src:d,alt:"about gif"})})]})})}),Object(f.jsx)("div",{})]})})}}]),n}(s.a.Component),C=(n(260),n.p,n(261),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(f.jsx)("img",{style:{maxHeight:500,maxWidth:500},src:this.props.imageUrl,alt:"team member"}),Object(f.jsxs)("div",{className:"teammember-description",children:[Object(f.jsx)("p",{className:"teammember-name",children:this.props.name}),Object(f.jsx)("p",{className:"teammember-occupation",children:this.props.title})]})]})}}]),n}(s.a.Component)),k=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={teams:[{image:"https://github.com/powerplantsnft/website/blob/main/pp1.jpeg?raw=true",title:"Tony Stark without the billions. On the rocks type of guy, chases with green juice for balance.",name:"Muhani, Founder"},{image:"https://github.com/powerplantsnft/website/blob/main/pp2.jpeg?raw=true",title:"Self-proclaimed crypto-genius. Jack of all trades. Lover of all things nature.",name:"Thomas, Founder"},{image:"https://github.com/powerplantsnft/website/blob/main/pp3.jpeg?raw=true",title:"Scared of heights but would love to go to space.",name:"Alexander, Artist"},{image:"https://github.com/powerplantsnft/website/blob/main/pp4.jpeg?raw=true",title:"Firm believer that the earth is flat. Avoids cliffs.",name:"Emily, Social Media/Outreach"},{image:"https://github.com/powerplantsnft/website/blob/main/pp5.jpeg?raw=true",title:"Developer by day, master chef by night.",name:"Joseph, Developer"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"team-control",id:"team",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)("header",{style:{fontStyle:"normal",color:"white"},children:" TEAM MEMBERS "}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(y.a,{className:"team-control-card",md:6,xs:12,children:Object(f.jsx)(C,{imageUrl:this.state.teams[0].image,title:this.state.teams[0].title,name:this.state.teams[0].name})}),Object(f.jsx)(y.a,{className:"",md:6,xs:12,children:Object(f.jsx)(C,{imageUrl:this.state.teams[1].image,title:this.state.teams[1].title,name:this.state.teams[1].name})})]}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(y.a,{className:"team-control-card",md:4,xs:12,children:Object(f.jsx)(C,{imageUrl:this.state.teams[2].image,title:this.state.teams[2].title,name:this.state.teams[2].name})}),Object(f.jsx)(y.a,{className:"team-control-card",md:4,xs:12,children:Object(f.jsx)(C,{imageUrl:this.state.teams[3].image,title:this.state.teams[3].title,name:this.state.teams[3].name})}),Object(f.jsx)(y.a,{className:"",md:4,xs:12,children:Object(f.jsx)(C,{imageUrl:this.state.teams[4].image,title:this.state.teams[4].title,name:this.state.teams[4].name})})]})]})})}}]),n}(s.a.Component);n(262),s.a.Component,n(263),n.p;function M(){document.getElementById("mint").scrollIntoView()}function S(){document.getElementById("home").scrollIntoView()}function A(){window.location.href="https://whitepaper.powerplantsnft.com/"}function E(){window.location.href="https://gallery.powerplantsnft.com/"}function I(){window.location.href="https://shop.powerplantsnft.com/"}function P(){window.open("https://opensea.io/")}var F=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"footer-control",id:"socials",children:Object(f.jsx)(b.a,{className:"footer",children:Object(f.jsxs)(h.a,{style:{width:"100%"},children:[Object(f.jsxs)(y.a,{md:"3",className:"footer-logo-container",style:{},children:[Object(f.jsx)("h3",{children:"Power Plants"}),Object(f.jsx)("img",{className:"footer-logo",src:"https://cdn.discordapp.com/attachments/912832626774114384/919467254670839858/FEF4AA8F-E930-438C-94AB-440FC3906428.png",alt:""})]}),Object(f.jsx)(y.a,{md:"3",style:{margin:"auto"},children:Object(f.jsx)("div",{style:{display:"flex",textAlign:"center",justifyContent:"center",padding:"0em"},children:Object(f.jsx)("text",{className:"mint-button",onClick:M,children:"MINT"})})}),Object(f.jsxs)(y.a,{md:"3",className:"footer-nav-container",children:[Object(f.jsx)("p",{className:"footer-nav",onClick:S,children:"Home"}),Object(f.jsx)("p",{className:"footer-nav",onClick:A,children:"White Paper/FAQ"}),Object(f.jsx)("p",{className:"footer-nav",onClick:E,children:"Gallery"}),Object(f.jsx)("p",{className:"footer-nav",onClick:I,children:"Shop"}),Object(f.jsx)("p",{className:"footer-nav",onClick:P,children:"OpenSea"})]}),Object(f.jsxs)(y.a,{md:"3",className:"footer-social",children:[Object(f.jsx)("p",{className:"footer-social-title",children:"Connect with us on Social Media"}),Object(f.jsxs)("div",{className:"social-button-container",children:[Object(f.jsx)("a",{className:"social-button",href:"http://discord.gg/RNxVea93dN",children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_9bd7b35f04334b70aaafeee921e3c67f~mv2.webp",alt:""})}),Object(f.jsx)("a",{className:"social-button",href:"https://twitter.com/PowerPlants_",children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_540ad1f79c0e4da587e2095f0226c14c~mv2.webp",alt:""})}),Object(f.jsx)("a",{className:"social-button",href:"http://instagram.com/powerplantsnft",children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.png/v1/fill/w_39,h_39,al_c,q_85,usm_0.66_1.00_0.01/9529be_2bfd2ec19e0045c69c757f9e6d0bc4fe~mv2.webp",alt:""})})]})]})]})})})}}]),n}(s.a.Component),U=(n(264),n.p,n(265),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{onClick:function(){e.setState({open:!e.state.open})},className:"collapse-header-control",children:Object(f.jsx)("div",{className:"collapse-header",children:Object(f.jsx)("p",{children:this.props.title})})}),Object(f.jsx)("div",{id:"example",className:"collapse-content display-linebreak",children:this.props.content})]})}}]),n}(s.a.Component)),B=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"Phase 1",title:"Inception (Q4 2021)",content:"-Website is launched\n -Create partnerships with tree foundations"},{tag:"Phase 2",title:"Community (Q4 2021)",content:"-Social Media marketing campaigns are launched\n-Raffle giveaway once we reach 25,000 discord members\n-Whitelisting"},{tag:"Phase 3",title:"Launch (Q4 2021)",content:"-NFTs are sold to the public\n-Unlockable content released\n-Exclusive community group launched\n-Merchandise is launched"},{tag:"Phase 4",title:"Donation (Q1 2022)",content:"-Donation of 5% to charitable foundations\n-Contributions to DAOs\n-Trees are planted and matched"},{tag:"Phase 5",title:"After Launch (Q1 2022)",content:"-$50,000 is pumped into the Power Plants Fund for ongoing developments and marketing campaigns\n-Rare owners get original art/seeds mailed to them\n-2% of ongoing secondary marketplace sales are donated\n-Raffles on social media platforms"},{tag:"Phase 6",title:"Metaverse (Q2 2022)",content:"-Owners will have the ability to stake their NFTs\n-Owners will receive rewards from staking"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{textAlign:"center"},children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(f.jsx)(y.a,{xs:12,md:6,children:Object(f.jsx)("img",{src:"https://static.wixstatic.com/media/9529be_c5c27e794a4a403fa063f9a414247950~mv2.png/v1/crop/x_555,y_175,w_1673,h_2667/fill/w_488,h_778,al_c,q_90,usm_0.66_1.00_0.01/Blue%20Sapphire%20Orchid.webp",style:{width:"100%"}})}),Object(f.jsxs)(y.a,{style:{alignContent:"center",justifyContent:"center",textAlign:"center"},children:[Object(f.jsx)("text",{children:Object(f.jsx)("header",{className:"roadmap-title",children:" ROAD MAP"})}),this.state.roadmaps.map((function(e,t){return Object(f.jsx)(U,{style:{textAlign:"center",color:"black"},tag:e.tag,title:e.title,content:e.content},t)}))]})]})})})}}]),n}(s.a.Component),D=(n(266),n.p+"static/media/item1.1c214071.png"),L=n.p+"static/media/item2.81e34ae6.png",R=n.p+"static/media/item3.eec91da6.png",H=(n(267),n(38)),W=n.p+"static/media/fire.76eb30ed.png",G=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"top-item",children:[Object(f.jsx)("img",{src:this.props.image,alt:"top item"}),Object(f.jsxs)("div",{className:"top-item-description",children:[Object(f.jsx)("p",{children:this.props.name}),Object(f.jsx)("h6",{children:this.props.price})]}),Object(f.jsxs)("div",{className:"top-item-bid",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(H.c,{})," HighestBid ",Object(f.jsx)("b",{children:this.props.highestBid})]}),Object(f.jsxs)("p",{children:["New Bid \xa0",Object(f.jsx)("img",{src:W,width:17,height:17,alt:"new bid"})]})]})]})}}]),n}(s.a.Component),J=(s.a.Component,n(17)),Q=n.p+"static/media/Final Intro Video.75f402db.mov",q=(n(268),n(40)),K=n(23),z=n.n(K),V=n(85),Y=n(83),$=n.n(Y),X=n(240),Z=n.n(X),ee=n(241),te=n(86),ne=n(242),ae=n(3),se={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(ae.a)(Object(ae.a)({},se),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(ae.a)(Object(ae.a)({},se),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(ae.a)(Object(ae.a)({},e),{},{account:t.payload.account});default:return e}},ce={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(ae.a)(Object(ae.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(ae.a)(Object(ae.a)({},ce),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},oe=Object(te.b)({blockchain:ie,data:re}),le=[ne.a],pe=Object(te.c)(te.a.apply(void 0,le)),ue=Object(te.d)(oe,pe),de=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},me=function(e){return function(){var e=Object(V.a)(z.a.mark((function e(t){var n,a,s;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ue.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,ue.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,ue.getState().blockchain.smartContract.methods.cost().call();case 10:s=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:s}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(de("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},be=function(e){return{type:"CONNECTION_FAILED",payload:e}},je=function(e){return function(){var t=Object(V.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(me());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};var he=function(){var e=Object(q.b)(),t=Object(q.c)((function(e){return e.blockchain})),n=(Object(q.c)((function(e){return e.data})),Object(a.useState)("")),s=Object(J.a)(n,2),i=(s[0],s[1]),c=Object(a.useState)(!1),r=Object(J.a)(c,2),o=r[0],l=r[1],p=Object(a.useState)(1),u=Object(J.a)(p,2),d=u[0],m=u[1],j=function(){""!==t.account&&null!==t.smartContract&&e(me(t.account))};return Object(a.useEffect)((function(){j()}),[t.account]),Object(f.jsx)("div",{className:"mint-control",id:"mint",children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(y.a,{md:6,xs:12,className:"mint-image",children:Object(f.jsx)("video",{id:"video",controls:!0,autoPlay:!0,loop:!0,className:"video",src:Q,alt:"mint gif"})}),Object(f.jsxs)(y.a,{md:6,xs:12,className:"mint-description",children:[Object(f.jsxs)("header",{style:{fontStyle:"normal",fontFamily:"newThing"},children:["MINT YOUR ",Object(f.jsx)("text",{style:{color:"white"},children:"POWER PLANT"})]}),Object(f.jsx)("text",{style:{textAlign:"center",height:10}}),Object(f.jsxs)("div",{className:"number-control",children:[Object(f.jsx)(H.a,{color:"white",size:40,onClick:function(){d<=1||m(d-1)}}),Object(f.jsx)("span",{id:"inputBox",style:{color:"white"},children:d}),Object(f.jsx)(H.b,{color:"white",size:40,onClick:function(){d>=25||m(d+1)}})]}),Object(f.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.03 ETH + Gas"}),""===t.account||null===t.smartContract?Object(f.jsxs)("div",{className:"flex-column",children:[Object(f.jsx)("button",{className:"ybutton",onClick:function(t){console.log("--------"),t.preventDefault(),e((console.log("--:"),function(){var e=Object(V.a)(z.a.mark((function e(t){var n,a,s,i,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t({type:"CONNECTION_REQUEST"}),n=window,!(a=n.ethereum)||!a.isMetaMask){e.next=21;break}return $.a.setProvider(a),s=new Z.a(a),e.prev=6,e.next=9,a.request({method:"eth_requestAccounts"});case 9:return i=e.sent,e.next=12,a.request({method:"net_version"});case 12:1==e.sent?(c=new $.a(ee,"0x7181d2038B849A18145eb153b8bEFC552e52c37A"),t({type:"CONNECTION_SUCCESS",payload:{account:i[0],smartContract:c,web3:s}}),a.on("accountsChanged",(function(e){t(je(e[0]))})),a.on("chainChanged",(function(){window.location.reload()}))):t(be("Change network to Ethereum Mainnet.")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),t(be("Something went wrong."));case 19:e.next=22;break;case 21:t(be("Please install Metamask."));case 22:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}())),j()},children:"CONNECT"}),""!==t.errorMsg?Object(f.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(f.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(i("Minting your Official BooCrew NFT..."),l(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:285e3*a,to:"0x560A618d632bad1Fd73F27125903b5Db11470b78",from:t.account,value:t.web3.utils.toWei((.03*a).toString(),"ether")}).once("error",(function(e){console.log(e),i("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){i("Your BooCrew NFT has been successfully minted!"),l(!1),e(me(t.account))}))),j()},children:o?"BUSY":"MINT"})]})]})})})},ye=n.p+"static/media/12DOA(1).6b4a882b.gif",fe=(n(548),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"about-control",style:{background:"#141416"},children:Object(f.jsx)(b.a,{style:{border:"solid #7E7E7F 1px",padding:20},children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(y.a,{md:6,xs:12,className:"about-description",children:[Object(f.jsxs)("header",{className:"about-title",children:["UTILITY",Object(f.jsx)("br",{})]}),Object(f.jsxs)("p",{style:{paddingTop:"3em"},children:[Object(f.jsx)("text",{className:"about-paragraph",children:"Planting up to 4 trees for every Power Plants NFT minted."})," ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("text",{className:"about-text",children:"\u201cPower Plants will donate 2 trees for every NFT that is minted. We will also match all tree donations if all 5,000 NFTs are minted, bringing the total to 20,000. Proof of donations will be shared."})]})]}),Object(f.jsx)(y.a,{md:6,xs:12,className:"image-control",children:Object(f.jsx)("img",{style:{border:"solid black 2px",borderRadius:0},src:ye,alt:"about gif"})})]})})})}}]),n}(s.a.Component)),Oe=n(243),xe=n.n(Oe),ge=(n.p,n(549),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"meet-control",children:[Object(f.jsx)(b.a,{children:Object(f.jsxs)("header",{style:{textAlign:"center",color:"white"},children:[Object(f.jsx)("br",{})," ",Object(f.jsx)("span",{style:{fontStyle:"normal"}})]})}),Object(f.jsxs)(xe.a,{breakpoints:[{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1}}],dots:!1,arrows:!0,showSides:!0,sidesOpacity:.5,sideSize:.1,slidesToScroll:1,slidesToShow:4,scrollOnDevice:!0,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/src/assets/d.jpeg?raw=true",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/src/assets/g.jpeg?raw=true",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/src/assets/c.jpeg?raw=true",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/src/assets/f.jpeg?raw=true",alt:"boy2"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/Cert.jpeg?raw=true",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/src/assets/e.jpeg?raw=true",alt:"boy1"})}),Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"caroImg",src:"https://github.com/powerplantsnft/website/blob/main/src/assets/b.jpeg?raw=true",alt:"boy2"})})]})]})}}]),n}(s.a.Component)),we=n.p+"static/media/dicklogo.9f1ffd25.png",ve=(n(550),s.a.Component,n(551),n.p+"static/media/award.14ea6b22.JPG"),Te=n.p+"static/media/community.4baca058.JPG",_e=n.p+"static/media/diamont.3cec241c.JPG",Ne=n.p+"static/media/money.e63839ce.JPG",Ce=n.p+"static/media/paintbrush.7501d99d.JPG",ke=n.p+"static/media/tickets.4eac7c08.JPG",Me=n.p+"static/media/plant.fe24cbae.JPG";n(552),s.a.Component;n(553),n(554);var Se=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"state_card_layout",children:[Object(f.jsx)("p",{className:"state_card_title",children:this.props.title}),Object(f.jsx)("p",{className:"state_card_text",children:Object(f.jsx)("span",{className:"state_card_span",children:this.props.text})}),Object(f.jsx)("hr",{className:"state_card_bar"})]})}}]),n}(s.a.Component),Ae=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={data:[{title:"0.03 ETH",text:"Price"},{title:"5K",text:"Collection Size"},{title:"53",text:"Total Traits"},{title:"--",text:"Trees Planted"},{title:"--",text:"$USD Donated"}]},a}return Object(o.a)(n,[{key:"render",value:function(){return console.log(this.state.data),Object(f.jsxs)("div",{className:"state_layout",children:[Object(f.jsxs)("p",{className:"state_title",children:["Wednesday, Dec. 29, 2021, at 2PM EST ",Object(f.jsx)("br",{}),"DAYS UNTIL MINT"]}),Object(f.jsx)("img",{style:{marginBottom:50},src:"https://gen.sendtric.com/countdown/xzkekmnaue"}),Object(f.jsx)("div",{className:"state_cards",children:this.state.data.map((function(e){return Object(f.jsx)("div",{className:"state_card",children:Object(f.jsx)(Se,{title:e.title,text:e.text})})}))}),Object(f.jsx)("div",{className:"state_bg"})]})}}]),n}(s.a.Component),Ee=(n(555),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"footer_layout",children:Object(f.jsxs)("div",{className:"footer_section",children:[Object(f.jsx)("div",{className:"footer_text_room",children:Object(f.jsx)("p",{className:"footer_title",children:"PARTNERSHIPS"})}),Object(f.jsx)("div",{className:"footer_bg_1"})]})})}}]),n}(s.a.Component)),Ie=(n(556),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{style:{},className:"metaverse_layout",children:Object(f.jsxs)("div",{className:"metaverse_section",children:[Object(f.jsxs)("div",{className:"metaverse_left_bar",children:[Object(f.jsx)("p",{className:"metaverse_left_title",children:"The Metaverse."}),Object(f.jsx)("p",{className:"metaverse_left_title",children:"The next chapter."})]}),Object(f.jsxs)("div",{className:"metaverse_right_bar",children:[Object(f.jsxs)("p",{className:"metaverse_right_text",children:["GROWTH ",Object(f.jsx)("text",{style:{fontStyle:"italic"},children:"~noun "}),Object(f.jsx)("br",{}),"a stage or condition in increasing, developing, or maturing"]}),Object(f.jsx)("p",{className:"metaverse_right_text",children:"We weren't meant to stay here forever. The next chapter starts with us."})]})]})})}}]),n}(s.a.Component));n(557),n(558);var Pe=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(N,{}),Object(f.jsx)(Ae,{}),Object(f.jsx)(he,{}),Object(f.jsx)(fe,{}),Object(f.jsx)(ge,{}),Object(f.jsx)(B,{}),Object(f.jsx)(Ie,{}),Object(f.jsx)(k,{}),Object(f.jsx)(Ee,{}),Object(f.jsx)(F,{})]})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,570)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};n(559);c.a.render(Object(f.jsx)(q.a,{store:ue,children:Object(f.jsx)(Pe,{})}),document.getElementById("root")),Fe()}},[[560,1,2]]]);
//# sourceMappingURL=main.e52daaa8.chunk.js.map
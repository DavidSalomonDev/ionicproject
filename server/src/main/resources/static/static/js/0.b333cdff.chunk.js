(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{86:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(12),a=n(34),i=function(t,e,n,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=o.innerWidth,a=e/n,i=t.velocityX,u=n/2,s=i>=0&&(i>.2||t.deltaX>u),p=(s?1-a:a)*n,d=0;if(p>5){var h=p/Math.abs(i);d=Math.min(h,540)}c(s,a<=0?.01:Object(r.d)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=0.b333cdff.chunk.js.map
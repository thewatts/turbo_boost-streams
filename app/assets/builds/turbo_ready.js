function l(){let n=JSON.parse(this.templateContent.textContent),{id:h,selector:c,receiver:a,method:r,args:i}=n,t=[self];switch(c&&(t=Array.from(document.querySelectorAll(c))),a&&(t=t.map(o=>{let e=o,s=a.split(".");for(;s.length>0;)e=e[s.shift()];return e})),r){case"dispatchEvent":let o=new CustomEvent(i[0],i[1]||{});t.forEach(e=>e.dispatchEvent(o));break;default:t.forEach(e=>e[r].apply(e,i))}}function f(n){n.invoke=l}var p={initialize:f};export{p as default};
//# sourceMappingURL=turbo_ready.js.map

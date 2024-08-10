import{S as y,a as b,i as l}from"./assets/vendor-9d830b88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&a(g)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const L=document.querySelector(".gallery"),w=new y(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function p(o){const t=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              data-source="${e.largeImageURL}"
              alt="${e.tags}"
            />
            <ul class="gallery-info">
              <li>
                <strong>Likes</strong>
                <span>${e.likes}</span>
              </li>
              <li>
                <strong>Views</strong>
                <span>${e.views}</span>
              </li>
              <li>
                <strong>Comments</strong>
                <span>${e.comments}</span>
              </li>
              <li>
                <strong>Downloads</strong>
                <span>${e.downloads}</span>
              </li>
            </ul>
          </a>
        </li>
      `).join("");L.insertAdjacentHTML("beforeend",t),w.refresh()}async function h(o,t){return(await b.get("https://pixabay.com/api/",{params:{key:"45256893-9d571cd9ec15a1bc54f4c86f4",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}const v=document.querySelector(".form"),c=document.querySelector(".form-input"),d=document.querySelector(".form-btn"),S=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper"),n=document.getElementById("load-more-button");let f="",i=1;const m=15;v.addEventListener("submit",async o=>{o.preventDefault();const e=new FormData(o.target).get("search").trim();if(e.length>0&&e!==f){S.innerHTML="",u.classList.remove("hidden"),n.classList.add("hidden"),c.disabled=!0,d.disabled=!0,f=e,i=1;try{const a=await h(e,i);a.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(p(a.hits),a.hits.length===m&&n.classList.remove("hidden"))}catch(a){l.error({message:a.message,position:"topRight"})}u.classList.add("hidden"),c.disabled=!1,d.disabled=!1}});n.addEventListener("click",async()=>{u.classList.remove("hidden"),n.classList.add("hidden"),c.disabled=!0,d.disabled=!0;let o=!1;try{const t=await h(f,i+1),e=Math.ceil(t.totalHits/m);i=i+1,(t.hits.length<m||e<=i)&&(o=!0,l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),t.hits.length&&(p(t.hits),window.scrollBy({top:document.querySelector(".gallery-link").getBoundingClientRect().height*2,left:0,behavior:"smooth"}))}catch(t){l.error({message:t.message,position:"topRight"})}o||n.classList.remove("hidden"),u.classList.add("hidden"),c.disabled=!1,d.disabled=!1});
//# sourceMappingURL=commonHelpers.js.map

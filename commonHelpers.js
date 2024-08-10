import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m=document.querySelector(".gallery"),g=new f(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250});function p(a){const s=a.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              data-source="${t.largeImageURL}"
              alt="${t.tags}"
            />
            <ul class="gallery-info">
              <li>
                <strong>Likes</strong>
                <span>${t.likes}</span>
              </li>
              <li>
                <strong>Views</strong>
                <span>${t.views}</span>
              </li>
              <li>
                <strong>Comments</strong>
                <span>${t.comments}</span>
              </li>
              <li>
                <strong>Downloads</strong>
                <span>${t.downloads}</span>
              </li>
            </ul>
          </a>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",s),g.refresh()}function y(a){const s=new URLSearchParams({key:"45256893-9d571cd9ec15a1bc54f4c86f4",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return new Promise((t,o)=>{fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(t).catch(o)})}const h=document.querySelector(".form"),i=document.querySelector(".form-input"),c=document.querySelector(".form-btn"),L=document.querySelector(".gallery"),u=document.querySelector(".loader-wrapper");let d="";h.addEventListener("submit",a=>{a.preventDefault();const t=new FormData(a.target).get("search").trim();t.length>0&&t!==d&&(L.innerHTML="",u.classList.remove("hidden"),i.disabled=!0,c.disabled=!0,d=t,y(t).then(o=>{o.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):p(o.hits)}).catch(o=>{l.error({message:o.message,position:"topRight"})}).finally(()=>{u.classList.add("hidden"),i.disabled=!1,c.disabled=!1}))});
//# sourceMappingURL=commonHelpers.js.map

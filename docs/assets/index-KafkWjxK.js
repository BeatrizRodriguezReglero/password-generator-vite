(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ01234567890!@#$%^&*()_+-={}[]:;<>,.?/",l=document.getElementById("password"),a=document.getElementById("length-range"),u=document.getElementById("range"),m=document.getElementById("button-password");let d=a.value;const f=()=>{let n="";for(let r=0;r<d;r++){const o=h();n+=i[o]}return n},g=()=>{l.value=f()},p=n=>{d=n.target.value,a.textContent=d},h=()=>Math.floor(Math.random()*i.length);u.addEventListener("input",p);m.addEventListener("click",g);

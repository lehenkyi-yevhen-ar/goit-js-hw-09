import"./assets/styles-c70b2346.js";const a="feedback-form-state",n=document.querySelector(".feedback-form"),l=document.querySelector("input"),o=document.querySelector("textarea");let e={email:"",message:""};n.addEventListener("input",i);n.addEventListener("submit",u);c();function u(t){t.preventDefault(),l.value.trim()===""||o.value.trim()===""?alert("Fill please all fields"):(localStorage.removeItem(a),t.currentTarget.reset(),console.log(e))}function i(t){e={email:l.value.trim(),message:o.value.trim()};try{localStorage.setItem(a,JSON.stringify(e))}catch(r){console.log(r)}}function c(t){try{e=JSON.parse(localStorage.getItem(a))}catch(r){console.log(r);return}e!==null&&(l.value=e.email,o.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map

console.log(document);
console.log(window);
console.log(document.cookie);

alert('Xss攻击');

const title = document.createElement('h1');
title.innerHTML = '你被 Xss 攻击了, 这个攻击脚本插入的';
document.body.appendChild(title);

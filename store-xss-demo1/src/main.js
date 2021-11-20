const productsDom = document.getElementById('products');
const add = document.getElementById('add');

add.addEventListener('click', () => postProduct(prompt('输入商品名称')));

async function postProduct(name) {
  await fetch('http://localhost:8080/products', {
    method: 'post',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  alert('添加成功 - 记得刷新页面');
}

async function loadProducts() {
  const res = await fetch('http://localhost:8080/products');
  const products = await res.json();
  productsDom.innerHTML = products.map(item => `<li>${item}</li>`).join('');
}

loadProducts();

const categoriesEl = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesEl.length} категории`);

categoriesEl.forEach((el) => {
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(`Количество элементов: ${el.querySelectorAll("li").length}`);
});

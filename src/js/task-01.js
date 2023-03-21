const categoriesList = document.querySelectorAll(".item");

const numOfCategories = categoriesList.length;
console.log(`Number of categories: ${numOfCategories}\n\n`);

categoriesList.forEach((elem) => {
  console.log(
    `Category: ${elem.querySelector("h2").textContent} \nElements: ${elem.querySelectorAll("li").length}\n\n`
  );
});

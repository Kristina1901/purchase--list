const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { good }
  } = event.currentTarget;
    const form = document.querySelector(".order-list");
    const item = document.createElement("li");
    form.after(item)
    item.textContent = `${good.value}`
  

  console.log(`li: ${good.value}`);
  
}
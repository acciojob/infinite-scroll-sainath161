//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  const itemsPerPage = 10;

  // Function to add list items
  function addListItems(count) {
    for (let i = 0; i < count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${i + 1}`;
      infiList.appendChild(listItem);
    }
  }

  // Initial load with 10 items
  addListItems(itemsPerPage);

  // Function to check if the user has reached the end of the list
  function isAtEnd() {
    const scrollTop = infiList.scrollTop;
    const scrollHeight = infiList.scrollHeight;
    const clientHeight = infiList.clientHeight;
    return scrollTop + clientHeight >= scrollHeight;
  }

  // Event listener for scrolling
  infiList.addEventListener("scroll", function () {
    if (isAtEnd()) {
      // When user reaches the end, add 2 more items
      addListItems(2);
    }
  });
});

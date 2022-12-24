// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

window.onload = function () {
  //this will check everytime a resize happens
  window.onresize = function () {
    if (window.innerWidth < 768) {
      const titles = document.querySelectorAll(".table-head>tr>th");
      const rowElm = document.querySelector("#rowElm");
      const columnElm = document.querySelector("#column");
      if (columnElm !== null) {
        rowElm.removeChild(columnElm);
      }
      for (let i = 1; i < titles.length; i++) {
        const div = document.createElement("div");
        div.className = "col-12 col-sm-6 g-4";
        const cardElm = document.createElement("div");
        cardElm.classList.add("card");
        ///card header
        const cardHeaderElm = document.createElement("div");
        cardHeaderElm.classList = "card-header bg-transparent";
        cardHeaderElm.innerHTML = titles[i].innerHTML;
        const pElm = document.createElement("p");
        pElm.className = "text-primary fw-bold";
        pElm.textContent =
          "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
        cardHeaderElm.appendChild(pElm);
        ///card body
        const cardBodyElm = document.createElement("div");
        cardBodyElm.classList.add("card-body");
        const cardTextElm = document.createElement("p");
        cardTextElm.textContent = "Lorem ipsum is placeholder text:";
        cardTextElm.className = "card-text";
        cardBodyElm.appendChild(cardTextElm);
        ///list
        const list = document.createElement("ul");
        list.className = "list-unstyled";
        for (let i = 0; i < 5; i++) {
          const listItem = document.createElement("li");
          const listItemIcon = document.createElement("span");
          listItemIcon.className =
            "title-icon d-inline-flex justify-content-center align-items-center rounded-circle text-primary mb-2";
          const iElm = document.createElement("i");
          iElm.className = "bi bi-check-lg text-primary";
          listItemIcon.appendChild(iElm);
          const spanElm = document.createElement("span");
          spanElm.textContent = " Unlimited Vendors ";
          listItem.appendChild(listItemIcon);
          listItem.appendChild(spanElm);
          list.appendChild(listItem);
        }
        cardBodyElm.appendChild(list);
        cardElm.appendChild(cardHeaderElm);
        cardElm.appendChild(cardBodyElm);
        div.appendChild(cardElm);
        rowElm.appendChild(div);
      }
      //change to existing element:
      const cardTitles = document.querySelectorAll(".title-icon1");
      for (let i = 0; i < cardTitles.length; i++) {
        cardTitles[i].classList.remove("mx-auto");
      }

      const titleLinks = document.querySelectorAll(".title-link");
      for (let i = 0; i < titleLinks.length; i++) {
        const h3Elm = document.createElement("h3");
        h3Elm.innerText = titleLinks[i].textContent;
        titleLinks[i].replaceWith(h3Elm);
      }
    }
  };
};

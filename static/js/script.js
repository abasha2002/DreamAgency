document.addEventListener('DOMContentLoaded', () => {

  const headerLinks = document.getElementById("myNav");
  const links = headerLinks.getElementsByClassName("links");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    })
  }



  function animation() {
    const marqueeAnim = document.querySelector(".animation-wrapper");
    const innerContentAnim = Array.from(marqueeAnim.children);

    innerContentAnim.forEach(item => {
      const duplicateAnim = item.cloneNode(true);
      duplicateAnim.setAttribute("aria-hidden", true);
      marqueeAnim.appendChild(duplicateAnim);
    });
  }

  function animation2() {
    const marqueeAnim2 = document.querySelector(".animation2-wrapper");
    const innerContentAnim2 = Array.from(marqueeAnim2.children);

    innerContentAnim2.forEach(item => {
      const duplicateAnim = item.cloneNode(true);
      duplicateAnim.setAttribute("aria-hidden", true);
      marqueeAnim2.appendChild(duplicateAnim);
    });
  }

  animation();
  animation2();
});
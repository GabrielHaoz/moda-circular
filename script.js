document.addEventListener("DOMContentLoaded", () => {
   // Sidebar toggle functionality
   const menuToggle = document.getElementById("menu-toggle");
   const sidebar = document.getElementById("sidebar");

   if (menuToggle && sidebar) {
      menuToggle.addEventListener("click", () => {
         sidebar.classList.toggle("collapsed");
      });
   }

   // WhatsApp order button functionality
   const orderButtons = document.querySelectorAll(".order-btn");

   orderButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
         event.preventDefault();
         const productEl = event.target.closest(".product");
         const model = productEl.getAttribute("data-model");
         const price = productEl.querySelector(".product-price").textContent;
         const message = `Olá, gostaria de comprar o modelo ${model}, ${price}. Poderia me dar mais informações?`;
         const phoneNumber = "5541998810876";
         const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
            message
         )}`;
         window.open(url, "_blank");
      });
   });

   // Back to top button functionality
   const backToTopButton = document.getElementById("back-to-top");

   if (backToTopButton) {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 300) {
            backToTopButton.classList.add("active");
         } else {
            backToTopButton.classList.remove("active");
         }
      });

      backToTopButton.addEventListener("click", (event) => {
         event.preventDefault();
         window.scrollTo({ top: 0, behavior: "smooth" });
      });
   }

   // Add smooth scrolling to all anchor links
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
         // Only apply smooth scrolling for links to sections on the current page
         const targetId = this.getAttribute("href");
         if (targetId !== "#" && targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
               targetElement.scrollIntoView({
                  behavior: "smooth",
               });
            }
         }
      });
   });
});

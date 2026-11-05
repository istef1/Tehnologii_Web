"use strict";
const columns = document.querySelectorAll(".column");
columns.forEach((column, index) => {
    column.animate([
        { opacity: 0, transform: "translateY(40px)" },
        { opacity: 1, transform: "translateY(0)" },
    ], {
        duration: 700,
        delay: index * 200,
        easing: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        fill: "backwards", // sta ascunsa pana ii vine randul
    });
});

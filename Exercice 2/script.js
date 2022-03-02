const paragraphs = document.querySelectorAll("p");

const toggleBackground = () => {
    paragraphs.forEach((el) => el.addEventListener("click", () => {
        el.classList.toggle("colored");
    }))
};
window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
});
const changeFont = () => {
    let selectedFont = document.getElementById("font").value;
    paragraphs.forEach(
        (p) => {
            p.style.fontFamily = selectedFont;
        }
    )
};
const changeTextFont = () => {
    let inputFontSize = document.getElementById("taille").value;
    paragraphs.forEach((p) => {
        p.style.fontSize = inputFontSize + "px";
    })
};
const alignmentCheckbox = document.querySelectorAll('input[name="alignment"]');
alignmentCheckbox.forEach(
    (el) => {
        el.addEventListener("click", () => {
            paragraphs.forEach((p) => {
                p.style.textAlign = el.id;
            })
        })
    }
);
 
const changeColor = () => {
    let inputColor = document.getElementById("color").value;
    paragraphs.forEach( (p) => {
        p.style.color = inputColor;
    });
};




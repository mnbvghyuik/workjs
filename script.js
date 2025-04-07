function upDate(previewPic) {
    console.log("Навели на:", previewPic.alt);
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Наведите курсор на картинку ниже, чтобы увидеть её здесь.";
}
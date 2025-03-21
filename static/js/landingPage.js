const year = new Date().getFullYear();
document.querySelector(".copy").innerHTML = `&copy; ${year}-RMBG`;

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

const dropZone = document.querySelector("#dropZone");
const fileInput = document.querySelector("#fileInput");
const form = document.querySelector("form");

fileInput.addEventListener("change", (e) => {
  e.preventDefault();
  if (fileInput.files.length) {
    form.submit();
  }
});

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault(); // Necessary to allow drop
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", function (e) {
  this.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover"); 

  const file = e.dataTransfer.files[0];
  fileInput.files = e.dataTransfer.files;
  form.submit();
});

function handleSubmit(simple) {
  if (simple) {
    return form.submit();
  }
}

function downloadImage() {
  const img = document.querySelector(".preview");
  const base64Data = img.src.split(",")[1];

  const blob = b64toBlob(base64Data, "image/png");

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "RMBG_.PNG";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

function b64toBlob(b64Data, contentType, sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

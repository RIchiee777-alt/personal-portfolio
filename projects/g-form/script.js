const buktiInput = document.getElementById('bukti');
const previewContainer = document.getElementById('preview-container');

buktiInput.addEventListener('change', function() {
    const file = buktiInput.files[0];
    const url = URL.createObjectURL(file);
    const img = document.createElement('img');
    img.src = url;
    previewContainer.innerHTML = '';
    previewContainer.appendChild(img);
});
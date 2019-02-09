$('#imageSelector').change(() => {
  const reader = new FileReader();

  reader.onload = () => {
    const dataUrl = reader.result;

    $('#selectedImage').attr('src', dataUrl);
    $('#predictionList').empty();
  }

  const file = $('#imageSelector').prop('files')[0];
  reader.readAsDataURL(file);
})

let model;

(async () => {
  model = await tf.loadModel('http://localhost:3000/models/VGG16/model.json')
})()

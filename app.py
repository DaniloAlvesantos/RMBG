from flask import Flask, render_template, request, send_file
from rembg import remove
from PIL import Image
from io import BytesIO
from base64 import b64encode

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def upload_file(urlImage = None):
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file part', 400
        file = request.files['file']
        if file.filename == '':
            return 'No selected file', 400
        
        if file:
            input_image = Image.open(file.stream)
            output_image = remove(input_image)
            image_io = BytesIO()
            output_image.save(image_io, format='PNG')
            image_io.seek(0)
            image_bytes = image_io.getvalue()
            base64_string = b64encode(image_bytes).decode('utf-8')
            urlImage = base64_string

            # return send_file(image_io, mimetype='image/png', as_attachment=True, download_name="RMBG_.PNG")
            
    return render_template('landingPage.html', urlImage=urlImage)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5100)
# Background Removal Service

This project provides a simple web service to remove the background from images. It allows users to upload an image, preview it, and then submit it for background removal. After the image is processed, the service returns the image with the background removed.

## Features

- **Image Upload**: Allows users to upload images for background removal.
- **Image Preview**: Displays a preview of the uploaded image before submission.
- **Background Removal**: Uses the `rembg` library to remove the background from images.
- **Image Download**: After processing, users can download the image with the background removed.

## Technologies Used

- **Flask**: Python web framework to build the backend.
- **rembg**: Library for background removal.
- **Pillow (PIL)**: Python Imaging Library for handling image operations.
- **JavaScript (HTML5)**: To handle file preview and asynchronous image processing.

## Installation

To set up and run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/background-removal-service.git
cd background-removal-service

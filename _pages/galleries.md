---
layout: page
title: Galleries
permalink: /galleries/
---

<div class="galleries-intro">
  <p>A collection of photos and visual content organized by theme. Click on any gallery to explore the full collection.</p>
</div>

<div class="gallery-container">
{% for gallery in site.galleries %}
  <div class="gallery-item">
    <a href="{{ gallery.url | relative_url }}" class="gallery-link">
      <div class="gallery-image-container">
        {% assign preview_image = gallery.preview_image | default: gallery.Preview_Image %}
        {% if preview_image %}
          {% assign image_file = site.static_files | where_exp: "file", "file.path contains preview_image" | first %}
          {% unless image_file %}
            {% assign image_file = site.static_files | where_exp: "file", "file.path contains preview_image and file.extname == '.JPG'" | first %}
          {% endunless %}
          {% unless image_file %}
            {% assign image_file = site.static_files | where_exp: "file", "file.path contains preview_image and file.extname == '.jpg'" | first %}
          {% endunless %}
          {% if image_file %}
            <img src="{{ image_file.path | relative_url }}" alt="{{ gallery.title }}">
          {% else %}
            {% assign gallery_images = site.static_files | where_exp: "file", "file.path contains gallery.gallery_path" %}
            {% if gallery_images.size > 0 %}
              <img src="{{ gallery_images.first.path | relative_url }}" alt="{{ gallery.title }}">
            {% else %}
              <div class="no-image-placeholder">
                <div class="placeholder-icon">◇</div>
                <div class="placeholder-text">No Images Found</div>
              </div>
            {% endif %}
          {% endif %}
        {% else %}
          {% assign gallery_images = site.static_files | where_exp: "file", "file.path contains gallery.gallery_path" %}
          {% if gallery_images.size > 0 %}
            <img src="{{ gallery_images.first.path | relative_url }}" alt="{{ gallery.title }}">
          {% else %}
            <div class="no-image-placeholder">
              <div class="placeholder-icon">◇</div>
              <div class="placeholder-text">No Images Found</div>
            </div>
          {% endif %}
        {% endif %}
        <div class="gallery-overlay">
          <div class="gallery-title">{{ gallery.title }}</div>
          {% if gallery.description %}
            <div class="gallery-description">{{ gallery.description }}</div>
          {% endif %}
        </div>
      </div>
    </a>
  </div>
{% endfor %}
</div>

<style>
  .galleries-intro {
    text-align: center;
    margin-bottom: 40px;
    padding: 25px;
    background: rgba(63, 81, 181, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(63, 81, 181, 0.1);
  }

  .galleries-intro p {
    margin: 0 !important;
    font-size: 1.1em;
    color: #5a6c7d;
    font-style: italic;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
  }

  .gallery-item {
    transition: transform 0.3s ease;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
  }

  .gallery-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .gallery-image-container {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(63, 81, 181, 0.1);
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.9);
  }

  .gallery-image-container:hover {
    box-shadow: 0 8px 30px rgba(63, 81, 181, 0.2);
  }

  .gallery-image-container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-image-container:hover img {
    transform: scale(1.05);
  }

  .no-image-placeholder {
    width: 100%;
    height: 300px;
    background: linear-gradient(135deg, #f8fafe 0%, #f0f4ff 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #5a6c7d;
  }

  .placeholder-icon {
    font-size: 3em;
    margin-bottom: 10px;
    opacity: 0.6;
  }

  .placeholder-text {
    font-size: 1.1em;
    font-weight: 500;
  }

  .gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 30px 20px 20px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .gallery-image-container:hover .gallery-overlay {
    transform: translateY(0);
  }

  .gallery-title {
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }

  .gallery-description {
    font-size: 0.95em;
    opacity: 0.9;
    line-height: 1.4;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .gallery-container {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .galleries-intro {
      padding: 20px 15px;
    }

    .gallery-image-container img {
      height: 250px;
    }

    .no-image-placeholder {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    .gallery-container {
      gap: 20px;
    }

    .gallery-image-container img {
      height: 200px;
    }

    .no-image-placeholder {
      height: 200px;
    }

    .placeholder-icon {
      font-size: 2.5em;
    }

    .gallery-overlay {
      padding: 20px 15px 15px;
    }

    .gallery-title {
      font-size: 1.1em;
    }

    .gallery-description {
      font-size: 0.9em;
    }
  }
</style>
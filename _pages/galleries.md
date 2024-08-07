---
layout: page
title: Galleries
permalink: /galleries/
---

<style>
.gallery-container {
  display: flex;
  flex-wrap: wrap;
}
.gallery-item {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
}
.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.gallery-item-title {
  text-align: center;
  font-size: 1.2em;
  margin-top: 10px;
}
.debug-info {
  background-color: #f0f0f0;
  padding: 10px;
  margin-top: 10px;
  font-size: 0.8em;
}
</style>

<div class="gallery-container">
{% for gallery in site.galleries %}
  <div class="gallery-item">
    <a href="{{ gallery.url | relative_url }}">
      {% if gallery.preview_image %}
        <img src="{{ gallery.preview_image | relative_url }}" alt="{{ gallery.title }}">
      {% else %}
        {% assign image_files = site.static_files | where_exp: "file", "file.path contains gallery.gallery_path" %}
        {% if image_files.size > 0 %}
          {% assign first_image = image_files | first %}
          <img src="{{ first_image.path | relative_url }}" alt="{{ gallery.title }}">
        {% else %}
          <div style="width: 100%; height: 300px; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">No Image</div>
        {% endif %}
      {% endif %}
      <div class="gallery-item-title">{{ gallery.title }}</div>
    </a>
    <div class="debug-info">
      <p>Preview Image: {{ gallery.preview_image }}</p>
      <p>Gallery Path: {{ gallery.gallery_path }}</p>
      <p>Number of images: {{ image_files.size }}</p>
      {% if image_files.size > 0 %}
        <p>First image: {{ first_image.path }}</p>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
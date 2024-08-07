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
      {% assign preview_image = gallery.preview_image | default: gallery.Preview_Image %}
      {% if preview_image %}
        {% assign image_file = site.static_files | where: "path", preview_image | first %}
        {% unless image_file %}
          {% assign image_file = site.static_files | where: "path", preview_image | append: ".JPG" | first %}
        {% endunless %}
        {% if image_file %}
          <img src="{{ image_file.path | relative_url }}" alt="{{ gallery.title }}">
        {% else %}
          <div style="width: 100%; height: 300px; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">Preview Image Not Found</div>
        {% endif %}
      {% else %}
        {% assign image_files = site.static_files | where_exp: "file", "file.path contains gallery.gallery_path" %}
        {% if image_files.size > 0 %}
          {% assign first_image = image_files | first %}
          <img src="{{ first_image.path | relative_url }}" alt="{{ gallery.title }}">
        {% else %}
          <div style="width: 100%; height: 300px; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center;">No Images Found</div>
        {% endif %}
      {% endif %}
      <div class="gallery-item-title">{{ gallery.title }}</div>
    </a>
    <div class="debug-info">
      <p>Gallery Title: {{ gallery.title }}</p>
      <p>Preview Image: {{ preview_image }}</p>
      <p>Image File Found: {{ image_file.path | default: 'None' }}</p>
      <p>Gallery Path: {{ gallery.gallery_path }}</p>
      <p>Number of images in gallery: {{ image_files.size }}</p>
      {% if image_files.size > 0 %}
        <p>First image in gallery: {{ image_files.first.path }}</p>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>
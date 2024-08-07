---
layout: page
title: Galleries
permalink: /galleries/
---

<h2>All Static Files:</h2>
<ul>
{% for file in site.static_files %}
  <li>{{ file.path }}</li>
{% endfor %}
</ul>

<h2>Galleries:</h2>
<div class="gallery-container">
{% for gallery in site.galleries %}
  <div class="gallery-item">
    <h3>{{ gallery.title }}</h3>
    <p>Preview Image: {{ gallery.preview_image }}</p>
    <p>Gallery Path: {{ gallery.gallery_path }}</p>
    {% assign image_files = site.static_files | where_exp: "file", "file.path contains gallery.gallery_path" %}
    <p>Number of images: {{ image_files.size }}</p>
    {% if image_files.size > 0 %}
      <p>First image: {{ image_files.first.path }}</p>
      <img src="{{ image_files.first.path | relative_url }}" alt="First image" style="max-width: 300px;">
    {% endif %}
  </div>
{% endfor %}
</div>
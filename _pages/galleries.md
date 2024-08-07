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
  max-width: 100%;
  height: auto;
}
.gallery-item-title {
  text-align: center;
  font-size: 1.2em;
  margin-top: 10px;
}
</style>

<div class="gallery-container">
{% for gallery in site.galleries %}
  <div class="gallery-item">
    <a href="{{ gallery.url | relative_url }}">
      <img src="{{ gallery.image }}" alt="{{ gallery.title }}">
      <div class="gallery-item-title">{{ gallery.title }}</div>
    </a>
  </div>
{% endfor %}
</div>

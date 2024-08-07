---
layout: page
title: Galleries
permalink: /galleries/
---

Here are my photo galleries:

{% for gallery in site.galleries %}
  * [{{ gallery.title }}]({{ gallery.url | relative_url }})
{% endfor %}
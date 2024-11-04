+++
authors = ["Maxime Letemple"]
title = "Polaroid film"
date = 2024-11-03
description = "Polaroid style poster generator "
[taxonomies]
tags = ["Python"]
+++
Polaroid film is a python tool used to store a database of movies. The following items can be stored:

* Title
* Year of production
* Director
* Format (Film, series of animated film)
* Actors
* Personal rating
* Duration

A document can be generated with Polaroid style poster. The document can be customized and uses the Pillow library.

## Example
The default output is an 8.5 cm * 12.0 cm Polaroid, arranged in a PDF document with 4 Polaroids per page.

{{ image(url="example_output.png", alt="Example output", no_hover=true) }}


More infos
===

The code can be found on the [github repository](https://github.com/maxletemple/polaroid_film).
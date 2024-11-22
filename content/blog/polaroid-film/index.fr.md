+++
authors = ["Maxime Letemple"]
title = "Film Polaroid"
date = 2024-11-03
description = "Générateur d'affiches style Polaroid"
[taxonomies]
tags = ["python"]
+++
Polaroid Film est un outil python utilisé pour stocker une base de données de films. Les éléments suivants peuvent être stockés :

* Titre
* Année de production
* Réalisateur
* Format (Film, série ou film d'animation)
* Acteurs
* Note personnelle
* Durée

Un document peut être généré avec une affiche style Polaroid. Le document peut être personnalisé et utilise la bibliothèque Pillow.

## Exemple
La sortie par défaut est un Polaroid de 8,5 cm * 12,0 cm, arrangé dans un document PDF avec 4 Polaroids par page.

{{ image(url="example_output.png", alt="Exemple de sortie", no_hover=true) }}

Plus d'infos
===

Le code peut être trouvé sur le [dépôt github](https://github.com/maxletemple/polaroid_film).

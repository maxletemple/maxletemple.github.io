+++
authors = ["Maxime Letemple"]
title = "Minitel #1"
date = 2025-02-18
description = "Transformation d'un Minitel en un serveur central avec une interface moderne"
[taxonomies]
tags = ["électronique analogique", "systèmes embarqués", "Minitel"]
[extra]
featured = true
banner = "mitterand.gif"
+++

# Présentation

Le Minitel est un terminal informatique développé en France dans les années 1980, permettant l'accès à divers services en ligne avant l'avènement d'Internet. Il est devenu un objet mythique de son époque, s'invitant dans beaucoup de foyers français et leur donnant accès à un nombre important de services indispensables, comme le Minitel rose. Le réseau Télétel a été fermé en 2012, rendant quasiment inutilisables les Minitels. On peut donc en trouver pour quelques euros dans les brocantes.

L'objectif de ce projet est de remettre au goût du jour le Minitel en utilisant l'écran cathodique de celui-ci avec la sortie composite d'une Raspberry Pi 5. On installera [Home Assistant](https://www.home-assistant.io/), qui est à la fois un système d'exploitation et un serveur central très utilisé dans le monde de la domotique.

# Premiers pas avec le Minitel

Le Minitel est composé de deux cartes:
* La carte vidéo, qui se charge également de l'alimentation
* La carte mère, qui communique avec le réseau Télétel et envoie le signal vidéo à l'autre carte

<figure>
{{ image(url="minitel2.jpeg", no_hover=true) }}
<figcaption>Minitel avec le capot ouvert, on distingue les deux cartes.</figcaption>
</figure>

Seule la carte vidéo sera utile ici. La carte mère sera donc enlevée et remplacée par une Raspberry Pi 5 et une carte convertissant le signal composite en un signal spécifique à l'écran cathodique. Pour l'affichage, deux signaux sont envoyés à la carte vidéo: un signal de synchronisation et un signal de donnée. Je rentrerai dans les détails dans un post dédié, mais le signal composite devra être décomposé et modifié, d'où la nécessité d'une carte de conversion vidéo.

# Avancement:

- [ ] Utilisation de l'écran cathodique du Minitel
    - [ ] Validation de la sortie composite de la Raspberry Pi
    - [ ] Conversion du signal composite en un signal compréhensible par le Minitel
- [ ] Installation du système d'exploitation sur la Rasberry Pi
    - [ ] Installation de Home Assistant
    - [ ] Installation d'un gestionnaire de fenêtres et mise en place de la routine de démarrage
- [ ] Développement des applications
    - [ ] Ajout d'un agent intelligent basé sur un LLM, capable d'intéragir avec les fonctions domotiques de Home Assistant
    - [ ] Création d'une interface pour l'affichage
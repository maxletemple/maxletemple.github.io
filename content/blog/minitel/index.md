+++
authors = ["Maxime Letemple"]
title = "Minitel"
date = 2026-05-02
description = "Transformation d'un Minitel en moniteur connecté"
[taxonomies]
tags = ["électronique analogique", "systèmes embarqués"]
[extra]
featured = true
+++

# Présentation

Le Minitel est un terminal informatique développé en France dans les années 1980, permettant l'accès à divers services en ligne avant l'avènement d'Internet. Il est devenu un objet mythique de son époque, s'invitant dans beaucoup de foyers français et leur donnant accès à un nombre important de services indispensables. Le réseau Télétel a été fermé en 2012, rendant quasiment inutilisables les Minitels. On peut donc en trouver pour quelques euros dans les brocantes.

L'objectif de ce projet est de remettre au goût du jour le Minitel en utilisant l'écran cathodique de celui-ci avec la sortie composite d'une Raspberry Pi. Un serveur d'affichage est également intégré, qui permet la création et la modification de fenêtres à distance.

# Premiers pas avec le Minitel

Le Minitel est composé de deux cartes:
* La carte vidéo, qui se charge également de l'alimentation
* La carte mère, qui communique avec le réseau Télétel et envoie le signal vidéo à l'autre carte

<figure>
{{ image(url="minitel2.jpeg", no_hover=true) }}
<figcaption>Minitel avec le capot ouvert, on distingue les deux cartes.</figcaption>
</figure>

Seule la carte vidéo sera utile ici. La carte mère sera donc enlevée et remplacée par une Raspberry Pi Zero et une carte convertissant le signal composite en un signal spécifique à l'écran cathodique. Pour l'affichage, deux signaux sont envoyés à la carte vidéo: un signal de synchronisation et un signal de donnée.

# Structure du projet

Le projet se divise en deux parties. Dans un premier temps, il est nécessaire de caractériser le signal vidéo à envoyer au Minitel. Le signal composite sortant de la Raspberry est décomposé et modifié, d'où la nécessité d'une carte de conversion vidéo. Dans un second temps, il faut développer une application capable de gérer l'affichage, et ce avec les capacités limitées du Raspberry Pi Zero. Toute la partie logiciel de ce projet est abordée dans un autre post.

# Carte vidéo

Le Minitel prend en entrée un signal similaire au format PAL (25 images par seconde et progressif), ainsi qu'un signal de synchronisation. L'image progressive implique l'utilisation d'un Raspberry Pi Zero 1 avec l'OS legacy, malheureusement les cartes plus récentes ne prennent en charge que le PAL entrelaçé, qui est un format beaucoup plus répandu. 

## Signal vidéo

Par rapport au signal PAL, le signal vidéo attendu par le minitel est inversé (blanc -> noir et noir -> blanc). De plus, le minitel attend un signal entre 0 V et 5 V, on applique un gain d'environ 3. Pour inverser et amplifier ce signal, on choisit un montage de NPN en émetteur commun, suivi d'un collecteur commun pour diminuer l'impédance et augmenter le courant de sortie.

<figure>
{{ image(url="video_schema.png", no_hover=true) }}
<figcaption>Schéma de l'étage d'amplification du signal vidéo.</figcaption>
</figure>

## Signal de synchronisation

Récupérer la synchronisation d'un signal vidéo est un montage assez courant. Pour ce faire, on utilise un circuit intégré, le LM1881. Il est capable de sortir d'autres signaux, notamment sur la parité du signal (utile pour les signaux entrelaçés). Les signaux logiques sont sur 5V, soit ce qu'il faut pour le Minitel.

<figure>
{{ image(url="sync_schema.png", no_hover=true) }}
<figcaption>Schéma de l'extraction de la synchronisation du signal vidéo.</figcaption>
</figure>

## Contrôle de l'alimentation du Minitel

Pour pouvoir contrôler directement l'allumage du minitel, on utilise un relais piloté par une GPIO de la Raspberry.

<figure>
{{ image(url="relais_schema.png", no_hover=true) }}
<figcaption>Schéma du relais contrôlé par la Raspberry.</figcaption>
</figure>

+++
authors = ["Maxime Letemple"]
title = "Porting a network measurement infrastructure on an unikernel"
date = 2023-09-10
description = "Second year internship at University of Liège"
[taxonomies]
tags = ["internships"]
+++

The main objective of this internship was the porting of a network measurement infrastructure on an unikernel, named [Scamper](https://www.caida.org/catalog/software/scamper/). A unikernel is a specialized, lightweight, single-purpose virtual machine that combines an application and the minimal set of operating system (OS) components required to run it. Unlike traditional operating systems, which are designed to support multiple applications and users, a unikernel is designed to run a single application, including only the necessary parts of the OS as part of its build. The unikernel used here is [Unikraft](https://unikraft.org/).

<figure>
{{ image(url="unikernel_vs_vm.png", alt="Comparizon between unikernels and VMs") }}
<figcaption>Comparizon between unikernels and VMs</figcaption>
</figure>

Results
===

Compared to traditional solutions like virtual machines and Docker containers, uTNT demonstrated significantly better performance. This internship showcased the potential of unikernels as a platform for high-performance and lightweight network measurement applications.
<figure>
{{ image(url="ram_unikernel.png", alt="RAM usage of my work compared to Debian on a VM") }}
<figcaption>RAM usage of my work compared to Debian on a VM</figcaption>
</figure>

More infos
===

You can find the repo [here](https://github.com/maxletemple/uTNT), and my report [here](rapport.pdf)(in french).
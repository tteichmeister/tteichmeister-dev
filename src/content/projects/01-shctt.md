---
id: 1
slug: "shctt"
title: "SHCTT - Supporting Hybrid Collaboration for the Teams of Tomorrow"
description: "<placeholder description>"
fromDate: "August 2020"
toDate: "August 2021"
location: "Hagenberg im Mühlkreis, AUT"
employer: "Personalized Environments and Collaborative Systems (PEEC)"
projectLink: "https://peec.fh-hagenberg.at/projects/projectdetail/4?cHash=fdba6c8ebe4dab66737f1e65d6aee185"
tags:
  [
    "C#",
    "Python",
    "WPF",
    "Microsoft Cognitive Services",
    "Google Cloud",
    "GitHub",
    "Microsoft Project Tokyo",
    "Docker",
  ]
---

## Table of Contents

## How

While working on my Master's thesis at the University of Applied Sciences Upper Austria, I came across the advertisement for collaboration on this research project. The research project was conducted in cooperation with Microsoft Research Cambridge and deals with the analysis of collaboration processes.

The task sounded challenging and exciting, which is why I then applied for the research project. After my master's degree ended in July 2020, I started working on the research project directly in August 2020. I was employed for 20 hours on the project, which meant that I could do this in parallel with my existing work at [Allplan Software Engineering GmbH](https://www.allplan.com/at/loesungen/herstellung-von-fertigteilen).

## Aim

It was investigated whether the analysis of these processes can be automated or partially automated. The reason for this is the enormous amount of resources required for the manual analysis of these processes. Mainly image and video materials are used for the analysis.

Together with my colleagues I not only created a prototype for the analysis but also investigated how the different types of collaborations can differ. Subsequently, the information can be used to generate recommendations for action for collaboration between teams.

The big challenge is to be able to recognize these automatically.

## The prototype

Various technologies were used for the implementation of the prototype. For the development of the prototype mainly C# and Python were used as programming languages. The implementation of a user interface was created with the help of WPF, with which the user can carry out the analysis, but also verify the analyzed results or change them.

For the analysis of the video data the framework PSI (Platform for Situated Intelligence) from Microsoft was used, which was mainly used to process the image and audio data of the video materials.

For the actual analysis of the data, various Microsoft Cognitive Services and also Google Cloud Services were then used. In addition, other frameworks such as [Dlib](http://dlib.net/), [Microsoft Project Tokyo](https://www.microsoft.com/en-us/research/project/project-tokyo/) were used.

## Results

Through the research project, a prototype for automated or semi-automated analysis of video materials was developed. In addition, a scientific [paper](https://www.microsoft.com/en-us/research/publication/semi-automated-analysis-of-collaborative-interaction-are-we-there-yet/) was prepared and finally published in December 2022.

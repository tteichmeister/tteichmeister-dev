---
id: 2
type: "project"
slug: "carreer-advisory-system"
title: "Career Advisory System"
description: "My second research project with the PEEC group, conducted part-time alongside my role at Allplan. I contributed as a software developer, designing and implementing a prototype to improve karriere.at’s recommendation system by adapting job suggestions to users’ evolving interests."
start: "September 2021"
end: "Juli 2022"
location: "Hagenberg im Mühlkreis, AUT"
link:
  title: "Personalized Environments and Collaborative Systems (PEEC)"
  url: "https://peec.fh-hagenberg.at/projects/projectdetail/23?cHash=640fb64dd04f9dc45ccb6f493be5d014"
tags:
  [
    "Python",
    "FastAPI",
    "Spacy",
    "GPT-3",
    "MySQL",
    "Redis",
    "Elasticsearch",
    "Neo4j",
    "GitLab",
    "Docker",
  ]
lastModified: 2025-09-18
---

## Table of Contents

## Summary

This was the second research project I carried out with the [PEEC research group](https://peec.fh-hagenberg.at/). Alongside my full-time position at [Allplan Österreich GmbH](https://www.allplan.com/at/loesungen/herstellung-von-fertigteilen), I contributed 10 hours per week as a software developer, focusing on enhancing the recruiting platform of [karriere.at](https://www.karriere.at/). The project’s main goal was to improve the recommendation system that suggests jobs to users based on their interests by exploring new approaches that adapt dynamically to each user’s evolving profile.

## How I joined the project

Shortly before completing the previous project, the research group invited me to participate in another collaboration. The topic immediately appealed to me, not least because karriere.at is a well-known platform in Austria that I had already used myself. At the time, I had resumed full-time work at Allplan, so I contributed on a part-time basis of 10 hours per week as a software developer.

## Challenges

Efficiently matching candidates to roles is a common but complex challenge: users expect highly relevant suggestions with minimal onboarding and without extensive manual input. Our task was to improve recommendations by accounting for evolving user interests over time while maintaining strict privacy standards. In addition, the large volume of data involved made processing and modeling even more demanding.

## Project work

To tackle this, we designed a time-aware candidate profile that captured changes in user interests and served as the foundation for adaptive job suggestions.

The prototype was implemented primarily in Python, integrating various frameworks, services, and multiple data sources to evaluate different modeling strategies.
For the first time in our research, we also experimented with [GPT-3](https://platform.openai.com/docs/models), using it for information extraction from both structured and unstructured data. It was also particularly interesting to experiment with diverse data sources such as [Neo4j](https://neo4j.com/) and [ElasticSearch](https://www.elastic.co/de/elasticsearch), which allowed us to explore alternative ways of storing and querying user and job data.

By the end of the project, we were able to present several promising options to enhance the existing recommendation system of karriere.at.

## Additional Links

- [PEEC - Career Advisory System](https://peec.fh-hagenberg.at/projects/projectdetail/23?cHash=640fb64dd04f9dc45ccb6f493be5d014)
- [karriere.at](https://www.karriere.at/)
- [GPT-3](https://platform.openai.com/docs/models)
- [spaCy](https://spacy.io/)

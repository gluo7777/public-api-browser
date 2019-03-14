# Public API Browser
## People
- William Luo - Developer

## Overview
A UI that calls a REST API to retrieve a list of public REST APIs and displays it. The UI should be simple with minimal clutter. It will have options like filtering, type-ahead search, and some other options to customize what is displayed.

## Context
- Need quick way to discover REST APIs to build a network layer while playing around with front end frameworks
- Reduce duplicating existing work by reusing available resources
- Easier to use UI than REST client or ctrl+f
- Accessible in places without these tools

## Goals
- Able to search for APIs by typing in keywords that will match parts of name, description, etc.
- Able to filter using widgets
- Results should appear as user is typing
- Clicking on a result will bring up more information
- Option to display information for all results

## Non-Goals
- No persistence
- No authentication
- Minimal server logic beyond serving static content
- Scope limited to what's offered by REST API

## Milestones
- [ ] Create UI wireframe
- [ ] Create Program/Network Flow
- [ ] Choose Frameworks
- [ ] Code skeleton UI
- [ ] Code network layer
- [ ] Write unit tests
- [ ] Set up CI
- [ ] Set up CD
- [ ] Production

## WireFrame
<img src="https://docs.google.com/drawings/d/e/2PACX-1vRUrmkf0Xs3d-mesqEAHPwNREintxhIvu30wLNJe4S7OfdYmYo7yhnSU7dWQDoGpHUNLBBf4KutVOyq/pub?w=480&amp;h=360">
Source:https://docs.google.com/drawings/d/1tPg_5fyUDjunqm5S27NR13cp9JENqZ7K3fHZyXL9Plc/edit?usp=sharing

## Tools
https://docs.google.com/drawings
## Resources
https://medium.freecodecamp.org/how-to-write-a-good-software-design-document-66fcf019569c
https://github.com/davemachado/public-api
https://api.publicapis.org/
https://reactjs.org/docs/test-utils.html
https://getbootstrap.com/docs/4.0/components/forms/
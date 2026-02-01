# Board Game Demo (2025)

**Status:** Archived

**Maintenance:** I will not return to this project

**Stability:** Stable

## Overview

This repository contains a **web board game demo** developed in 2025 as part of a school-related project.  
The original visual assets and question content have been removed or replaced, so the game does not fully represent its original presentation. The purpose of this repository is to **showcase the game logic and frontend structure**, not to provide a complete playable product.

## Game Summary

- 1 human player
- 2 AI players
- Turn-based board progression
- Wheel spin determines the card color to draw
- Each card has **3 difficulty levels**
  - Correct answer → move forward `level + 1` cells
  - Incorrect answer → no penalty

### Special mechanics

- **Red zones**: landing on one allows an additional spin  
  - Incorrect answer in a red zone causes the player to move backward `level + 1` cells
- Due to asset removal:
  - Board visuals are simplified
  - Red zones and board cells are not visually represented
- The game ends after a predefined number of player moves

> [!NOTE]  
> Question text and answers have been removed, but gameplay and logic remain functional.

## Getting Started

### Installation

- Clone the repository

### Running the demo

1. Open `index.html` in a browser  
2. Click **Play demo**

## Limitations

- Original board design, figurines, icons, and text content are not included
- Visual feedback is minimal due to replaced assets
- The demo ends early

These limitations are intentional to respect third-party ownership of the original assets.

## What I Learned

- Implementing turn-based game logic in JavaScript
- Using a JavaScript charting library for in-game visualization

## Licensing & IP Notice

This repository contains **only code and assets made by me**.  
All original brand assets, board visuals, icons, and quiz content have been removed and remain the property of their respective owners.

#### This repository is intended for **portfolio review and educational purposes only**.  
#### See the `LICENSE.txt` file for details.

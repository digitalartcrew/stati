# Name: Stati

## Overview
**Stati** is an interactive baseball fan engagement application that leverages Google Cloud's AI tools to create a gamified prediction and ranking experience for baseball enthusiasts. Fans can predict baseball statistical events, challenge other users, and compete for individual and team rankings throughout the MLB™ season.

---

## Features

### Event Prediction
- Users predict statistical events during the season (e.g., "Player X will hit 30 home runs").
- Predictions can be time-bound (e.g., per game, per week, per season).

### Challenges
- Users can challenge others on specific predictions.
- Points are wagered, with winners gaining points and losers losing them.

### Custom Event Creation
- Users can create custom baseball statistical events (e.g., "Pitcher Y will strike out 10 batters in a single game").

### Community Voting
- Community voting allows users to upvote or downvote statistical events, prioritizing the most interesting or relevant challenges.

### Team Collaboration
- Fans can form teams to compete collectively, with rankings for top-performing teams each season.

### Rankings
- Dynamic leaderboards for top-performing users and teams.
- Rankings are based on prediction accuracy and challenge outcomes.

### Search & Discovery
- Users can explore predictions, challenges, and teams via advanced search filters.

### Gamified Elements
- Badges, rewards, and achievements for milestones (e.g., "Most Accurate Predictor of the Month").

---

## Technologies

### Google Cloud AI Tools
- **Vertex AI**: To analyze historical and real-time data for predicting likely outcomes and supporting user predictions.
- **BigQuery**: To process MLB™ and user-generated datasets for event tracking and rankings.
- **Natural Language Processing (NLP)**: For extracting insights from text-based user input and generating event summaries.

### MLB™ Dataset
- For in-depth player, team, and game statistics.

### Multilingual Support
- Integration of tools like Google Translate API to support English, Spanish, and Japanese-speaking fans.

---

## Submission Components
- **URL to Hosted Application**: A live demo of the app, hosted on Google Cloud.
- **Code Repository**: Open-source repository with clear documentation and a license.
- **Demo Video**: A 3-minute video demonstrating core functionalities, highlighting how fans can predict, challenge, and compete.
- **Text Description**: A summary covering features, functionality, technologies used, and findings from the project.

---

## Best Fit Challenge
The idea aligns well with **Challenge 1: Wild Card Challenge**.
- It allows for creativity and flexibility, encouraging unique engagement with MLB™ stats and fan interaction.


# MVP for Stati

## UI Design Overview
The interface will focus on user-friendliness, with a clean, dynamic design incorporating gamification elements. Below is the breakdown of the screens:

---

### 1. Home Screen (Dashboard)
- **Elements**:
  - Welcome banner with user stats (points, rank, team rank).
  - Quick links to:
    - "Make a Prediction"
    - "View Challenges"
    - "Team Rankings"
    - "Leaderboard"
  - Recent activity feed (e.g., recent challenges, top user predictions).
- **Front-End Requirements**:
  - Interactive cards for navigation.
  - Dynamic data rendering (user stats, recent activity).
  - Responsive design for mobile and desktop.
- **Back-End Requirements**:
  - APIs for user stats, leaderboard, recent challenges, and predictions.
  - Authentication system for user login/logout.

---

### 2. Make a Prediction Screen
- **Elements**:
  - Dropdown for selecting:
    - Player/Team
    - Event type (e.g., Home Run, Strikeout, Hits).
  - Input field for prediction details.
  - Submit button.
  - List of community-created predictions.
- **Front-End Requirements**:
  - Autocomplete for dropdowns.
  - Validation for input fields.
  - Dynamic updates to community predictions.
- **Back-End Requirements**:
  - Endpoints for submitting predictions.
  - Integration with MLB™ datasets for autocomplete.
  - Database for storing user predictions and events.

---

### 3. Challenges Screen
- **Elements**:
  - List of active challenges with:
    - Challenge details (user, prediction, wagered points).
    - Accept/Reject buttons.
  - Filter/sort options (by event type, wager size, etc.).
- **Front-End Requirements**:
  - Dynamic filtering and sorting.
  - Interactive challenge cards with status updates.
- **Back-End Requirements**:
  - APIs for fetching challenges and their status.
  - Endpoint for accepting/rejecting challenges.
  - Logic for updating point transfers between users.

---

### 4. Leaderboard Screen
- **Elements**:
  - Tabs for:
    - Top Users.
    - Top Teams.
  - Leaderboard table with:
    - Rank.
    - Username/Team Name.
    - Points.
  - Search bar for finding users or teams.
- **Front-End Requirements**:
  - Interactive tabs and search functionality.
  - Pagination for leaderboard entries.
- **Back-End Requirements**:
  - APIs for fetching leaderboard data.
  - Search endpoint for users and teams.

---

### 5. Team Management Screen
- **Elements**:
  - Create/Join team options.
  - List of current team members.
  - Team stats and rank.
  - Button for inviting users to the team.
- **Front-End Requirements**:
  - Modals for team creation and invitations.
  - Dynamic updates for team member changes.
- **Back-End Requirements**:
  - Endpoints for creating/joining teams.
  - Logic for handling invitations and updates.
  - APIs for fetching team stats.

---

## Technical Requirements

### Front-End Tech Stack
- **Framework**: React.js (for dynamic and interactive UI).
- **Styling**: TailwindCSS or Material-UI for modern and responsive design.
- **State Management**: Redux or Context API for managing user data and app state.
- **Multilingual Support**: i18n libraries like React-i18next.

---

### Back-End Tech Stack
- **Framework**: Node.js with Express.js.
- **Database**:
  - **Firestore** or **BigQuery** for storing predictions, challenges, user/team data.
- **Authentication**: Firebase Authentication or OAuth 2.0 for secure logins.
- **APIs**:
  - REST or GraphQL APIs for data exchange.
- **AI Integration**:
  - Google Cloud’s Vertex AI for prediction insights.
  - Natural Language API for parsing user-generated event descriptions.
- **Multilingual Support**: Google Translate API.

---

### Google Cloud Services
- **BigQuery**: Storing and querying MLB™ datasets and user-generated predictions.
- **Vertex AI**: Analyzing prediction trends and enhancing user engagement.
- **Cloud Run**: Deploying server-side functions for scalability.
- **Cloud Storage**: Hosting user-uploaded media (e.g., profile images, video highlights).

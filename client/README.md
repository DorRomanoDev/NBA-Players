  # NBA Player Management App - Client

  ## Overview
  The NBA Player Management App is a web application built using React and Material-UI that allows users to browse and manage NBA player data. Users can view player details, mark players as favorites, search for specific players, and navigate through paginated player lists.
  # Project Technical Design

  ## Component Breakdown

  1. **App Component** (`App.tsx`): This is the root component responsible for rendering the main layout of the application. It includes two major components, `Players` and `FavoritePlayers`.

  2. **Players Component** (`Players.tsx`): Renders the list of players, search functionality, pagination, loading/error states, and utilizes the `Search`, `Loading`, `Error`, `CustomList`, and `Pagination` components.

  3. **Search Component** (`Search.tsx`): Renders the search input field for searching players.

  4. **Loading Component** (`Loading.tsx`): Displays a loading spinner while data is being fetched.

  5. **Error Component** (`Error.tsx`): Renders an error message if there's an issue fetching data.

  6. **CustomList Component** (`CustomList.tsx`): Displays the list of players within the `Players` component.

  7. **CustomListItem Component** (`CustomListItem.tsx`): Renders each individual player item within the `CustomList` component.

  8. **Pagination Component** (`Pagination.tsx`): Provides pagination controls for navigating through player pages.

  9. **FavoritePlayers Component** (`FavoritePlayers.tsx`): Displays a list of favorite players and includes a remove button for each player.

  10. **CustomTable Component** (`CustomTable.tsx`): Renders a customizable table based on provided data and columns.

  ## State Management Architecture

  - **useState**: Used for managing local component states like `favoritePlayers`, `searchTerm`, `currentPage`, `isLoadingPlayers`, and `error`.
  - **usePlayerData Custom Hook**: Manages data fetching, pagination, and search functionality states like `searchTerm`, `players`, `isLoadingPlayers`, `error`, and `pagination`.

  ## API Interaction

  - **Axios**: Handles HTTP requests to the API endpoint (`${import.meta.env.VITE_BASE_URL}/players`) to fetch player data.
  - **PlayerResponse Interface**: Defines the structure of the response data from the API.

  ## Complex Features

  - **Pagination**: Allows users to navigate through multiple pages of player data.
  - **Search Functionality**: Enables users to search for specific players based on their input.
  - **Favorite Players**: Users can mark players as favorites and view them in a separate list.
  - **Custom Table**: Provides a customizable table component for displaying player data with different columns.


  ## Folder Structure
  nba-player-management-app/<br/>
  │<br/>
  ├── public/                   # Public assets and HTML template<br/>
  ├── src/                      # Source code<br/>
  │   ├── components/           # Reusable UI components<br/>
  │   │   ├── Error/            # Component for displaying a error message<br/>
  │   │   ├── FavoritePlayers/  # Component for displaying favorite players<br/>
  │   │   ├── List/             # Component for displaying a list of players<br/>
  │   │   ├── ListItem/         # Component for rendering an individual player item<br/>
  │   │   ├── Loader/           # Loading spinner component<br/>
  │   │   ├── Pagination/       # Pagination component<br/>
  │   │   ├── Players/          # Component for displaying players<br/>
  │   │   ├── Search/           # Component for searching<br/>
  │   │   ├── Table/            # Component for displaying favorite players<br/>
  │   ├── hooks/                # Custom hooks for managing data and state<br/>
  │   ├── interfaces/           # TypeScript interfaces<br/>
  │   ├── services/             # API service for fetching player data<br/>
  │   ├── App.tsx               # Main application component<br/>
  │   ├── index.tsx             # Entry point<br/>
  │   ├── App.css               # Global styles<br/>
  │   └── ...                   # Other source code files<br/>
  │<br/>
  ├── .env                      # Environment variables (e.g., API base URL)<br/>
  ├── README.md                 # Project documentation<br/>
  ├── package.json              # Package configuration<br/>
  ├── tsconfig.json             # TypeScript configuration<br/>
  └── ...                       # Other project files<br/>


  ## Technologies Used

  - React
  - Material-UI
  - TypeScript
  - Axios

  ## Installation and Usage

  1. Clone the repository.
  2. Navigate to the project directory.
  3. Install dependencies using `npm install`.
  4. Run the development server using `npm run dev` .
  5. Open the browser and navigate to `http://localhost:5173`.

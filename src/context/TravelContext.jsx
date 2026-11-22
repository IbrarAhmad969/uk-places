
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { places } from "../data/places.js";

const TravelContext = createContext(null);

const STORAGE_KEY = "uk-places-travel-v1";
const validSlugs = new Set(places.map((place) => place.slug));

const defaultTrip = {
  name: "My UK Adventure",
  startDate: "",
  endDate: "",
  stops: [],
};

function readStorage() {
  if (typeof window === "undefined") {
    return {
      favorites: [],
      recent: [],
      trip: defaultTrip,
    };
  }

  try {
    const saved = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) || "{}"
    );

    return {
      favorites: Array.isArray(saved.favorites)
        ? [...new Set(saved.favorites)].filter((slug) =>
            validSlugs.has(slug)
          )
        : [],

      recent: Array.isArray(saved.recent)
        ? [...new Set(saved.recent)]
            .filter((slug) => validSlugs.has(slug))
            .slice(0, 8)
        : [],

      trip: {
        name:
          typeof saved.trip?.name === "string"
            ? saved.trip.name
            : defaultTrip.name,

        startDate:
          typeof saved.trip?.startDate === "string"
            ? saved.trip.startDate
            : "",

        endDate:
          typeof saved.trip?.endDate === "string"
            ? saved.trip.endDate
            : "",

        stops: Array.isArray(saved.trip?.stops)
          ? [...new Set(saved.trip.stops)].filter((slug) =>
              validSlugs.has(slug)
            )
          : [],
      },
    };
  } catch {
    return {
      favorites: [],
      recent: [],
      trip: defaultTrip,
    };
  }
}

export function TravelProvider({ children }) {
  const [savedData, setSavedData] = useState(readStorage);

  const { favorites, recent, trip } = savedData;

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(savedData)
      );
    } catch {
      // The app continues working if browser storage is unavailable.
    }
  }, [savedData]);

  // Favourites
  const toggleFavorite = useCallback((slug) => {
    if (!validSlugs.has(slug)) return;

    setSavedData((current) => ({
      ...current,
      favorites: current.favorites.includes(slug)
        ? current.favorites.filter((item) => item !== slug)
        : [slug, ...current.favorites],
    }));
  }, []);

  const isFavorite = useCallback(
    (slug) => favorites.includes(slug),
    [favorites]
  );

  const removeFavorite = useCallback((slug) => {
    setSavedData((current) => ({
      ...current,
      favorites: current.favorites.filter((item) => item !== slug),
    }));
  }, []);

  const clearFavorites = useCallback(() => {
    setSavedData((current) => ({
      ...current,
      favorites: [],
    }));
  }, []);

  // Recently viewed
  const addRecentlyViewed = useCallback((slug) => {
    if (!validSlugs.has(slug)) return;

    setSavedData((current) => ({
      ...current,
      recent: [
        slug,
        ...current.recent.filter((item) => item !== slug),
      ].slice(0, 8),
    }));
  }, []);

  const clearRecentlyViewed = useCallback(() => {
    setSavedData((current) => ({
      ...current,
      recent: [],
    }));
  }, []);

  // Trip planner
  const addToTrip = useCallback((slug) => {
    if (!validSlugs.has(slug)) return;

    setSavedData((current) => {
      if (current.trip.stops.includes(slug)) return current;

      return {
        ...current,
        trip: {
          ...current.trip,
          stops: [...current.trip.stops, slug],
        },
      };
    });
  }, []);

  const removeFromTrip = useCallback((slug) => {
    setSavedData((current) => ({
      ...current,
      trip: {
        ...current.trip,
        stops: current.trip.stops.filter((item) => item !== slug),
      },
    }));
  }, []);

  const moveTripStop = useCallback((slug, direction) => {
    setSavedData((current) => {
      const stops = [...current.trip.stops];
      const index = stops.indexOf(slug);
      const nextIndex = index + direction;

      if (
        index === -1 ||
        nextIndex < 0 ||
        nextIndex >= stops.length
      ) {
        return current;
      }

      [stops[index], stops[nextIndex]] = [
        stops[nextIndex],
        stops[index],
      ];

      return {
        ...current,
        trip: {
          ...current.trip,
          stops,
        },
      };
    });
  }, []);

  const updateTrip = useCallback((updates) => {
    setSavedData((current) => ({
      ...current,
      trip: {
        ...current.trip,
        ...updates,
      },
    }));
  }, []);

  const clearTrip = useCallback(() => {
    setSavedData((current) => ({
      ...current,
      trip: defaultTrip,
    }));
  }, []);

  // Convert saved slugs into destination objects
  const favoritePlaces = useMemo(
    () =>
      favorites
        .map((slug) => places.find((place) => place.slug === slug))
        .filter(Boolean),
    [favorites]
  );

  const recentPlaces = useMemo(
    () =>
      recent
        .map((slug) => places.find((place) => place.slug === slug))
        .filter(Boolean),
    [recent]
  );

  const tripPlaces = useMemo(
    () =>
      trip.stops
        .map((slug) => places.find((place) => place.slug === slug))
        .filter(Boolean),
    [trip.stops]
  );

  const value = useMemo(
    () => ({
      favorites,
      recent,
      trip,
      tripPlaces,
      favoritePlaces,
      recentPlaces,

      toggleFavorite,
      isFavorite,
      removeFavorite,
      clearFavorites,

      addRecentlyViewed,
      clearRecentlyViewed,

      addToTrip,
      removeFromTrip,
      moveTripStop,
      updateTrip,
      clearTrip,
    }),
    [
      favorites,
      recent,
      trip,
      tripPlaces,
      favoritePlaces,
      recentPlaces,
      toggleFavorite,
      isFavorite,
      removeFavorite,
      clearFavorites,
      addRecentlyViewed,
      clearRecentlyViewed,
      addToTrip,
      removeFromTrip,
      moveTripStop,
      updateTrip,
      clearTrip,
    ]
  );

  return (
    <TravelContext.Provider value={value}>
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  const context = useContext(TravelContext);

  if (!context) {
    throw new Error("useTravel must be used inside TravelProvider");
  }

  return context;
}

/* Types */
import { productData } from "@/ts/types";

export const setFavorites = (product: productData) => {
  const route = useRoute();

  console.log(
    "%caccessed setFavorites",
    "background: brown; color: white; padding: 4px; border-radius: 4px; font-weight: bold;"
  );

  const favoritesHandler = () => {
    console.log(
      "%caccessed favoritesHandler",
      "background: gray; color: black; padding: 4px; border-radius: 4px; font-weight: bold;"
    );

    const setFavoritesToLocalStorage = () => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const item = favorites.find((item) => item.id === product.id);

    if (!item) {
      favorites.push({ ...product });
      setFavoritesToLocalStorage();

      console.log(
        "%cadded to favorites",
        "background: green; color: white; padding: 4px; border-radius: 4px; font-weight: bold;"
      );
    } else if (item && route.path === "/favorites") {
      //! its better to create 2 different functions for this if you are looking for more scalable project
      console.log(
        "%cItem already exists",
        "background: red; color: white; padding: 4px; border-radius: 4px; font-weight: bold;"
      );

      favorites = favorites?.filter((item) => item.id !== product.id);
      setFavoritesToLocalStorage();
    }
  };

  return useState("favorites", () => favoritesHandler());
};

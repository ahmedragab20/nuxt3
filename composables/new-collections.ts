/* Types */
import { productsResponse } from "@/ts/types";

/* Fetch new collections data */
export const useNewCollections = async () => {
  try {
    const url = "/api/new-collection";
    const { data, error, pending, refresh } = await useFetch(url, {
      cache: "reload",
      server: false,
      method: "GET",
    });

    const products = ref({ data, error, pending, refresh });

    return useState<productsResponse | any>(
      "new-collections-products",
      () => products.value
    );
  } catch (error) {}
};

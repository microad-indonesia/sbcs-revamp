/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";

export async function Fetcher<JSON = any>(
  input: RequestInfo,
  // init?: RequestInit,
  lang?: string,
): Promise<JSON> {
  const resp = await fetch(
    input,
    // eslint-disable-next-line no-param-reassign
    {
      headers: {
        // "x-access-token": "sans@dev",
        "Content-Type": "aplication/json",
        "Accept-language": `${lang}`,
      },
    },
  );

  if (resp.status == 404) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return resp.json();
}

const getKeyProducts = (pageIndex: any, previousPageData: any) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `${process.env.NEXT_PUBLIC_APIURL}/product/get/list?page=${pageIndex}`; // SWR key
};

// GET products
export const useProducts = () => {
  // const { locale } = useRouter();
  const { data, error, ...rest } = useSWRInfinite(getKeyProducts, Fetcher);
  return { data, error, loading: !data && !error, ...rest };
};

// GET blogs
export const useBlogs = (initialData: any) => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_APIURL}/blog/get/list?page=${initialData}`,
    Fetcher,
    { fallbackData: initialData, refreshInterval: 20000 },
  );
  return { data, error, loading: !data && !error, ...rest };
};
// GET accep lang blogs
export const useBlogsWithLang = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/blogs`, locale],
    Fetcher,
    // { fallbackData: initialData, refreshInterval: 20000 },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET single blog
export const useBlogId = (slug: string, initialData: any) => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [
      slug ? `${process.env.NEXT_PUBLIC_APIURL}/api/blogs/slug/${slug}` : null,
      locale,
    ],
    Fetcher,
    { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Car Brands
export const useCarsBrands = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/carbrands`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Cars Types
export const useCarsTypes = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/cartypes`, locale],
    Fetcher,
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET All Cars data
export const useCars = (initialData: any) => {
  const { data, error, ...rest } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_APIURL}/api/cars`,
    Fetcher,
    { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Cars data
export const useActiveCars = (initialData: any) => {
  const { data, error, ...rest } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_APIURL}/api/cars?active=1`,
    Fetcher,
    { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

// GET Resource data
export const useResource = () => {
  const { locale } = useRouter();
  const { data, error, ...rest } = useSWR<any>(
    [`${process.env.NEXT_PUBLIC_APIURL}/api/resources`, locale],
    Fetcher,
    // { fallbackData: initialData },
  );
  return { data, error, loading: !data && !error, ...rest };
};

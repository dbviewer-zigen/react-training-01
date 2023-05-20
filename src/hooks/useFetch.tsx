import React, { useEffect, useState } from "react";

// export const useFetch = <T,>({ url, config }: { url: string; config: any }) => {
export const useFetch = <T,>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<T>(null as T);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = (await response.json()) as T;
        setData(data);
        setIsLoading(false);
      } catch (e: unknown) {
        setError(e);
        setIsLoading(false);

        if (e instanceof Error) {
          console.error(e.message);
        }
      }
    };
    // データをフェッチする
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

import { useEffect, useState } from "react";

// export const useFetch = <T,>({ url, config }: { url: string; config: any }) => {
export const useFetch = <T,>(url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<T>(null as T);

  // StrictMode有効時にuseEffectが2回実行される(開発環境のみ)
  // https://qiita.com/asahina820/items/665c55594cfd55e6f14a
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

    console.log("start fetch");
    // データをフェッチする
    fetchData();
    console.log("end fetch");
  }, [url]);

  return { data, isLoading, error };
};

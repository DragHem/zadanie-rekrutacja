import { useEffect, useState } from "react";

export type State = {
  name: string;
  birth_year: string;
  eye_color: string;
  created: string;
  vehicles: string[];
};

function useFetch(url: string) {
  const [data, setData] = useState<State[]>([]);
  const [error, setError] = useState<Boolean>(false);
  const [isPending, setIsPending] = useState<Boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    (async (): Promise<void> => {
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const data: State = await response.json();

        setData((prevState) => {
          return [...prevState, data];
        });

        setIsPending(false);
      } catch (e) {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, isPending };
}

export default useFetch;

useEffect(() => {
  const timerId = setTimeout(() => {
    setDebouncedTerm(term);
  }, 1000);

  return () => {
    clearTimeout(timerId);
  };
}, [term]);

useEffect(() => {
  const search = async () => {
    const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: debouncedTerm,
      },
    });

    setResults(data.query.search);
  };
  if (debouncedTerm) {
    search();
  }
}, [debouncedTerm]);


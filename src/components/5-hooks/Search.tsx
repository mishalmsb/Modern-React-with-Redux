import React, {useState, useEffect} from "react";
import {searchWikipedia, searchDummyWikipedia} from "../../api/wikipedia";
import {WikipediaSearchResultDetail, WikipediaSearchResults} from "../../constants/wikipedia";

const Search = () => {
  const [term, setTerm] = useState<string>("programming");
  const [debouncedTerm, setDebouncedTerm] = useState<string>(term);
  const [results, setResults] = useState<WikipediaSearchResultDetail[]>([]);

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
      const {query}: WikipediaSearchResults = await searchWikipedia({term: debouncedTerm});
      // const {query}: WikipediaSearchResults = await searchDummyWikipedia({term: debouncedTerm});
      setResults(query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
        <div key={result.pageid} className="item">
          <div className="right floated content">
            <a
                className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
            >
              Go
            </a>
          </div>
          <div className="content">
            <div className="header">{result.title}</div>
            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
          </div>
        </div>
    );
  });

  return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Search Term</label>
            <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="input"
            />
          </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
  );
};

export default Search;

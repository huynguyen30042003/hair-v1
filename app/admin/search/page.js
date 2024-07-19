"use client";
import { useState } from "react";
import { searchServices } from "../../../api/route"; // Cần API để tìm kiếm
import { Input, Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (query.trim()) {
      const searchResults = await searchServices(query);
      setResults(searchResults);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Chức năng tìm kiếm</h1>
      <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center">
          <Input
            type="text"
            label="Tìm kiếm"
            value={query}
            onChange={handleInputChange}
            className="flex-grow mr-2"
          />
          <Button onClick={handleSearch}>
            <MagnifyingGlassIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Kết quả tìm kiếm</h2>
        <ul>
          {results.map((result) => (
            <li key={result.id} className="p-2 border-b">
              <p className="font-semibold">{result.name}</p>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;

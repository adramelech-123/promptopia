"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

// This component will only be used within the Feeed component
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e) => {
    console.log("Handle Search");
  };

  // Fetch the Prompt Data from API
  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();

      setPrompts(data);
    };

    fetchPrompts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;

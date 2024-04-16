import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Pages = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const module = await import(`${props.mdpath}`);
        const response = await fetch(module.default);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, [props.mdpath]);

  return (
    <div className="prose prose-base dark:prose-invert max-w-full">
      <ReactMarkdown children={content} />
    </div>
  );
};

export default Pages;
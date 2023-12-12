import { useState, useEffect } from "react";

// function useQuery() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     setIsLoaded(false);
//     fetch("http://localhost:4000/posts")
//       .then((r) => r.json())
//       .then((posts) => {
//         setPosts(posts);
//         setIsLoaded(true);
//       });
//   }, []);

//   // return an *object* with the data and isLoaded state
//   return {
//     posts: posts,
//     isLoaded: isLoaded,
//   };
// }

// take in the url
function useQuery(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  // rename `posts` to a more generic `data`
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      });
  }, [url]);
  // the url is now a dependency
  // we want to use the side effect whenever the url changes

  // return an *object* with the data and isLoaded state
  return { data, isLoaded };
}

export default useQuery;

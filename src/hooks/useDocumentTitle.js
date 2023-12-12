import { useEffect } from "react";

// function useDocumentTitle() {
//   useEffect(() => {
//     document.title = "Underreacted | Home";
//   }, []);
// }

function useDocumentTitle(pageTitle) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;

# SUMZ 

Welcome to our Article Summarizer, a powerful tool built with the latest web technologies, including React, Redux, and Tailwind CSS. This application empowers you to quickly extract and comprehend the essence of lengthy articles and web content. Here's what you can do with it:





- setup a ReactJS project using Vite
- create a responsive, beautiful UI/UX with a nice touch of glass morphism using Tailwind CSS
- make advanced RTK query API requests that fire on condition
- save history using the local storage
- handle form events and catch errors
- implement copy to clipboard
- 

1- State Management:

The component uses React's useState and useEffect hooks for state management.
It maintains two state variables: article to store information about the current article (URL and summary), and allArticles to store a list of previously summarized articles.
API Integration:

2- It uses Redux Toolkit's createApi to create an API slice named articleApi.
The baseQuery is configured to make API requests to the "https://article-extractor-and-summarizer.p.rapidapi.com/" base URL, and it sets headers such as the RapidAPI key and host.
It defines a single API endpoint named getSummary using builder.query. This endpoint takes a parameter articleUrl, which is used to fetch a summary of a given URL.
Form Handling:

There's an HTML form that allows users to input a URL.
When the form is submitted, it triggers the handleSubmit function.
Inside handleSubmit, it calls the getSummary function to fetch the article summary from the API using the URL entered by the user.
If a summary is obtained, it updates the article state and stores the article in the allArticles state as well as in local storage.
3- URL History:

The component displays a list of previously summarized articles from the allArticles state in reverse order (newest first).
Users can click on a previously summarized article to view its summary again.
4- Copy URL to Clipboard:

Users can click on a "copy" button next to a URL to copy it to the clipboard, and an icon toggles to provide feedback.
Error Handling and Loading State:

While waiting for the API response, a loading spinner is displayed.
If there's an error with the API request, an error message is displayed along with details from the API response.
Presentation:

The component uses Tailwind CSS classes for styling, and it has a responsive design.
It displays the article summary in a structured format when available.

  
- ![Screenshot (21)](https://github.com/RRashmipanda/Sumz/assets/140526128/053e1686-3898-41c3-853c-9f5db3165c97)

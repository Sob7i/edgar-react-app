# React Blog Assignment

In this assignment, you will create a simple blog application using React. The application will consist of two main pages: a main page that displays a list of blog posts and a details page for each individual blog post. The blog posts will be fetched from a Lorem Ipsum API to simulate real data.

## Objectives
1. Create at least two components: one for the main page and one for the details page.
2. Fetch blog post data from a Lorem Ipsum API and display it on the main page as a list of blog posts.
3. Implement navigation between the main page and the details page for each blog post.
4. Create a details page that displays the full content of a selected blog post.

## Requirements
1. Use the Lorem Ipsum API to fetch blog post data. You can make HTTP requests using the fetch API or any preferred library.
2. Create two components:
   - `MainPage`: This component should display a list of blog post titles fetched from the API. Clicking on a title should navigate to the details page for that blog post.
   - `DetailsPage`: This component should display the full content of the selected blog post.
3. Implement navigation between the main page and the details page. You can use React Router or any other routing library of your choice.
4. Style your application using CSS or a CSS-in-JS library of your choice. Make sure it is visually appealing and user-friendly.
5. Use React state to manage the selected blog post on the details page. The selected post should be passed as a prop to the `DetailsPage` component.
6. Provide a way to go back from the details page to the main page.
7. Implement error handling for API requests in case the API is unavailable or returns an error.

## Bonus Features (Optional)
If you want to challenge yourself further, consider adding these optional features:
1. Add pagination or infinite scrolling to the main page to display more blog posts.
2. Implement a search bar on the main page to filter blog posts by keywords.
3. Allow users to add their own blog posts (title and content) with a form.
4. Add comments to individual blog posts, allowing users to leave comments and view existing comments.

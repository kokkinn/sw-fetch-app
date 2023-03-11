import "./pagesStyles.css";

export function HomePage() {
  return (
    <div className="home-page-text-wrapper">
      <h1 className="sf-title title-pages">This is home page</h1>
      <div className="home-page-text">
        The project was built by Mr George Kokkin. It implements paradoxal
        interface to API. The app was created with React. User is able to wee
        some of Star Wars Universe information and switch theme / language.
        Basic auth and routes are also present. Within my process one of the
        first things I do is to identify the color pallete with the following:
        Primary, Secondary, (Tertiary,) Dark, Light, Accent. Then, indentify
        variations of these colors with their own "dark", "light" and "accent"
        version. Idenfifying these colors as a "first step" in your
        design/development process creates the guidelines for consistency
        interface.
      </div>
    </div>
  );
}

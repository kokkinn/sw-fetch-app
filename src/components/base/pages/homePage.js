import "./pagesStyles.css";

export function HomePage() {
  return (
    <div className="home-page-text-wrapper">
      <h1 className="sf-title">This is home page</h1>
      <div className="home-page-text">
        The project was built by Mr George Kokkin. It implements paradoxal
        interface to API. The app was created with React. User is able to wee
        some of Star Wars Universe information and switch theme / language (in
        development). Basic auth and routes are also present. The API now is
        kinda slow, but in near future I would implement y personal one. This is
        some more sample text just to fill the empy space and make it feel an
        important information is written here :)
        The link for my contacts is <a style={{textDecoration: "underline"}} href='https://kokkinn.com'>here</a>.
      </div>
    </div>
  );
}

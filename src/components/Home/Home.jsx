import React, { useEffect, useState } from "react";

function Home(props) {
  const [searchString, setSearchString] = useState();

  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="search-bar">
        <input
          placeholder="Search products"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;

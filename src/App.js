import React, { Component } from "react";
import Feed from "./components/Feed";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        { id: 1, username: "Danone", curtidas: 10, comentarios: 2 },
        { id: 2, username: "Michel", curtidas: 120, comentarios: 24 },
        { id: 3, username: "Rafael", curtidas: 30, comentarios: 12 },
        { id: 4, username: "Edmarques", curtidas: 1, comentarios: 0 },
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.feed.map((item) => {
            return (
              <Feed id={item.id} name={item.username} likes={item.curtidas} comments={item.comentarios} />
            )
          })
        }
      </div>
    )
  }
}

export default App
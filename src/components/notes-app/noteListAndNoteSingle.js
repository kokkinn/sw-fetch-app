import React from "react";

class NotesList extends React.Component {
  render() {
    return (
      <div className="notes-list-outer">
        <ul className="notes-list">
          {this.props.notesProp.map((mapNote) => {
            return (
              <li
                key={mapNote.id}
                onClick={() => {
                  console.log("MEOW");
                  this.props.noteClickHandler(mapNote.id);
                }}
              >
                <Note noteProp={mapNote} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

class Note extends React.Component {
  render() {
    return (
      <div>
        {this.props.noteProp.done ? (
          <del>{this.props.noteProp.title}</del>
        ) : (
          this.props.noteProp.title
        )}
      </div>
    );
  }
}

export { NotesList };

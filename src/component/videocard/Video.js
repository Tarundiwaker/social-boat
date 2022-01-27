import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import video from "./video.css";
const finalSpaceCharacters = [
  {
    url: "https://youtu.be/9-PWknrVsQY",
    title: "Sardar Udham",
    pic: "https://www.imdb.com/title/tt10280296/mediaviewer/rm1354626561/?ref_=ext_shr_lnk.jpg",
  },
  {
    url: "https://youtu.be/xFB5Wj8NA9Y",
    title: "saheed Bhagat Singh",
    pic: "https://images.app.goo.gl/CsZxjTpyrb7nBTGa9",
  },
  {
    url: "https://youtu.be/T4OoixVsfiA",
    title: "The lost of city Z",
    pic: "https://images.app.goo.gl/tJSV16cgLBAQmFwv9",
  },
  {
    url: "https://youtu.be/JhIw8ch4A9M",
    title: "The Ramanuan",
    pic: "https://images.app.goo.gl/KZzQ2KDhJf9RhjpMA",
  },
  {
    url: "https://youtu.be/iLyTFbqtrgo",
    title: "Bose",
    pic: "https://images.app.goo.gl/ZSedB5dm3828c31m8",
  },
];
export default function Video() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ url, title, pic }, index) => {
                return (
                  <>
                    <Draggable key={title} draggableId={title} index={index}>
                      {(provided) => (
                        <>
                          {" "}
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="cards">
                              <div className="card">
                                <img src={pic} className="card_img"></img>
                                <div className="card_info">
                                  <span className="card_category">
                                    A collection
                                  </span>
                                  <h3 className="card_title">{title}</h3>
                                  <a href={url} target="_blank">
                                    <button>Watch Now</button>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </Draggable>
                  </>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

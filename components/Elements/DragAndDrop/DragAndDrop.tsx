import React from "react";

const DragAndDrop = () => {
  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".drag-and-drop-container");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e: any) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable: any = document.querySelector(".dragging");
      if (afterElement == null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElement);
      }
    });
  });

  function getDragAfterElement(container: any, y: any) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
  //   console.log(draggableDiv, draggableContainerDiv);
  return (
    <div className="w-full h-[12rem] flex flex-col gap-1">
      <div className="drag-and-drop-container w-full  flex flex-col gap-2 bg-red-500 h-auto">
        <p draggable="true" className="draggable w-full h-10 bg-blue-700">
          Drag me 1
        </p>
        <p draggable="true" className="draggable w-full h-10 bg-blue-700">
          Drag me 2
        </p>
      </div>
      <div className="drag-and-drop-container w-full  flex flex-col gap-2 bg-red-700 h-auto">
        <p draggable="true" className="draggable w-full h-10 bg-blue-700">
          Drag me 3
        </p>
        <p draggable="true" className="draggable w-full h-10 bg-blue-700">
          Drag me 4
        </p>
      </div>
    </div>
  );
};

export default DragAndDrop;

import React from "react";
import "./DragAndDrop.scss";

const DragAndDrop = () => {
  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".drag-and-drop-container");
  const hideClass: any = document.getElementsByClassName("draggable.hide");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", (e: any) => {
      draggable.classList.add("dragging");
      setTimeout(() => {
        e.target.className += " hide";
      }, 0);
    });

    draggable.addEventListener("dragend", (e: any) => {
      draggable.classList.remove("dragging");
      e.target.classList.remove("hide");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e: any) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const draggable: any = document.querySelector(".dragging");

      console.log(draggable);
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
    <div className="w-full flex flex-col gap-1">
      <div className="drag-and-drop-container w-[20rem] flex flex-col gap-2 bg-red-500 h-auto p-5 transition-height ease-in-out duration-800">
        <p draggable="true" className="draggable w-full h-10 bg-blue-700">
          Drag me 1
        </p>
        <p draggable="true" className="draggable w-full h-10 bg-green-700">
          Drag me 2
        </p>
      </div>
      <div className="drag-and-drop-container w-[20rem] flex flex-col gap-2 bg-red-700 p-5 h-auto transition-height ease-in-out duration-800">
        <p draggable="true" className="draggable w-full h-10 bg-gray-400">
          Drag me 3
        </p>
        <p draggable="true" className="draggable w-full h-10 bg-yellow-700">
          Drag me 4
        </p>
      </div>
    </div>
  );
};

export default DragAndDrop;

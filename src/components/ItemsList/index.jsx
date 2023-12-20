import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ElementBar from '../ElementBar';

import { reorder } from '../../utils/helperFunctions';
import { updateElementsOrder } from '../../apis/homefeedApis';
import { deleteHomeFeedElement } from '../../apis/homefeedApis';

import './index.scss';

const ItemsList = ({ elements, updateElements, fetchHomeFeedData }) => {
  const onDragEnd = async (result) => {
    if (!result.destination) {
      return;
    }

    const newElements = reorder(elements, result.source.index, result.destination.index);

    updateElements(newElements);

    // Prepare the data for the batch update
    const batchUpdateData = newElements.map((element, index) => ({
      uuid: element.uuid,
      order: index + 1,
    }));

    await updateElementsOrder(batchUpdateData);
  };

  return (
    <div className="item-list">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={'droppable-2'}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {elements.map((item, index) => (
                <Draggable key={item.uuid} draggableId={item.uuid} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <ElementBar
                        uuid={item.uuid}
                        title={item.title}
                        type={item.element_type}
                        isActive={item.is_active}
                        fetchHomeFeedData={fetchHomeFeedData}
                        handleItemDelete={() => handleItemDelete(item.uuid, index)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );

  async function handleItemDelete(uuid, index) {
    try {
      await deleteHomeFeedElement(uuid);
      const newElements = [...elements];
      newElements.splice(index, 1);
      updateElements(newElements);
      const batchUpdateData = newElements.map((element, index) => ({
        uuid: element.uuid,
        order: index + 1,
      }));

      await updateElementsOrder(batchUpdateData);
    } catch {
      console.log('something went wrong');
    }
  }
};

export default ItemsList;

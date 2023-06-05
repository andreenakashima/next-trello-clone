"use client";

import { useBoardStore } from "@/store/BoardStore";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export function Board() {
	const getBoard = useBoardStore((state) => state.getBoard);

	useEffect(() => {
		getBoard();
	}, [getBoard]);

	return (
		<div></div>
		// <DragDropContext>
		// 	<Droppable droppableId="board" direction="horizontal" type="column">
		// 		{(provided) => <div></div>}
		// 	</Droppable>
		// </DragDropContext>
	);
}

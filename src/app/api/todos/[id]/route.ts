import { NextRequest, NextResponse } from "next/server";
import { getDataSource } from "@/lib/database";
import { Todo } from "@/entities/Todo";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const dataSource = await getDataSource();
    const todoRepository = dataSource.getRepository(Todo);
    const todo = await todoRepository.findOneBy({ id });

    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(todo);
  } catch (error) {
    console.error("GET /api/todos/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch todo" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const body = await request.json();
    const { title, description, completed } = body;

    const dataSource = await getDataSource();
    const todoRepository = dataSource.getRepository(Todo);
    const todo = await todoRepository.findOneBy({ id });

    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    if (title !== undefined) {
      if (typeof title !== "string" || title.trim() === "") {
        return NextResponse.json(
          { error: "Title cannot be empty" },
          { status: 400 }
        );
      }
      todo.title = title.trim();
    }

    if (description !== undefined) {
      todo.description = description?.trim() || "";
    }

    if (completed !== undefined) {
      todo.completed = Boolean(completed);
    }

    const updatedTodo = await todoRepository.save(todo);
    return NextResponse.json(updatedTodo);
  } catch (error) {
    console.error("PUT /api/todos/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const dataSource = await getDataSource();
    const todoRepository = dataSource.getRepository(Todo);
    const todo = await todoRepository.findOneBy({ id });

    if (!todo) {
      return NextResponse.json({ error: "Todo not found" }, { status: 404 });
    }

    await todoRepository.remove(todo);
    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/todos/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

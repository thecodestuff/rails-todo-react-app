class TodosController < ApplicationController
	skip_before_action :require_login
	
	def index
		todos = Todo.order('created_at DESC')
		render json: todos
	end

	def create
		todo = Todo.create(todo_params)
		render json: todo
	end

	def show
		todo = Todo.find(params[:id])
	end

	def edit
	end

	def update
		todo = Todo.find(params[:id])
		todo.done = !todo.done
		todo.save
		render json: todo
	end

	def destroy
		todo = Todo.find(params[:id])
		todo.destroy
		head :no_content, status: :ok
	end

	private

	def todo_params
		params.require(:todo).permit(:id, :title, :done)
	end
end

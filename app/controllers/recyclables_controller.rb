class RecyclablesController < ApplicationController

  def index
    debugger
    # @user = User.find(num)
    # recycleList = @user.recyclables
    # return recycleList
    puts 'hello'
    @recyclables = Recyclable.all
    respond_to do |format|
      format.json {render json: @recyclables}
    end
  end

  def create

    @recyclable = Recyclable.new(recyclable_params)
    if @recyclable.save
      respond_to do |format|
        format.json { render json: @recyclable}
      end
    else

    end
  end

  private

  def recyclable_params

    params[:recycle_date] = Date.strptime(params[:recycle_date], "%m/%d/%Y").strftime("%d/%m/%Y")
    params.permit(:user_id, :recycle_type, :amount, :recycle_date)
  end

end


module UsersHelper
  def sayHello(num)
    puts "motherfucker!"
    @user = User.find(num)
    puts num
  end

  def getPaper(num)
    @user = User.find(num)
    # Get all recycles that are of type Paper
    paperList = @user.recyclables.select{ |recycle| recycle[:recycle_type] == 'Paper'}
    # Sum total amount and return
    paperValue = paperList.map{|item| item[:amount]}.reduce(0,:+)
    return paperValue
  end

  def getPlastic(num)
    @user = User.find(num)
    # Get all recycles that are of type Paper
    paperList = @user.recyclables.select{ |recycle| recycle[:recycle_type] == 'Plastic'}
    # Sum total amount and return
    paperValue = paperList.map{|item| item[:amount]}.reduce(0,:+)
    return paperValue
  end

  def getGlass(num)
    @user = User.find(num)
    # Get all recycles that are of type Paper
    paperList = @user.recyclables.select{ |recycle| recycle[:recycle_type] == 'Paper'}
    # Sum total amount and return
    paperValue = paperList.map{|item| item[:amount]}.reduce(0,:+)
    return paperValue
  end

end

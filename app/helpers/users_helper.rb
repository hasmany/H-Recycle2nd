module UsersHelper


  def getPaper(num)
    # Get user
    @user = User.find(num)
    # Get all recycles that are of type Paper
    paperList = @user.recyclables.select{ |recycle| recycle[:recycle_type] == 'Paper'}
    # Sum total amount and return

    totalPaperValue = paperList.map{|item| item[:amount]}.reduce(0,:+)
    return totalPaperValue
  end

  def getPlastic(num)
    # Get user
    @user = User.find(num)
    # Get all recycles that are of type Plastic
    plasticList = @user.recyclables.select{ |recycle| recycle[:recycle_type] == 'Plastic'}
    # Sum total amount and return

    totalPlasticValue = plasticList.map{|item| item[:amount]}.reduce(0,:+)
    return totalPlasticValue
  end

  def getGlass(num)
    # Get user
    @user = User.find(num)
    # Get all recycles that are of type Glass or metal
    glassMetalList = @user.recyclables.select{ |recycle| recycle[:recycle_type] == 'Glass/Metal'}
    # Sum total amount and return
    totalGlassMetalValue = glassMetalList.map{|item| item[:amount]}.reduce(0,:+)
    return totalGlassMetalValue
  end

end

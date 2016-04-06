# Homepage (Root path)


# define a route that uses the helper
get '/' do
  erb :index
end

get "/contacts" do
  @contacts = Contact.all
  json({contacts: @contacts})
end

post "/contacts" do
  puts params.inspect
end



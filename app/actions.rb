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
  request.body.rewind
  contact = Contact.create(JSON.parse request.body.read)
  contact.save
  json(contact)
end



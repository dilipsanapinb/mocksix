## AirTickete Booking

# BOOK-MY-Air
- This is web application for booking the booking the air Ticketes

- have a 3 sections
# User
 - registering the user withe help of name, email, password
# Add Fligth
- adding fligth with detais like airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price.

# Book the fligth
-Booking can be done by entering the userID and flightID

## API's

# Register the user
# GET user/api   
  - get all users
  if(true){
    res.status(200).send(data);
  }else{
     res.status(400).send("Error: " + error.message);
  }
 
# POST user/api/register
- register user
 - if (true){
     res.status(201).send({"msg":"Registration is Successfull","User":newUser});
  }else{
    res.status(400).send({ "error": err.message });
  }

# POST user/api/login

 - login the user

- if(true){
 res.status(201).send({ "msg":"Login is Successfull","token": token });
}else{
 res.status(400).send({ "error": "Invalid Credentials" });
console.log(err);
}



## Register the flight

# GET flight/api/flights
   - get all flights
   - if(true){
     res.status(200).send({"msg":"All Fligths Data",'Flight':flight});
    }else{
        res.status(500).send({ "msg": error.message });
        console.log(error);
    }

# GET flight/api/flights/:id
  - get flight by id
  - if(true){
     res.status(200).send({"msg":"Sigle Fligths DataByID",'Flight':flight});
    }else{
        res.status(500).send({ "msg": error.message });
        console.log(error);
    }

# POST flight/api/flights
   - add new flight
   - if(true){
     res.status(201).send({"msg":"Flight Added Successfully"});
    }else{
         res.status(500).send({ "msg": error.message,"alert":"Something went wrong at post flight" });
        console.log(error);
    }

# PATCH flight/api/flights/:id
  - edit the flight details
  - if(true){
    res.status(204).send({ "msg": "Flight Updated Successfully" });
    console.log(`flight with id:${id} is updated`);
    }else{
        res.status(500).send({ "msg": error.message,"alert":"Something went wrong at update flight" });
        console.log(error);
    }

- DELETE flight/api/flights/:id
 - delte the flight 
 - if(true){
    res.status(202).send({ "msg": "Flight Deleted Successfully" });
        console.log(`flight with id:${id} is deleted`);
    }else{
        res.status(500).send({ "msg": error.message,"alert":"Something went wrong at delete flight" });
        console.log(error);
    }


## BOOKING FLIGTH

- GET book/api/flights
   -get the booking details with flight and user details

- POST book/api/booking
   - book the flight with help of flight id and user id


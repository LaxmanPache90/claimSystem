
 import post from "../../../backend/models/user";
 import connectDB from "../../../backend/middleware/mongodb";
// Storing expenses data in mongodb
 const CreateExpences = (req, res) => {
    // console.log("hello")

    try {


        console.log(req.body)
        // transporter.sendMail(mailOptions,function(error,info){
        //     if(error)
        //     {
        //         console.log('error occure'+error);
        //     }
        //     else
        //     {
        //         console.log("Email Sent "+info.response)
        //     }
        // })  
        const postdata = req.body;
        const newpost = new post(postdata)
        newpost.save();
        res.status(201).json("you registed sucessfully")

    }
    catch (e) {
        console.log("error occure " + e)
    }
};

export default connectDB(CreateExpences);
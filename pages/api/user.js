
import post from "../../backend/models/user";
import connectDB from "../../backend/middleware/mongodb";
 const GetAllExpences = async (req, res) => {

    try {
        const ExpensesData = await post.find({});
        //  console.log(ExpensesData);
        res.json(ExpensesData);
    }
    catch (e) {
        console.log("error occure " + e);
    }
};

export default connectDB(GetAllExpences);

 
 import post from "../../../models/user";
 import connectDB from "../../../middleware/mongodb";
 import { useRouter } from "next/dist/client/router";
import { ConsoleSqlOutlined } from "@ant-design/icons";
 const DeleteClaim = async (req, res) => {
    // const { cid } = req.query
    // const router = useRouter()
    const cid = req.query.id;;
    // console.log('deleting claim')
    // let cid=req.body;
    // res.json('deleted sucessfully')
    try {
        // console.log('hello')
        // console.log(cid)
        const resp = await post.remove({ "invoicenumber": cid})
        res.json("claim delted sucessfully")
        // console.log(resp)
    }
    catch (e) {
        // console.log(("error occure" + e)
        res.json("error occure")
    }
}
export default connectDB(DeleteClaim);
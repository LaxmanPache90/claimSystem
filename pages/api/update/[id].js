import post from "../../../backend/models/user";
import connectDB from "../../../backend/middleware/mongodb";


const UpdateClaim = async (req, res) => {
    try {
       
        // console.log("Hello body")
        // console.log(req.body);
        const invoiceNum =req.query.id;;;
        // console.log(invoiceNum)
        const { claimtype, visittype, name, invoicenumber, date, amout, remark } = req.body;
        // console.group(claimtype)
        // console.group(visittype)
        // console.group(name)
        const resp = await post.updateOne(

            { invoicenumber: invoiceNum },
            {
                $set: {
                    claimtype: claimtype,
                    visittype: visittype,
                    name: name,
                    invoicenumber: invoicenumber,
                    date: date,
                    amout: amout,
                    remark: remark,

                },
            })
            // console.log('data edited')
        res.json(resp);

    }
    catch (e) {
        console.log('error occure' + e)
    }
}

export default connectDB (UpdateClaim)
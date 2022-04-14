
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Input, message, Button, DatePicker, Select, Divider, Card, Table, Modal, Col, Row } from 'antd';
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
const { Column, ColumnGroup } = Table;
const dateFormat = 'YYYY/MM/DD';
import ClaimFrom from '../component/ClaimFrom';

export default function Home() {

    const [UserData, setUserData] = useState([])  //for displaying userdata in table
    const [Editng, setEditng] = useState(false)  // for checking user want to Edit claim or not
    const [OpenNewModel, setOpenNewModel] = useState(false) // Check for user wants to create new Claim or not
    const [EditingClaim, setEditingClaim] = useState({})     //for storing  all all claim data in single object

    useEffect(() => {
        // for Accessing All User data from DB
        axios.get(`${process.env.Base_URL}/api/user`).then(responce => {
            const { data } = responce;
            setUserData(data)
        }).catch((err) => {
            console.log('error' + err)
        })

    }, [])

    //Columns of Claim Expence table
    const columns = [
        {
            key: '1',
            title: 'Claim Type',
            dataIndex: 'claimtype'
        },
        {
            key: '2',
            title: 'Expence ID',
            dataIndex: 'invoicenumber'
        },
        {
            key: '3',
            title: 'Client Name',
            dataIndex: 'name'
        },
        {
            key: '4',
            title: 'Type of Visit',
            dataIndex: 'visittype'
        },
        {
            key: '5',
            title: 'Amount',
            dataIndex: 'amout'
        },
        {
            key: '6',
            title: 'Action',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => {  setEditng(true) ; setEditingClaim({ ...record })}} />
                        <Divider type="vertical" />
                        <DeleteOutlined style={{ color: 'red' }} onClick={() => { DeleteRowdata(record.invoicenumber) }} />
                    </>
                )
            }
        }

    ]

    // Delete Claim from Db
    const DeleteRowdata = async (invoicenumber) => {
        //   alert(invoicenumber)

        Modal.confirm({
            title: 'Are You Sure Wnat to Delete Claim',
            okText: 'Yes',
            okType: 'danger',
            onOk: async () => {
                // alert(invoicenumber)/
                try {
                    const resp = await axios.delete(`${process.env.Base_URL}/api/delete/${invoicenumber}`)
                    // console.log(resp)
                    alert(`${invoicenumber} deleted sucessfuly`)


                    const newdata = UserData.filter((item) => {
                        return item.invoicenumber !== invoicenumber;
                    })
                    setUserData(newdata);
                }
                catch (e) {
                    console.log('Error occure' + e)
                }
            }
        })

    }

    // Saving  updated  Data to Db api call 
    const SavedataToDB = async (EditingClaim) => {
        try {
            // router.patch('/update/:invoicenumber', UpdateClaim)
            const resp = await axios.patch(`${process.env.Base_URL}/api/update/${EditingClaim.invoicenumber}`, EditingClaim)
            // console.log(resp)
            // alert(`${invoicenumber} deleted sucessfuly`)
        }
        catch (e) {
            console.log('Error occure' + e)
        }
    }



    // Adding new Claim
    const AddNewExpences = async () => {
        try {
            const resp = await axios.post(`${process.env.Base_URL}/api/add/addClaim`, EditingClaim)
            alert(`Claim added sucessfuly`)
        }
        catch (e) {
            console.log('Error occure' + e)
        }
    }

    return (

        <>
            <div className="site-card-wrapper" style={{ marginBottom: 10 }}>
                <Row >
                    <Col span={24}>
                        <Card title=" Home / Apply Expences" bordered={false} >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>Expenses</div>
                                <Button type="primary" onClick={() => { setOpenNewModel(true);}}>Apply New Expense</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

            {/* Table for displaying data */}
            <Table
                columns={columns}
                dataSource={UserData}
                pagination={{ pageSize: 5 }}
            >
            </Table>


            {/* model for edit or Create new claim */}

            <Modal
                Title={OpenNewModel ? "Add Claim" : "Edit Claim"}
                destroyOnClose={true}
                visible={OpenNewModel || Editng}
                okText="Save"
                onCancel={() => {
                    setOpenNewModel(false)
                    setEditng(false)
                    setEditingClaim({})
                }}
                onOk={() => {
                    // console.log(EditingClaim)

                    if (OpenNewModel) {
                        // alert("new claim")
                        AddNewExpences()
                        setEditingClaim({})
                        setOpenNewModel(false)
                    }
                    if (Editng) {
                        // alert('editing data')
                        SavedataToDB(EditingClaim)
                        setUserData((pre) => {
                            // alert('editing')
                            return pre.map(claim => {
                                if (claim.invoicenumber === EditingClaim.invoicenumber) {
                                    return EditingClaim
                                }
                                else {
                                    return claim;
                                }
                            })
                        })
                        setEditng(false)
                        setEditingClaim({})
                    }
                }}
            >
               <ClaimFrom  setEditingClaim={setEditingClaim} EditingClaim={EditingClaim}/>
            </Modal>

        </>

    )
}

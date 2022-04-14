import React from 'react'
import moment from 'moment';
import { Form, Input, message, Button, DatePicker, Select, Divider, Card, Table, Modal, Col, Row } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { Column, ColumnGroup } = Table;
const dateFormat = 'YYYY/MM/DD';
const ClaimFrom = ({setEditingClaim ,EditingClaim}) => {
    const [form] = Form.useForm();
  return (
   <>    <div style={{ marginTop: 20 }}>
   <hr />
   <Form
       form={form}
       layout="vertical"
       onFinish={()=> message.success('Submit success!')}
       onFinishFailed={()=> message.error('Submit failed!')}
       autoComplete="off"
   >

       <Row>
           <Col span={8}>
               <Form.Item
                   name="Claim Type"
                   label="Claim Type"
                   style={{ marginRight: 10 }}
               >
                   <Select defaultValue={EditingClaim?.claimtype} style={{ width: 120 }} onChange={(value) => {
                       // alert(EditingClaim?.claimtype)
                       setEditingClaim((pre) => {
                           return { ...pre, claimtype: value }
                       })
                   }}>
                       <Option value="Travel">Travel</Option>
                       <Option value="Food">Food</Option>
                       <Option value="Mobile">Mobile</Option>
                       <Option value="Other">Other</Option>
                   </Select>
               </Form.Item>
           </Col>
           <Col span={8}>
               <Form.Item
                   name="Visit Type"
                   label="Visit Type"
                   style={{ marginRight: 10 }}
               >
                   <Select defaultValue={EditingClaim?.visittype} style={{ width: 120 }} onChange={(value) => {
                       setEditingClaim((pre) => {
                           return { ...pre, visittype: value }
                       })
                   }}>
                       <Option value="Business">Business</Option>
                       <Option value="individual">individual</Option>
                       <Option value="Financial">Financial</Option>
                       <Option value="Other">Other</Option>
                   </Select>
               </Form.Item>
           </Col>
           <Col span={8}>
               <Form.Item
                   name="Client"
                   label="Client"
               >
                   <Input
                       value={EditingClaim?.name}
                       defaultValue={EditingClaim?.name}
                       onChange={(e) => {
                           setEditingClaim((pre) => {
                               return { ...pre, name: e.target.value }
                           }

                           )

                       }
                       }
                       placeholder="Client Name" />
               </Form.Item>
           </Col>

       </Row>

       <Row>
           <Col span={8}>
               <Form.Item
                   name="Invoice Number"
                   label="Invoice Number"
                   style={{ marginRight: 10 }}
               >
                   <Input
                       value={EditingClaim?.invoicenumber}
                       defaultValue={EditingClaim?.invoicenumber}

                       onChange={(e) => {
                           // alert('onchange')
                           setEditingClaim((pre) => {
                               return { ...pre, invoicenumber: e.target.value }
                           }

                           )
                           // console.log(EditingClaim)
                       }
                       }
                       placeholder="Invoice Number" />
               </Form.Item>
           </Col>
           <Col span={8}>

               <Form.Item name="Invoice Date" label="Invoice Date"
                   style={{ marginRight: 10 }}
               // rules={[ { type: 'string'}]}
               >
                   <DatePicker value={EditingClaim?.date}
                       // defaultValue={EditingClaim?.date}
                       defaultValue={moment(EditingClaim?.date, dateFormat)}
                       onChange={(date) => {
                           setEditingClaim((pre) => {
                               return { ...pre, date: date }
                           })
                       }} placeholder="Form date" />
               </Form.Item>
           </Col>
           <Col span={8}>
               <Form.Item
                   name="Amount"
                   label="Amount"

               // rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
               >
                   <Input
                       value={EditingClaim?.amout}
                       defaultValue={EditingClaim?.amout}
                       onChange={(e) => {
                           // alert('onchange')
                           setEditingClaim((pre) => {
                               return { ...pre, amout: parseInt(e.target.value) }
                           }

                           )
                           // console.log(EditingClaim)
                       }
                       }
                       placeholder="Medium Input" />
               </Form.Item>
           </Col>
       </Row>
       <Row>
           <Col span={24}>
               <Form.Item
                   name="Remarks"
                   label="Remarks"
               >
                   <TextArea rows={4} value={EditingClaim?.remark}
                       defaultValue={EditingClaim?.remark}
                       onChange={(e) => {
                           // alert('onchange')
                           setEditingClaim((pre) => {
                               return { ...pre, remark: e.target.value }
                           }


                           )
                           // console.log(EditingClaim)
                       }
                       } placeholder="Please Enter Remark if any" />
               </Form.Item>
           </Col>

       </Row>
   </Form>
</div></>
  )
}

export default ClaimFrom
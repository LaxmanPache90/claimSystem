import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios';

import { Table, Tag, Space, Modal, Col, Row } from 'antd';
// import { useEffect } from 'react/cjs/react.production.min'
import React, { useState, useEffect } from 'react'

import {
  EditOutlined,
  DeleteOutlined 
} from '@ant-design/icons';

import styles from '../styles/Home.module.css'
import { ContactsFilled } from '@ant-design/icons';

export default function Home() {



  const featchdata=async()=>{
  const udata= await axios.get('http://localhost:3000/api/user')
  
  // console.log(udata)
  return udata;
  }
  const [useData, setuseData] = useState([])

  useEffect(()=>{
    
    const userData1 = async() => {
       const {data}=await featchdata()  
      
      // console.log('userdata1')
      // console.log(data)  
      setuseData(data)
    }
   userData1();
  
    // const data= featchdata();
    // // const {data}=;
    // console.log(data)
    // console.log('userdata')
    // setuseData(data)
  },[])

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
            // console.log(record.invoicenumber)
            return (
                <>
                    <EditOutlined   />
                    <DeleteOutlined   style={{ color: 'red' }}  onClick={() => { DeleteRowdata(record.invoicenumber) }}  />
                </>
            )
        }
    }

]


const DeleteRowdata = async (invoicenumber) => {
  //   alert(invoicenumber)

  Modal.confirm({
      title: 'Are You Sure Wnat to Delete Claim',
      okText: 'Yes',
      okType: 'danger',
      onOk: async () => {
          // setTableData(pre => {
          //     return pre.filter(claim => claim.invoicenumber !== invoicenumber)
          // })
          alert(invoicenumber)
          try {
              const resp = await axios.delete(`http://localhost:3000/api/delete/${invoicenumber}`)
              // console.log(resp)
              alert(`${invoicenumber} deleted sucessfuly`)


              const newdata=useData.filter((item)=>{
                return item.invoicenumber!==invoicenumber;
              })
              setuseData(newdata);
          }
          catch (e) {
              console.log('Error occure' + e)
          }
      }
  })

}

  // console.log(useData)
 
  return (
  
<> 
<Table
                columns={columns}
                dataSource={useData}
                pagination={{ pageSize: 5 }}
            >

            </Table>
</>
  
  )
}

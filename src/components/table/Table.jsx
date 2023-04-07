import React, { useEffect } from 'react'

export const Table = () => {
    const token = `f78tIV-pxUhp77dEs458o-EdaGbh2xnR5oE3gemcSL6NZrT_q-ed9owf7rL-igBhJXlrN-L3NfRMhgReesy2CEMiJFT2DcuM1sCFpuJaEeHr0TXs85oaOPLdYP5XWxayfzY4TDinxlQbwFhzCP2ATqTqo32pC9MmCJkFxqr7oO2xUiFpVvGbmWgRhJHD1k31-ru7D38WJrZ6Kit8DFlDO1rA_du-QSNY2_r5DlGNlbQrdHr-xoZYbUMAs9KArFe4d_qPewLr3H4W8XvPvDzslwnEPHj4IzXchmGtNeOm1o8y-b2cTDM4VejVbkOpkQ66NiTRyceyqGvQ1V3EcAgif6Bc5_mx_DCk7lNCHsimchf8N3j61HuvfDunoaRQpOhwoeWYhUktiuUb3_VVUKYSX9F67Qq1ij4ARo5fzpAicAPEDvMXFZwmYWt9F7U8l9Mc`;

    const fetchApi = async () =>{
        try{
            const res =  await fetch(`https://swift-test.ubagroup.com:4200/api/dashboard/details`, {
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json',
                    'Authorization': 'Bearer ' + token
                }
           });
           console.log(await res.json());
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchApi();
    }, [])

  return (
    <div>

    </div>
  )
}

import {  getDocs,where, query } from 'firebase/firestore';
import { firebaseDB } from '../config/firebaseConfig/firebaseConfig';

import { collection } from 'firebase/firestore';

class CustomerService {
    private  collection_name='customers';
    private docRef=collection(firebaseDB,this.collection_name);


    fetchAll = async () => {
        try {
            const docSnap = await getDocs(this.docRef)

            let temp_arr: any[] = [];
            docSnap.forEach((doc) => {
                // console.log(doc.id);
                let data: any = doc.data()
                data['id'] = doc.id;
                temp_arr.push(data)

            });

            console.log(temp_arr);
            

            return {
                success:true,
                data:temp_arr
            };

        } catch (error) {
            return {
                success:false,
                message:'problem occured'
            };
        }



    }
    fetchByName=async (name:string)=>{
        try {
            const q = query(this.docRef, where("customer_name", ">=", name),where("customer_name", "<=", name+'\uf8ff'));
            const docSnap=await getDocs(q);
            // console.log(docSnap);
            let data:any=[];
            docSnap.forEach(doc=>{
                let temp=doc.data();
                temp['id']=doc.id;
                data.push(temp);
            })

            return {
                success:true,
                data:data
            };

            
        } catch (error) {
            return {
                success:false,
                message:`problem occured: ${error}`
            }
        }
       

    }

}

const customerService = new CustomerService();

export default customerService;
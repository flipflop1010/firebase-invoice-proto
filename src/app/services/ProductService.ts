
import { addDoc, DocumentReference, getDoc, getDocs, doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { itemRef, firebaseDB } from '../config/firebaseConfig/firebaseConfig';
import ProductModel from '../data-models/ProductModel';
import { collection } from 'firebase/firestore';


class ProductService {
    private  collection_name='items';
    private itemsRef=collection(firebaseDB,this.collection_name);
    



    fetchAll = async () => {
        try {
            const docSnap = await getDocs(this.itemsRef)

            let temp_arr: any[] = [];
            docSnap.forEach((doc) => {
                // console.log(doc.id);
                let data: any = doc.data()
                data['id'] = doc.id;
                temp_arr.push(data)

            });

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

    fetch=async(id:any)=>{
       try {
        const docSnap=await getDoc(doc(firebaseDB,this.collection_name,id));

        // return docSnap.data()
        let data: any = docSnap.data();
        data['id'] = docSnap.id;

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

    add = async (data: ProductModel) => {
        // console.log(data);

        try {
            const docRef = await addDoc(itemRef, data);
            return {
                success: true,
                id: docRef.id,
                message: "Data added successfully"
            };

        } catch (error) {
            return {
                success: false,
                message: "Problem Occured"
            };
        }








    }
    update =async (id: any, data: ProductModel) => {
     try {
        const docSnap=await setDoc(doc(firebaseDB,this.collection_name,id),data);
        return {
            success:true,
            message:'update successfully',
        };
     } catch (error) {
        return {
            success:false,
            message:`Problem occured ${error}`
        }
     }

    }
    delete =async (id: any) => {
        try {
            const docSnap=await deleteDoc(doc(firebaseDB,this.collection_name,id));
            return {
                success:true,
                message:'delete successfully',
            };
         } catch (error) {
            return {
                success:false,
                message:`Problem occured ${error}`
            }
         }

    }
}


const productService = new ProductService();

export default productService;


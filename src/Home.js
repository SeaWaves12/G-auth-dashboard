import React,{useState, useEffect} from 'react'
import { authentication } from './firebase-config';
import { signOut } from "firebase/auth";
import Button from '@mui/material/Button';
import Layout from './Layout/Layout';
import db  from './firebase-config'
import { collection, getDocs } from "firebase/firestore";

const Home = () => {

    const [revenuesList, setRevenuesList] = useState()

    const signOutHandler = () => {
        signOut(authentication).then((res) => {
            console.log("signed out", res)
        }).catch((error) => {
            // An error happened.
        });
    }

    async function getRevenues(db) {
        const RevenueCol = collection(db, 'revenue');
        const revenueSnapshot = await getDocs(RevenueCol);
        const revenueList = revenueSnapshot.docs.map(doc => doc.data());
        console.log(revenueList)
        setRevenuesList(revenueList)
    }

    useEffect(() => {
        getRevenues(db)
    },[])

    return (
        <div>
            <div>
                {/* <button onClick={signOutHandler}>Sign Out</button> */}
                <Button variant="contained" onClick={signOutHandler}> Sign Out</Button>
            </div>
            <div style={{ margin:"16px"}}>
                {revenuesList && <Layout revenuesList={revenuesList}/>}
        </div>
        </div>
    )
}

export default Home

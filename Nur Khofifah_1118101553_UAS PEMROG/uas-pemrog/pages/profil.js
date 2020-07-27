import Head from 'next/head';
import Layout from '../component/layout';
export default function Home(){
    return(
        <div>
            <Layout>
            <div>
               
                    <center>
                        <table>
                <hr></hr>
                <h2>Data Diri:</h2>
                <hr></hr>
                <img class="imgdata" src="IMG_20200702_235735_634.jpg" weight="100" height="100"></img><br/>
                <p>Nama: Nur Khofifah</p>
                <p>NIM : 1118101553</p>
                <p>Ttl: Banyuwangi, 12-11-1999</p>
                <p>Jenis Kelamin: Perempuan</p>
                <p>Agama: Islam</p>
                <p>Alamat: Tulungrejo Glenmore Banyuangi</p>
                <p>Kewarganeraan: Indonesia</p>
                <p>Email: khofifah.bwi27@gmail.com</p>
                <p>No.Hp: 087758555883</p>
                </table>
                </center>
                
                </div>
            </Layout>
        </div>
    )
}
import Template from '../component/layout';
import Link from 'next/link';
import Footer from '../component/footer';

export default function Home(){
    return(
        <div>
            <Template>
            <div class="card mb-3">
            <div class="card bg-dark text-black">
                <img src="46.jpg" height="600" ></img>
                <center>
                <div class="card-img-overlay"><br/>
                    <h3 class="card-text" class="bold" class="display-3">Selamat Datang di E-Learning</h3>
                    <h1 class="card-text" class="bold">STIKOM Banyuwangi</h1><br/><br/>
                    <h4 class="card-text">Belajarlah Seolah Engkau Hidup Selamanya</h4>
                </div>
                </center>
                </div>
            <br/>
            <div className="row">
                                <div className="col-sm "><center>
                                    <p class="h5">Pendaftaran Gelombang lll</p>
                                    <p class="card-text">Pendaftaran mahasiswa baru masih dibuka hingga september 2020. Ingin mendaftar klik saja link http://stikombanyuwangi.ac.id</p>
                                    </center>
                                </div>
                                <div className="col-sm "><center>
                                    <p class="h5">Informasi Beasiswa</p>
                                    <p class="card-text">Ingin kuliah tapi terkendala oleh Biaya? tenang STIKOM menawarkan banyak alur beasiswa diantaranya STIKOM berbagi dan STIKOM prestasi</p>
                                    </center>
                                </div>
                                <div className="col-sm "><center>
                                    <p class="h5">Alamat</p>
                                    <p class="card-text">Website: http://stikombanyuwangi.ac.id<br/>Telp: (0333)417902<br/>Email: stikombanyuwangi@gmail.com</p>
                                    </center>                                  
                                </div>
                            </div>
            </div>
            </Template>
            </div>
            
    );
}
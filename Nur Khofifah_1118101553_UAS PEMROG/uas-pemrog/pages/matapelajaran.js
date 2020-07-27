import Template from '../component/layout';
import Link from 'next/link';

export default function Home(){
    return(
        <div>
            <Template>
            <br/>
            <div className="row">
                                <div className="col-sm ">
                                    <div class="card">
                                        <img class="card-img-top" src="l-gambar-kartun-guru-lucu9e8ee19fd25915a14fed7f77b73d464020181019172221-bimacms.jpg" height="250" alt="Card image cap"></img>
                                        <div class="card-body">
                                            <p class="card-text" class="h3">Bahasa Indonesia</p>
                                            <button type="button" class="btn btn-success">Lihat</button>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-sm ">
                                <div class="card">
                                        <img class="card-img-top" src="1_y6YFkvbZjpiwApyEgCtJAw.jpeg" alt="Card image cap" height="250"></img>
                                        <div class="card-body">
                                            <p class="card-text" class="h3">Rekayasa Perangkat Lunak</p>
                                            <button type="button" class="btn btn-success">Lihat</button>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-sm ">
                                <div class="card">
                                        <img class="card-img-top" src="download.jpg" alt="Card image cap" height="250"></img>
                                        <div class="card-body">
                                            <p class="card-text"  class="h3">Algoritma Pemograman</p>
                                            <button type="button" class="btn btn-success">Lihat</button>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-sm ">
                                <div class="card">
                                        <img class="card-img-top" src="kisspng-statistics-statistician-clip-art-5b084caf3b3455.3260773915272705752425.jpg" height="250" alt="Card image cap"></img>
                                        <div class="card-body">
                                            <p class="card-text"  class="h3">Statistik</p>
                                            <button type="button" class="btn btn-success">Lihat</button>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-sm ">
                                <div class="card">
                                        <img class="card-img-top" src="1567570256-maxresdefa.jpg" height="250" alt="Card image cap"></img>
                                        <div class="card-body">
                                            <p class="card-text"  class="h3">Bahasa Inggris</p>
                                            <button type="button" class="btn btn-success">Lihat</button>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-sm">
                                <div class="card">
                                        <img class="card-img-top" src="download.png" height="250" alt="Card image cap"></img>
                                        <div class="card-body">
                                            <p class="card-text"  class="h3">Data Mining</p>
                                            <button type="button" class="btn btn-success">Lihat</button>
                                        </div>
                                        </div>
                                </div>
                            </div>
                            <br/>
            </Template>
            </div>
    );
}
import Head from 'next/head';
import Template from '../../component/layout';

export default function Conten(){
    return(
        <Template>
            <br/>
            <center>
            <div class="col-10 card border-success mb-3" width="18">
            <div class="card-header bg-transparent "  class="h5">Tugas UAS Bahasa indonesia</div>
            <div class="card-body ">
                <p class="card-title" class="left">Diposting tanggal 20 juli</p>
                <p class="card-text">Setelah akhir materi ini, silakan menentukan materi dan mulai menyusun dalam bentuk karya tulis ilmiah (artikel ilmiah/jurnal ilmiah) Pertemuan berikutnya bisa dikonsultasikan</p>
            </div>
              <button type="button" class="btn btn-danger">Lihat</button>
            </div>
            <br/>
            <div class="col-10 card  mb-3" width="18">
            <div class="card-header bg-transparent "  class="h5">Tugas Data Mining</div>
            <div class="card-body ">
                <p class="card-title">Diposting tanggal 21 juli</p>
                <p class="card-text">Pada halaman terakhir dari materi slide, terdapat tabel yang disajikan, lakukan tracing dengan metode 1-R Holte hingga mampu menghasilkan sebuah Classification Rule. Tugas diupload dalam bentuk Excel melalui laman e-learning. Batas pengumpulan adalah mulai tanggal 19 - 20 Maret 2020, pukul 23.59 WIB.</p>
            </div>
            <button type="button" class="btn btn-danger">Lihat</button>
            </div>
            <br/>
            <div class="col-10 card  mb-3" width="18">
            <div class="card-header bg-transparent "  class="h5">Tugas Rekayasa Perangkat Lunak</div>
            <div class="card-body ">
            <p class="card-title">Diposting tanggal 23 juli</p>
                <p class="card-text">Soal UAS dalam bentuk Essay.Jawablah soal dengan benar dan jelas</p>
            </div>
            <button type="button" class="btn btn-danger">Lihat</button>
            </div>
            <br/>
            <div class="col-10 card mb-3" width="18">
            <div class="card-header bg-transparent "  class="h5"> Tugas Statistik</div>
            <div class="card-body ">
                <p class="card-title">Diposting tanggal 27 juli</p>
                <p class="card-text">Tugas dikumpulkan dalam bentuk pdf</p>
            </div>
            <button type="button" class="btn btn-danger">Lihat</button>
            </div>
            <br/>
            <div class="col-10 card  mb-3" width="18">
            <div class="card-header bg-transparent " class="h5">Tugas Algoritma Pemograman</div>
            <div class="card-body ">
                <p class="card-title">Diposting tanggal 28 juli</p>
                <p class="card-text">Buatlah sebuah Algoritma Pemograman tentang penjualan</p>
            </div>
            <button type="button" class="btn btn-danger">Lihat</button>
            </div>
            </center>
        </Template>
    )
}
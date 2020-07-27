import Head from 'next/head';
import Template from '../../component/layout';
import Link from 'next/link';

export default function Conten(){
    return(
        <Template>
            <div class="alert alert-success text-center" role="alert">
                <h3>Absen</h3>
            </div>
            <center>
            <div class="col-3 alert alert-success" role="alert">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Nama</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Nama Lengkap"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">NIM</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nim"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label>Hadir</label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label>Izin</label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label>Sakit</label>
  </div>
  <br/>
  <Link href="">
  <button type="submit" class="btn btn-success">Submit</button>
  </Link>
</form>
</div>
            </center>
        </Template>
    )
}
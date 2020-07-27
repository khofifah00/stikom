import React, { Component } from "react";
import Link from 'next/link';
import Head from "next/head";

export default class Login extends Component {
    render() {
        return (
            <div>
            <Head>
                <title>STIKOM PGRI BANYUWANGI</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="../css/bootstrap.css" rel="stylesheet" />
                <script src="../js/jquery.js"></script>
                <script src="../js/bootstrap.js"></script>
            </Head>
            <div class="alert alert-success text-center" role="alert">
                <h3>Login</h3>
            </div>
            <center>
            <div class="col-3 alert alert-success" role="alert">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link href="/beranda">
  <button type="submit" class="btn btn-success">Submit</button>
  </Link>
</form>
</div>
            </center>
            

            </div>
        );
    }
}
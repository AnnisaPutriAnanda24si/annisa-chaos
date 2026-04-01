import React from "react";
import "./custom.css";

export default function BiodataDiri() {
  return (
    <div className="container">
      <div className="left">
        <ProfilePhoto />
        <Contact />
        <Skills />
      </div>

      <div className="right">
        <NameSection />
        <PersonalInfo />
        <Education />
      </div>
    </div>
  );
}

function ProfilePhoto() {
  return (
    <div className="photo">
      <img src="img/2457301014.jpg" alt="Profile" />
    </div>
  );
}

function Contact() {
  return (
    <div className="section">
      <h3>Kontak</h3>
      <p>Instagram: @nsa987690</p>
      <p>Linkedin: Annisa Putri Ananda</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="section">
      <h3>Skills</h3>
      <ul>
        <li>Menggambar Digital</li>
        <li>PHP</li>
        <li>Laravel</li>
      </ul>
    </div>
  );
}

function NameSection() {
  return (
    <div className="section">
      <h1>Annisa Putri Ananda</h1>
      <p className="title">Mahasiswa Sistem Informasi G24</p>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="section">
      <h3>Biodata Diri</h3>
      <table className="biodata">
        <tbody>
          <tr>
            <td>Jenis Kelamin</td>
            <td>: Perempuan</td>
          </tr>
          <tr>
            <td>Tanggal Lahir</td>
            <td>: Pekanbaru, 9 September 2006</td>
          </tr>
          <tr>
            <td>Agama</td>
            <td>: Islam</td>
          </tr>
          <tr>
            <td>Alamat</td>
            <td>: Jalan Segar</td>
          </tr>
          <tr>
            <td>Kewarganegaraan</td>
            <td>: Indonesia</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Education() {
  return (
    <div className="section">
      <h3>Riwayat Pendidikan</h3>
      <p>SMK Labor Pekanbaru 2021 - 2024</p>
      <p>Politeknik Caltex Riau 2024 - Sekarang</p>
    </div>
  );
}




